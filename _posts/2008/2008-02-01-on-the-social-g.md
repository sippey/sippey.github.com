---
layout: post
title: "thoughts on the social graph api"
permalink: /2008/02/on-the-social-g.html
---

Congrats to Brad Fitzpatrick on the unveiling of [Google's Social Graph API](http://code.google.com/apis/socialgraph/).  I love that the work he started at Six Apart with [OpenID](http://www.openid.net/) and the [open social graph](http://www.sixapart.com/about/news/2007/09/were_opening_th.html) continues on at GOOG.  Brad's video is a great introduction to the API; he is a master of the whiteboard (I've seen it in action many many times), and I love the fact that the first whiteboard scene looks like it's been shot in front of a whiteboard that's eight stories tall.  (Oh, and the line where he says "once we throw away all the links that aren't marked up like this" is perfect.)

Clearly from Google's perspective it's obvious and elegant to have the Googlebot reporting on the graph; if it's public data it's being indexed by Google already, and it encourages the use of simple markup like XFN and FOAF to declare social relationships. But I wouldn't be surprised to see some sort of privacy blowback on this when the API starts to get baked into consumer services: "Wait -- Google knows who my friends are, too? How do they know this?" It's going to be incumbent upon social services that are (a) enabling individuals to connect with one another and (b) expressing that connection in an indexable way to make it clear that those relationships _are_ public (if they are) and demonstrate the benefits of those relationships being public (and the risks of exposing relationships you _don't_ want public).  I'm not talking about language in a privacy policy, I'm talking about features that create a better user experience for the data being available.

A short comparative story.  About a year ago there was a pretty significant shift in how normal everyday people thought about blogs.  (I'm not talking about what people in the echo chamber thought about blogs -- I'm talking about people who could care less about the people and service you know and love.)  Perception shifted from "why would I want to put that much information about myself out there" to "I need to do this to own my results page on Google." This wasn't about blogging for SEO, but rather about having control over what information is available about you online. Blogs are an easy way for people to do that, and it's driving the next big wave of adoption.

Here's the point:  connections being discoverable (like they are today -- [check out these results for sippey.com](http://socialgraph-resources.googlecode.com/svn/trunk/samples/findcontacts.html?q=sippey.com)) will drive the next wave of adoption of connection creation tools, just like content being discoverable is driving the current wave of adoption of content creation tools.

Three thought experiments, just for "fun."

*   Short term: This weekend Six Apart's David Recordon is hosting the social graph FOO Camp; what are the odds that a hack comes out of there to explore relationship strength and/or missing relationships based on this API.  (Hey, Steve -- you're friends with Jerry on these three services, why not on this one?)
*   Medium term: How long until this is connected explicitly into my Google profile. It would be trivial for them to ask me to claim sippey.com as my own using OpenID. Search, advertising and all of their social stuff could be customized based on this information.
*   Long term: social relationships as an influencer of credit scores?