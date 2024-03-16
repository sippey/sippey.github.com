var books = [
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "publication_date": "1925",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-great-gatsby.jpg?v2"
  },
  {
    "title": "An American Tragedy",
    "author": "Theodore Dreiser",
    "publication_date": "1925",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/an-american-tragedy.jpg?v2"
  },
  {
    "title": "The Making of Americans",
    "author": "Gertrude Stein",
    "publication_date": "1925",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-making-of-americans.jpg?v2"
  },
  {
    "title": "Death Comes for the Archbishop",
    "author": "Willa Cather",
    "publication_date": "1927",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/death-comes-for-the-archbishop.jpg?v2"
  },
  {
    "title": "A Farewell to Arms",
    "author": "Ernest Hemingway",
    "publication_date": "1929",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/a-farewell-to-arms.jpg?v2"
  },
  {
    "title": "Passing",
    "author": "Nella Larsen",
    "publication_date": "1929",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/passing.jpg?v2"
  },
  {
    "title": "The Sound and the Fury",
    "author": "William Faulkner",
    "publication_date": "1929",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-sound-and-the-fury.jpg?v2"
  },
  {
    "title": "Absalom, Absalom!",
    "author": "William Faulkner",
    "publication_date": "1936",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/absalom-absalom.jpg?v2"
  },
  {
    "title": "Nightwood",
    "author": "Djuna Barnes",
    "publication_date": "1936",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/nightwood.jpg?v2"
  },
  {
    "title": "East Goes West",
    "author": "Younghill Kang",
    "publication_date": "1937",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/east-goes-west.jpg?v2"
  },
  {
    "title": "Their Eyes Were Watching God",
    "author": "Zora Neale Hurston",
    "publication_date": "1937",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/their-eyes-were-watching-god.jpg?v2"
  },
  {
    "title": "U.S.A.",
    "author": "John Dos Passos",
    "publication_date": "1937",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/usa.jpg?v2"
  },
  {
    "title": "Ask the Dust",
    "author": "John Fante",
    "publication_date": "1939",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/ask-the-dust.jpg?v2"
  },
  {
    "title": "The Big Sleep",
    "author": "Raymond Chandler",
    "publication_date": "1939",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-big-sleep.jpg?v2"
  },
  {
    "title": "The Day of the Locust",
    "author": "Nathanael West",
    "publication_date": "1939",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-day-of-the-locust.jpg?v2"
  },
  {
    "title": "The Grapes of Wrath",
    "author": "John Steinbeck",
    "publication_date": "1939",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-grapes-of-wrath.jpg?v2"
  },
  {
    "title": "Native Son",
    "author": "Richard Wright",
    "publication_date": "1940",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/native-son.jpg?v2"
  },
  {
    "title": "The Heart Is a Lonely Hunter",
    "author": "Carson McCullers",
    "publication_date": "1940",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-heart-is-a-lonely-hunter.jpg?v2"
  },
  {
    "title": "A Time to Be Born",
    "author": "Dawn Powell",
    "publication_date": "1942",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/a-time-to-be-born.jpg?v2"
  },
  {
    "title": "All the King’s Men",
    "author": "Robert Penn Warren",
    "publication_date": "1946",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/all-the-kings-men.jpg?v2"
  },
  {
    "title": "The Street",
    "author": "Ann Petry",
    "publication_date": "1946",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-street.jpg?v2"
  },
  {
    "title": "In a Lonely Place",
    "author": "Dorothy B. Hughes",
    "publication_date": "1947",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/in-a-lonely-place.jpg?v2"
  },
  {
    "title": "The Mountain Lion",
    "author": "Jean Stafford",
    "publication_date": "1947",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-mountain-lion.jpg?v2"
  },
  {
    "title": "The Catcher in the Rye",
    "author": "J. D. Salinger",
    "publication_date": "1951",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-catcher-in-the-rye.jpg?v2"
  },
  {
    "title": "Charlotte’s Web",
    "author": "E. B. White",
    "publication_date": "1952",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/charlottes-web.jpg?v2"
  },
  {
    "title": "Invisible Man",
    "author": "Ralph Ellison",
    "publication_date": "1952",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/invisible-man.jpg?v2"
  },
  {
    "title": "Fahrenheit 451",
    "author": "Ray Bradbury",
    "publication_date": "1953",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/fahrenheit-451.jpg?v2"
  },
  {
    "title": "Maud Martha",
    "author": "Gwendolyn Brooks",
    "publication_date": "1953",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/maud-martha.jpg?v2"
  },
  {
    "title": "The Adventures of Augie March",
    "author": "Saul Bellow",
    "publication_date": "1953",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-adventures-of-augie-march.jpg?v2"
  },
  {
    "title": "Lolita",
    "author": "Vladimir Nabokov",
    "publication_date": "1955",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/lolita.jpg?v2"
  },
  {
    "title": "Giovanni’s Room",
    "author": "James Baldwin",
    "publication_date": "1956",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/giovannis-room.jpg?v2"
  },
  {
    "title": "Peyton Place",
    "author": "Grace Metalious",
    "publication_date": "1956",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/peyton-place.jpg?v2"
  },
  {
    "title": "Deep Water",
    "author": "Patricia Highsmith",
    "publication_date": "1957",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/deep-water.jpg?v2"
  },
  {
    "title": "No-No Boy",
    "author": "John Okada",
    "publication_date": "1957",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/no-no-boy.jpg?v2"
  },
  {
    "title": "On the Road",
    "author": "Jack Kerouac",
    "publication_date": "1957",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/on-the-road.jpg?v2"
  },
  {
    "title": "The Haunting of Hill House",
    "author": "Shirley Jackson",
    "publication_date": "1959",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-haunting-of-hill-house.jpg?v2"
  },
  {
    "title": "Catch-22",
    "author": "Joseph Heller",
    "publication_date": "1961",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/catch-22.jpg?v2"
  },
  {
    "title": "A Wrinkle in Time",
    "author": "Madeleine L'Engle",
    "publication_date": "1962",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/a-wrinkle-in-time.jpg?v2"
  },
  {
    "title": "Another Country",
    "author": "James Baldwin",
    "publication_date": "1962",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/another-country.jpg?v2"
  },
  {
    "title": "One Flew Over the Cuckoo’s Nest",
    "author": "Ken Kesey",
    "publication_date": "1962",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/one-flew-over-the-cuckoos-nest.jpg?v2"
  },
  {
    "title": "Pale Fire",
    "author": "Vladimir Nabokov",
    "publication_date": "1962",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/pale-fire.jpg?v2"
  },
  {
    "title": "The Zebra-Striped Hearse",
    "author": "Ross Macdonald",
    "publication_date": "1962",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-zebra-striped-hearse.jpg?v2"
  },
  {
    "title": "The Bell Jar",
    "author": "Sylvia Plath",
    "publication_date": "1963",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-bell-jar.jpg?v2"
  },
  {
    "title": "The Group",
    "author": "Mary McCarthy",
    "publication_date": "1963",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-group.jpg?v2"
  },
  {
    "title": "The Crying of Lot 49",
    "author": "Thomas Pynchon",
    "publication_date": "1966",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-crying-of-lot-49.jpg?v2"
  },
  {
    "title": "A Sport and a Pastime",
    "author": "James Salter",
    "publication_date": "1967",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/a-sport-and-a-pastime.jpg?v2"
  },
  {
    "title": "Couples",
    "author": "John Updike",
    "publication_date": "1968",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/couples.jpg?v2"
  },
  {
    "title": "Do Androids Dream of Electric Sheep?",
    "author": "Philip K. Dick",
    "publication_date": "1968",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/do-androids-dream-of-electric-sheep.jpg?v2"
  },
  {
    "title": "Divorcing",
    "author": "Susan Taubes",
    "publication_date": "1969",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/divorcing.jpg?v2"
  },
  {
    "title": "Portnoy’s Complaint",
    "author": "Philip Roth",
    "publication_date": "1969",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/portnoys-complaint.jpg?v2"
  },
  {
    "title": "Slaughterhouse-Five",
    "author": "Kurt Vonnegut",
    "publication_date": "1969",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/slaughterhouse-five.jpg?v2"
  },
  {
    "title": "Are You There God? It’s Me, Margaret",
    "author": "Judy Blume",
    "publication_date": "1970",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/are-you-there-god-its-me-margaret.jpg?v2"
  },
  {
    "title": "Desperate Characters",
    "author": "Paula Fox",
    "publication_date": "1970",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/desperate-characters.jpg?v2"
  },
  {
    "title": "Play It as It Lays",
    "author": "Joan Didion",
    "publication_date": "1970",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/play-it-as-it-lays.jpg?v2"
  },
  {
    "title": "Log of the S.S. The Mrs Unguentine",
    "author": "Stanley Crawford",
    "publication_date": "1972",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/log-of-the-ss-the-mrs-unguentine.jpg?v2"
  },
  {
    "title": "Mumbo Jumbo",
    "author": "Ishmael Reed",
    "publication_date": "1972",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/mumbo-jumbo.jpg?v2"
  },
  {
    "title": "Sula",
    "author": "Toni Morrison",
    "publication_date": "1973",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/sula.jpg?v2"
  },
  {
    "title": "The Revolt of the Cockroach People",
    "author": "Oscar Zeta Acosta",
    "publication_date": "1973",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-revolt-of-the-cockroach-people.jpg?v2"
  },
  {
    "title": "Oreo",
    "author": "Fran Ross",
    "publication_date": "1974",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/oreo.jpg?v2"
  },
  {
    "title": "The Dispossessed",
    "author": "Ursula K. Le Guin",
    "publication_date": "1974",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-dispossessed.jpg?v2"
  },
  {
    "title": "Winter in the Blood",
    "author": "James Welch",
    "publication_date": "1974",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/winter-in-the-blood.jpg?v2"
  },
  {
    "title": "Corregidora",
    "author": "Gayl Jones",
    "publication_date": "1975",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/corregidora.jpg?v2"
  },
  {
    "title": "Speedboat",
    "author": "Renata Adler",
    "publication_date": "1976",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/speedboat.jpg?v2"
  },
  {
    "title": "Ceremony",
    "author": "Leslie Marmon Silko",
    "publication_date": "1977",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/ceremony.jpg?v2"
  },
  {
    "title": "Song of Solomon",
    "author": "Toni Morrison",
    "publication_date": "1977",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/song-of-solomon.jpg?v2"
  },
  {
    "title": "A Contract With God",
    "author": "Will Eisner",
    "publication_date": "1978",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/a-contract-with-god.jpg?v2"
  },
  {
    "title": "Dancer From the Dance",
    "author": "Andrew Holleran",
    "publication_date": "1978",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/dancer-from-the-dance.jpg?v2"
  },
  {
    "title": "The Stand",
    "author": "Stephen King",
    "publication_date": "1978",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-stand.jpg?v2"
  },
  {
    "title": "Kindred",
    "author": "Octavia E. Butler",
    "publication_date": "1979",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/kindred.jpg?v2"
  },
  {
    "title": "The Dog of the South",
    "author": "Charles Portis",
    "publication_date": "1979",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-dog-of-the-south.jpg?v2"
  },
  {
    "title": "Housekeeping",
    "author": "Marilynne Robinson",
    "publication_date": "1980",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/housekeeping.jpg?v2"
  },
  {
    "title": "The Salt Eaters",
    "author": "Toni Cade Bambara",
    "publication_date": "1980",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-salt-eaters.jpg?v2"
  },
  {
    "title": "Little, Big: Or, the Fairies’ Parliament",
    "author": "John Crowley",
    "publication_date": "1981",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/little-big-or-the-fairies-parliament.jpg?v2"
  },
  {
    "title": "Oxherding Tale",
    "author": "Charles Johnson",
    "publication_date": "1982",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/oxherding-tale.jpg?v2"
  },
  {
    "title": "Machine Dreams",
    "author": "Jayne Anne Phillips",
    "publication_date": "1984",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/machine-dreams.jpg?v2"
  },
  {
    "title": "Blood Meridian",
    "author": "Cormac McCarthy",
    "publication_date": "1985",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/blood-meridian.jpg?v2"
  },
  {
    "title": "A Summons to Memphis",
    "author": "Peter Taylor",
    "publication_date": "1986",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/a-summons-to-memphis.jpg?v2"
  },
  {
    "title": "Watchmen",
    "author": "Alan Moore and Dave Gibbons",
    "publication_date": "1986",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/watchmen.jpg?v2"
  },
  {
    "title": "Beloved",
    "author": "Toni Morrison",
    "publication_date": "1987",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/beloved.jpg?v2"
  },
  {
    "title": "Dawn",
    "author": "Octavia E. Butler",
    "publication_date": "1987",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/dawn.jpg?v2"
  },
  {
    "title": "Geek Love",
    "author": "Katherine Dunn",
    "publication_date": "1989",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/geek-love.jpg?v2"
  },
  {
    "title": "Tripmaster Monkey",
    "author": "Maxine Hong Kingston",
    "publication_date": "1989",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/tripmaster-monkey.jpg?v2"
  },
  {
    "title": "Dogeaters",
    "author": "Jessica Hagedorn",
    "publication_date": "1990",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/dogeaters.jpg?v2"
  },
  {
    "title": "American Psycho",
    "author": "Bret Easton Ellis",
    "publication_date": "1991",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/american-psycho.jpg?v2"
  },
  {
    "title": "How the García Girls Lost Their Accents",
    "author": "Julia Alvarez",
    "publication_date": "1991",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/how-the-garcia-girls-lost-their-accents.jpg?v2"
  },
  {
    "title": "Mating",
    "author": "Norman Rush",
    "publication_date": "1991",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/mating.jpg?v2"
  },
  {
    "title": "Bastard Out of Carolina",
    "author": "Dorothy Allison",
    "publication_date": "1992",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/bastard-out-of-carolina.jpg?v2"
  },
  {
    "title": "The Secret History",
    "author": "Donna Tartt",
    "publication_date": "1992",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-secret-history.jpg?v2"
  },
  {
    "title": "So Far From God",
    "author": "Ana Castillo",
    "publication_date": "1993",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/so-far-from-god.jpg?v2"
  },
  {
    "title": "Stone Butch Blues",
    "author": "Leslie Feinberg",
    "publication_date": "1993",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/stone-butch-blues.jpg?v2"
  },
  {
    "title": "The Shipping News",
    "author": "Annie Proulx",
    "publication_date": "1993",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-shipping-news.jpg?v2"
  },
  {
    "title": "Native Speaker",
    "author": "Chang-rae Lee",
    "publication_date": "1995",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/native-speaker.jpg?v2"
  },
  {
    "title": "Sabbath’s Theater",
    "author": "Philip Roth",
    "publication_date": "1995",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/sabbaths-theater.jpg?v2"
  },
  {
    "title": "Under the Feet of Jesus",
    "author": "Helena María Viramontes",
    "publication_date": "1995",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/under-the-feet-of-jesus.jpg?v2"
  },
  {
    "title": "Infinite Jest",
    "author": "David Foster Wallace",
    "publication_date": "1996",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/infinite-jest.jpg?v2"
  },
  {
    "title": "I Love Dick",
    "author": "Chris Kraus",
    "publication_date": "1997",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/i-love-dick.jpg?v2"
  },
  {
    "title": "Underworld",
    "author": "Don DeLillo",
    "publication_date": "1997",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/underworld.jpg?v2"
  },
  {
    "title": "The Intuitionist",
    "author": "Colson Whitehead",
    "publication_date": "1999",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-intuitionist.jpg?v2"
  },
  {
    "title": "Blonde",
    "author": "Joyce Carol Oates",
    "publication_date": "2000",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/blonde.jpg?v2"
  },
  {
    "title": "House of Leaves",
    "author": "Mark Z. Danielewski",
    "publication_date": "2000",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/house-of-leaves.jpg?v2"
  },
  {
    "title": "The Amazing Adventures of Kavalier & Clay",
    "author": "Michael Chabon",
    "publication_date": "2000",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-amazing-adventures-of-kavalier-and-clay.jpg?v2"
  },
  {
    "title": "The Last Samurai",
    "author": "Helen DeWitt",
    "publication_date": "2000",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-last-samurai.jpg?v2"
  },
  {
    "title": "The Quick and the Dead",
    "author": "Joy Williams",
    "publication_date": "2000",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-quick-and-the-dead.jpg?v2"
  },
  {
    "title": "Erasure",
    "author": "Percival Everett",
    "publication_date": "2001",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/erasure.jpg?v2"
  },
  {
    "title": "I, the Divine",
    "author": "Rabih Alameddine",
    "publication_date": "2001",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/i-the-divine.jpg?v2"
  },
  {
    "title": "The Corrections",
    "author": "Jonathan Franzen",
    "publication_date": "2001",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-corrections.jpg?v2"
  },
  {
    "title": "Caramelo",
    "author": "Sandra Cisneros",
    "publication_date": "2002",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/caramelo.jpg?v2"
  },
  {
    "title": "Perma Red",
    "author": "Debra Magpie Earling",
    "publication_date": "2002",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/perma-red.jpg?v2"
  },
  {
    "title": "The Russian Debutante’s Handbook",
    "author": "Gary Shteyngart",
    "publication_date": "2002",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-russian-debutantes-handbook.jpg?v2"
  },
  {
    "title": "The Namesake",
    "author": "Jhumpa Lahiri",
    "publication_date": "2003",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-namesake.jpg?v2"
  },
  {
    "title": "Veronica",
    "author": "Mary Gaitskill",
    "publication_date": "2005",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/veronica.jpg?v2"
  },
  {
    "title": "The Brief Wondrous Life of Oscar Wao",
    "author": "Junot Díaz",
    "publication_date": "2007",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-brief-wondrous-life-of-oscar-wao.jpg?v2"
  },
  {
    "title": "A Visit From the Goon Squad",
    "author": "Jennifer Egan",
    "publication_date": "2010",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/a-visit-from-the-goon-squad.jpg?v2"
  },
  {
    "title": "I Hotel",
    "author": "Karen Tei Yamashita",
    "publication_date": "2010",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/i-hotel.jpg?v2"
  },
  {
    "title": "Open City",
    "author": "Teju Cole",
    "publication_date": "2011",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/open-city.jpg?v2"
  },
  {
    "title": "Salvage the Bones",
    "author": "Jesmyn Ward",
    "publication_date": "2011",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/salvage-the-bones.jpg?v2"
  },
  {
    "title": "The Round House",
    "author": "Louise Erdrich",
    "publication_date": "2012",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-round-house.jpg?v2"
  },
  {
    "title": "Americanah",
    "author": "Chimamanda Ngozi Adichie",
    "publication_date": "2013",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/americanah.jpg?v2"
  },
  {
    "title": "Nevada",
    "author": "Imogen Binnie",
    "publication_date": "2013",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/nevada.jpg?v2"
  },
  {
    "title": "A Brief History of Seven Killings",
    "author": "Marlon James",
    "publication_date": "2014",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/a-brief-history-of-seven-killings.jpg?v2"
  },
  {
    "title": "Family Life",
    "author": "Akhil Sharma",
    "publication_date": "2014",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/family-life.jpg?v2"
  },
  {
    "title": "Fates and Furies",
    "author": "Lauren Groff",
    "publication_date": "2015",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/fates-and-furies.jpg?v2"
  },
  {
    "title": "The Fifth Season",
    "author": "N. K. Jemisin",
    "publication_date": "2015",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-fifth-season.jpg?v2"
  },
  {
    "title": "The Sellout",
    "author": "Paul Beatty",
    "publication_date": "2015",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-sellout.jpg?v2"
  },
  {
    "title": "The Sympathizer",
    "author": "Viet Thanh Nguyen",
    "publication_date": "2015",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-sympathizer.jpg?v2"
  },
  {
    "title": "Amiable With Big Teeth",
    "author": "Claude McKay",
    "publication_date": "2017",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/amiable-with-big-teeth.jpg?v2"
  },
  {
    "title": "Lincoln in the Bardo",
    "author": "George Saunders",
    "publication_date": "2017",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/lincoln-in-the-bardo.jpg?v2"
  },
  {
    "title": "Sabrina",
    "author": "Nick Drnaso",
    "publication_date": "2018",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/sabrina.jpg?v2"
  },
  {
    "title": "Severance",
    "author": "Ling Ma",
    "publication_date": "2018",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/severance.jpg?v2"
  },
  {
    "title": "There There",
    "author": "Tommy Orange",
    "publication_date": "2018",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/there-there.jpg?v2"
  },
  {
    "title": "Lost Children Archive",
    "author": "Valeria Luiselli",
    "publication_date": "2019",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/lost-children-archive.jpg?v2"
  },
  {
    "title": "Nothing to See Here",
    "author": "Kevin Wilson",
    "publication_date": "2019",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/nothing-to-see-here.jpg?v2"
  },
  {
    "title": "The Old Drift",
    "author": "Namwali Serpell",
    "publication_date": "2019",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-old-drift.jpg?v2"
  },
  {
    "title": "No One Is Talking About This",
    "author": "Patricia Lockwood",
    "publication_date": "2021",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/no-one-is-talking-about-this.jpg?v2"
  },
  {
    "title": "The Love Songs of W. E. B. Du Bois",
    "author": "Honorée Fanonne Jeffers",
    "publication_date": "2021",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/the-love-songs-of-w-e-b-du-bois.jpg?v2"
  },
  {
    "title": "Biography of X",
    "author": "Catherine Lacey",
    "publication_date": "2023",
    "cover_image": "https://cdn.theatlantic.com/media/files/est/best-books/biography-of-x.jpg?v2"
  }
];
