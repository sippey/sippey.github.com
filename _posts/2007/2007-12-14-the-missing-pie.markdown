---
layout: post
title: "the missing piece"
permalink: /2007/12/the-missing-pie.html
---

<p>I'm very interested in today's announcement re. Amazon's <a href="http://www.amazon.com/gp/browse.html?node=342335011">SimpleDB</a>. This is, of course, the missing piece in the Amazon cloud services story -- storage, processing power, and now a hosted DB service. It's simple: there are domains, in domains there are items, and each item can have 256 attributes, and each attribute can be 1,024 bytes in length. Automatic indexing, no up front schema definition. I'm sure there are tons of startups that have been waiting for this, because now &quot;D<span class="small">evelopers can run their applications in Amazon EC2
and store their data objects in Amazon S3. Amazon SimpleDB can then be
used to query the object metadata from within the application in Amazon
EC2 and return pointers to the objects stored in Amazon S3.&quot;<br /><br />Some less than educated questions that come to mind:</span></p>

<ul><li>Is this <a href="http://www.allthingsdistributed.com/2007/10/amazons_dynamo.html">Dynamo</a>, or Dynamo backed?</li>

<li>How long until there are libraries for abstracting SimpleDB in PHP, Perl, Ruby, Python, etc.?</li>

<li>Could you / would you need to run a memcached service in front of SimpleDB in an EC2 instance? I can see wanting to do that in order to reduce the cost of i/o and processing time on SimpleDB (it's more expensive there than in EC2). </li>

<li>SimpleDB is obviously very far away from traditional RDBMS' like, say, MySQL. If developers build apps with SimpleDB on the backend, there's potentially some interesting lock-in risk for them (opportunity on the Amazon side) if someone doesn't develop a SimpleDB equivalent that you can run on your own boxen.</li>

<li>As a part-time data geek, I'm already imagining some very interesting ways I could use this to analyze large data sets that are basically a massive set of name / value pairs.</li></ul>

<p>In sum, <strong>[this is good]</strong>.</p>


