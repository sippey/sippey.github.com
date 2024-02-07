---
layout: post
title: "gmail, iphone and ajax"
permalink: /2008/01/gmail-iphone-an.html
---

This is pretty much the definition of a first world problem, but I know [I'm not the only one](http://www.kottke.org/remainder/08/01/14835.html) who thinks the new Gmail UI for the iPhone isn't all its cracked up to be. They moved basic transactions like reading and archiving messages into asynchronous calls, and it creates this incredibly disjointed and sluggish user experience. Case in point, archiving a message.

*   Steps to reproduce: view a message, touch the archive button.
*   Expected result: user is returned to the message list, with that message removed from the list.
*   Actual result: user is returned to the message list, with that message still in the message list. After several seconds a banner message appears stating that "The conversation has been marked as read." And then, after several more seconds (longer depending on the speed of your connection, on EDGE I've seen this take at least 10 seconds), another banner message apperas stating "The conversation has been archived."

Look, I'm a big fan of asynchronous JavaScript and XML. Just like I'm a big fan of HTML and CSS. And heck, HTTP for that matter. But the team made the technology they used the [lede of the story](http://gmailblog.blogspot.com/2008/01/new-gmail-for-iphone.html), which leads me to believe that the requirement wasn't "make Gmail faster for iPhone users, especially on EDGE," but something like "port UI to AJAX."

On the plus side, IMAP setup is now much easier, so maybe I'll switch to that.