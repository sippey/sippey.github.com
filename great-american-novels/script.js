document.addEventListener('DOMContentLoaded', function() {
  const booksGrid = document.getElementById('booksGrid');
  const readCount = document.getElementById('readCount');
  const readList = document.getElementById('readList');
  const decadeChartCanvas = document.getElementById('decadeChart');
  let readBooks = [];
  let readBooksCount = 0;
  let decadeChart;

  const decadeCounts = {}; // object to store decade counts

  // Initialize decadeCounts with total count of unread books for each decade
  books.forEach(book => {
    const publicationYear = parseInt(book.publication_date); // parse the publication year
    const decade = Math.floor(publicationYear / 10) * 10; // define the decade
    if (!decadeCounts[decade]) {
      decadeCounts[decade] = {
        unread: 1,
        read: 0
      };
    } else {
      decadeCounts[decade].unread++;
    }
  });

  updateDecadeChart(); // Initialize the chart with unread book counts

  books.forEach(book => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('bookItem');

    const bookCover = document.createElement('img');
    bookCover.src = book.cover_image;
    bookCover.classList.add('bookCover');

    const bookInfo = document.createElement('div');
    bookInfo.classList.add('bookInfo');
    bookInfo.innerHTML = `<div class="book-title">${book.title}</div><div class="book-author">${book.author}</div><div class="pub-date">${book.publication_date}</div>`;

    const publicationYear = parseInt(book.publication_date); // parse the publication year
    const decade = Math.floor(publicationYear / 10) * 10; // define the decade

    bookDiv.appendChild(bookCover);
    bookDiv.appendChild(bookInfo);

    bookDiv.addEventListener('click', function() {
      bookDiv.classList.toggle('checked');
      if (bookDiv.classList.contains('checked')) {
        // Update the count of read and unread books for the decade
        decadeCounts[decade].read++;
        decadeCounts[decade].unread--;
        // Update the readBooks array
        readBooks.push(book.title);
      } else {
        // Update the count of read and unread books for the decade
        decadeCounts[decade].read--;
        decadeCounts[decade].unread++;
        // Remove the book from readBooks array
        readBooks = readBooks.filter(title => title !== book.title);
      }
      updateReadCount();
      updateReadList();
      updateDecadeChart();
    });

    booksGrid.appendChild(bookDiv);
  });

  function updateReadCount() {
    readBooksCount = document.querySelectorAll('.bookItem.checked').length;
    readCount.textContent = `${readBooksCount} of ${books.length}`;
  }

  function updateReadList() {
    readList.innerHTML = readBooks.map(title => `<li>${title}</li>`).join('');
  }

  function updateDecadeChart() {
    const decades = Object.keys(decadeCounts);
    const unreadCounts = decades.map(decade => decadeCounts[decade].unread);
    const readCounts = decades.map(decade => decadeCounts[decade].read);

    // Check if decadeChart exists and it has a data object
    if (decadeChart && decadeChart.data) {
      decadeChart.data.labels = decades;
      decadeChart.data.datasets = [{
        label: 'Read',
        data: readCounts,
        backgroundColor: '#326B9A', // medium blue
        borderWidth: 0
      }, {
        label: 'To read',
        data: unreadCounts,
        backgroundColor: '#BFD7EA', // light blue 
        borderWidth: 0
      }];
      decadeChart.update(); // Update the chart
    } else {
      // Initialize the chart if it doesn't exist
      decadeChart = new Chart(decadeChartCanvas, {
        type: 'bar',
        data: {
          labels: decades,
          datasets: [{
            label: 'Read',
            data: readCounts,
            backgroundColor: '#326B9A', // medium blue
            borderWidth: 0
          }, {
            label: 'To read',
            data: unreadCounts,
            backgroundColor: '#BFD7EA', // light blue 
            borderWidth: 0
          }]
        },
        options: {
          animation: {
            duration: 0
          },
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            x: {
              stacked: true // Stacked bars on x-axis
            },
            y: {
              stacked: true // Stacked bars on y-axis
            }
          }
        }
      });
    }
  }
});
