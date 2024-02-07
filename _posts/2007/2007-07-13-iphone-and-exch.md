---
layout: post
title: "iphone and exchange"
permalink: /2007/07/iphone-and-exch.html
---

So say you're one of the lucky few many who use Exchange for their work (or even personal) email, and you buy a shiny new iPhone.  And you go through the magic incantations to connect your iPhone to your Exchange account (mmmm, IMAP), and all is hunky dory.  You're getting mail, you're reading mail, you're replying to mail, you're deleting mail.

Except wait -- you're not really deleting mail, are you.  Because even though you're deleting it on your iPhone (whoosh!), the next time you launch Outlook, the messages you deleted on your phone are still showing up in your inbox.  "What gives?" you ask.  "How the **** am I supposed to use this $600+ device to manage my inbox if it's not actually deleting messages?"

So here's what's actually happening, and here's how you can work around this current shortcoming. 

First, what the iPhone is doing is marking the message for deletion, and not actually deleting the message.  (For many Exchange types, this "marked for deletion" may be a new concept; I'd encourage those folks to read up on IMAP, but wow would _that_ make for a boring weekend.) 

Second, Outlook acting as an Exchange client has no knowledge of this flag that's set on those messages.  So even though you've deleted them on your phone, and they're marked for deletion on the server, Outlook (again, acting as an Exchange client) just shows the messages still in your box.  They're read, but not gone.

Here's the workaround, courtesy of [bigmo2940](http://discussions.apple.com/profile.jspa?userID=931108) on the Apple discussion forums.  It may bend your noodle a bit, but bear with me.

1.  Create a new IMAP account in Outlook that uses the same preferences as how you've configured your iPhone.  Yes, this means that you'll now have two accounts in Outlook talking to the same mailstore: one via Exchange and one via IMAP.  (Yes, this is awkward and inelegant.)
2.  Navigate to that inbox in Outlook and note how now you can see those messages that you've marked for deletion via your iPhone.  Unless you've configured your message views otherwise, they should be gray and struck-through and look something like this.
3.  Go to Edit > Purge > Purge Marked items in Inbox.  Or, alternatively, Edit > Purge > Purge Marked Items in "account name".  This will permanently remove / delete those messages that you deleted from your iPhone. 

You can then either manage your mail from that inbox, or navigate back to your primary Exchange inbox (which I recommend; after all, Outlook and Exchange were made for one another).  Once you're back in your Exchange inbox you'll note that all the messages you've just purged have been deleted.

Yes, this is a total hack, but a clever one nonetheless (thanks again bigmo2940).  But I'm hoping it's a temporary one and Apple indeed has licensed [Over the Air ActiveSync](http://www.microsoft.com/exchange/evaluation/features/owa_mobile.mspx) for Exchange (where "mmmm, IMAP" becomes "mmmm, push email and contacts and calendaring") and ships it with an update at some point in the not-too-distant future.
