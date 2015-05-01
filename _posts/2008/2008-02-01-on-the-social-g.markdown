---
layout: post
title: "thoughts on the social graph api"
permalink: /2008/02/on-the-social-g.html
---

<p>Congrats to Brad Fitzpatrick on the unveiling of <a href="http://code.google.com/apis/socialgraph/">Google's Social Graph API</a>.&nbsp; I love that the work he started at Six Apart with <a href="http://www.openid.net/">OpenID</a> and the <a href="http://www.sixapart.com/about/news/2007/09/were_opening_th.html">open social graph</a> continues on at GOOG.&nbsp; Brad's video is a great introduction to the API; he is a master of the
whiteboard (I've seen it in action many many times), and I love the
fact that the first whiteboard scene looks like it's been shot in front
of a whiteboard that's eight stories tall.&nbsp; (Oh, and the line where he
says &quot;once we throw away all the links that aren't marked up like this&quot;
is perfect.)</p>

<p>Clearly from Google's perspective it's obvious and elegant to have the Googlebot reporting on the graph; if it's public data it's being indexed by Google already, and it encourages the use of simple markup like XFN and FOAF to declare social relationships. But I wouldn't be surprised to see some sort of privacy blowback on this when the API starts to get baked into consumer services: &quot;Wait -- Google knows who my friends are, too? How do they know this?&quot; It's going to be incumbent upon social services that are (a) enabling individuals to connect with one another and (b) expressing that connection in an indexable way to make it clear that those relationships <em>are</em> public (if they are) and demonstrate the benefits of those relationships being public (and the risks of exposing relationships you <em>don't</em> want public).&nbsp; I'm not talking about language in a privacy policy, I'm talking about features that create a better user experience for the data being available.</p>

<p>A short comparative story.&nbsp; About a year ago there was a pretty significant shift in how normal everyday people thought about blogs.&nbsp; (I'm not talking about what people in the echo chamber thought about blogs -- I'm talking about people who could care less about the people and service you know and love.)&nbsp; Perception shifted from &quot;why would I want to put that much information about myself out there&quot; to &quot;I need to do this to own my results page on Google.&quot; This wasn't about blogging for SEO, but rather about having control over what information is available about you online. Blogs are an easy way for people to do that, and it's driving the next big wave of adoption.</p>

<p>Here's the point:&nbsp; connections being discoverable (like they are today -- <a href="http://socialgraph-resources.googlecode.com/svn/trunk/samples/findcontacts.html?q=sippey.com">check out these results for sippey.com</a>) will drive the next wave of adoption of connection creation tools, just like content being discoverable is driving the current wave of adoption of content creation tools. </p>

<p>Three thought experiments, just for &quot;fun.&quot;</p>

<ul><li>Short term: This weekend Six Apart's David Recordon is hosting the social graph FOO Camp; what are the odds that a hack comes out of there to explore relationship strength and/or missing relationships based on this API.&nbsp; (Hey, Steve -- you're friends with Jerry on these three services, why not on this one?)</li>

<li>Medium term: How long until this is connected explicitly into my Google profile. It would be trivial for them to ask me to claim sippey.com as my own using OpenID. Search, advertising and all of their social stuff could be customized based on this information.</li>

<li>Long term: social relationships as an influencer of credit scores?</li></ul>


