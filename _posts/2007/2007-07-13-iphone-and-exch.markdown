---
layout: post
title: "iphone and exchange"
permalink: /2007/07/iphone-and-exch.html
---

<p>So say you're one of the lucky <del>few</del> many who use Exchange for their work (or even personal) email, and you buy a shiny new iPhone.&nbsp; And you go through the magic incantations to connect your iPhone to your Exchange account (mmmm, IMAP), and all is hunky dory.&nbsp; You're getting mail, you're reading mail, you're replying to mail, you're deleting mail.</p>

<p>Except wait -- you're not really deleting mail, are you.&nbsp; Because even though you're deleting it on your iPhone (whoosh!), the next time you launch Outlook, the messages you deleted on your phone are still showing up in your inbox.&nbsp; &quot;What gives?&quot; you ask.&nbsp; &quot;How the **** am I supposed to use this $600+ device to manage my inbox if it's not actually deleting messages?&quot;</p>

<p>So here's what's actually happening, and here's how you can work around this current shortcoming.&nbsp; </p>


<p>First, what the iPhone is doing is marking the message for deletion,
and not actually deleting the message.&nbsp; (For many Exchange types, this
&quot;marked for deletion&quot; may be a new concept; I'd encourage those folks
to read up on IMAP, but wow would <em>that</em> make for a boring weekend.)&nbsp; </p>

<p>Second, Outlook acting as an Exchange client has no knowledge of
this flag that's set on those messages.&nbsp; So even though you've deleted
them on your phone, and they're marked for deletion on the server,
Outlook (again, acting as an Exchange client) just shows the messages
still in your box.&nbsp; They're read, but not gone.</p>

<p>Here's the workaround, courtesy of <a href="http://discussions.apple.com/profile.jspa?userID=931108">bigmo2940</a> on the Apple discussion forums.&nbsp; It may bend your noodle a bit, but bear with me.</p>

<ol><li>Create a new IMAP account in Outlook that uses the same
preferences as how you've configured your iPhone.&nbsp; Yes, this means that
you'll now have two accounts in Outlook talking to the same mailstore: 
one via Exchange and one via IMAP.&nbsp; (Yes, this is awkward and
inelegant.)</li>

<li>Navigate to that inbox in Outlook and note how now you can see
those messages that you've marked for deletion via your iPhone.&nbsp; Unless
you've configured your message views otherwise, they should be gray and
struck-through and <del><span style="color: #999999;">look something like this</span></del>.</li>

<li>Go to Edit &gt; Purge &gt; Purge Marked items in Inbox.&nbsp; Or,
alternatively, Edit &gt; Purge &gt; Purge Marked Items in &quot;account
name&quot;.&nbsp; This will permanently remove / delete those messages that you
deleted from your iPhone.&nbsp; </li></ol>

<p>You can then either manage your mail from that inbox, or navigate
back to your primary Exchange inbox (which I recommend; after all,
Outlook and Exchange were made for one another).&nbsp; Once you're back in
your Exchange inbox you'll note that all the messages you've just
purged have been deleted.</p>

<p>Yes, this is a total hack, but a clever one nonetheless (thanks
again bigmo2940).&nbsp; But I'm hoping it's a temporary one and Apple indeed
has licensed <a href="http://www.microsoft.com/exchange/evaluation/features/owa_mobile.mspx">Over the Air ActiveSync</a>
for Exchange (where &quot;mmmm, IMAP&quot; becomes &quot;mmmm, push email and contacts
and calendaring&quot;) and ships it with an update at some point in the
not-too-distant future.</p>

<p><script type="text/javascript"><!--
google_ad_client = "pub-3054477741968078";
google_ad_width = 468;
google_ad_height = 60;
google_ad_format = "468x60_as";
google_ad_type = "text";
google_ad_channel = "";
google_color_border = "CCCCCC";
google_color_bg = "FFFFFF";
google_color_link = "0066FF";
google_color_text = "000000";
google_color_url = "999999";
google_ui_features = "rc:6";
//-->
</script>
<script src="http://pagead2.googlesyndication.com/pagead/show_ads.js" type="text/javascript">&nbsp;</script></p>

