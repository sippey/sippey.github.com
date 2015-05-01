---
layout: post
title: "g-mailto bookmarklet"
permalink: /2004/06/gmailto_bookmar.html
---

<p>Following the lead of Rabid Squirrel's <a href="http://www.rabidsquirrel.net/G-Mailto/">g-mailto</a>, I worked up a bookmarklet to pop up a new message window off my browser toolbar.  I've only tested this on IE6 for Windows, but it's the standard javascript stuff, so it should work everywhere.  Here you go...</p>

<p>&raquo; Drag this link to your toolbar:  <a href="javascript:void(open('https://gmail.google.com/gmail?view=page&name=compose&cmid=0&fs=1&tearoff=1','gmail', 'toolbar=no,width=700,height=700'));" onclick="window.alert('Drag this link to your toolbar or right-click it and choose bookmark.');location.href='http://gmail.com/';" >g-mailto</a></p>

<p>If you read the Rabid Squirrel definition of field variables (to, cc, bcc, subject, body, etc.) you could probably modify the link above to fit your particular email needs.  I haven't yet mucked about to see if it's possible to pull page titles or selected text from the browser and force it into message fields, but if that's possible the bookmarklet could become a great way to have the "send page by email" function via Gmail.</p>

<p><strong>Update.</strong>  Lazyweb to the rescue!  The ever-resourceful <a href="http://www.adammathes.com/">Adam Mathes</a> hacked up an improvement that pulls the current page's title and inserts into the subject line, inserts the page URL and any selected text into the body of the message.  You can grab it <a href="http://trenchant.org/plugins/">here</a>, or just do the drag thing again...</p>

<p>&raquo; Drag this link to your toolbar:  <a href="javascript:u=location.href;t=document.title;s='';x=document;y=window;if(x.selection){s=x.selection.createRange().text;} else if(y.getSelection){s=y.getSelection();}else if(x.getSelection){s=x.getSelection();}d='https://gmail.google.com/gmail?view=page&name=compose&cmid=0&fs=1&tearoff=1';if(t){su=t;}else{su=u;}d=d+'&su='+escape(su);if(s){d=d+'&body='+escape(u)+escape('\n\n')+escape(s);}void(window.open(d,'gmail','toolbar=no,width=700,height=700'));">g-mailit</a></p>

<p>I've got both of these living side by side now.  One for quick access to a blank message (g-mailto), the other for "mail this page" functionality (g-mailit). </p>

<p>Enjoy.</p>


