---
layout: post
date: 2004-06-25
title: "g-mailto bookmarklet"
permalink: /2004/06/gmailto_bookmar.html
---

Following the lead of Rabid Squirrel's [g-mailto](http://www.rabidsquirrel.net/G-Mailto/), I worked up a bookmarklet to pop up a new message window off my browser toolbar. I've only tested this on IE6 for Windows, but it's the standard javascript stuff, so it should work everywhere. Here you go...

» Drag this link to your toolbar: [g-mailto](javascript:void(open('https://gmail.google.com/gmail?view=page&name=compose&cmid=0&fs=1&tearoff=1','gmail', 'toolbar=no,width=700,height=700'));)

If you read the Rabid Squirrel definition of field variables (to, cc, bcc, subject, body, etc.) you could probably modify the link above to fit your particular email needs. I haven't yet mucked about to see if it's possible to pull page titles or selected text from the browser and force it into message fields, but if that's possible the bookmarklet could become a great way to have the "send page by email" function via Gmail.

**Update.** Lazyweb to the rescue! The ever-resourceful [Adam Mathes](http://www.adammathes.com/) hacked up an improvement that pulls the current page's title and inserts into the subject line, inserts the page URL and any selected text into the body of the message. You can grab it [here](http://trenchant.org/plugins/), or just do the drag thing again...

» Drag this link to your toolbar: [g-mailit](javascript:u=location.href;t=document.title;s='';x=document;y=window;if(x.selection){s=x.selection.createRange().text;} else if(y.getSelection){s=y.getSelection();}else if(x.getSelection){s=x.getSelection();}d='https://gmail.google.com/gmail?view=page&name=compose&cmid=0&fs=1&tearoff=1';if(t){su=t;}else{su=u;}d=d+'&su='+escape(su);if(s){d=d+'&body='+escape(u)+escape('\n\n')+escape(s);}void(window.open(d,'gmail','toolbar=no,width=700,height=700'));)

I've got both of these living side by side now. One for quick access to a blank message (g-mailto), the other for "mail this page" functionality (g-mailit).

Enjoy.