---
layout: post
date: 2004-06-16
title: "measurable syndication"
permalink: /2004/06/measurable_synd.html
---

The [FeedBurner](http://www.feedburner.com/) guys are dealing with all the tough problems related to content syndication. Case in point -- they just released a new version of their statistics functionality, a key component of their service that lets publishers track feed readership, aggregator usage and item-level clickthroughs. If you thought tracking web readership was difficult, try tracking RSS/Atom usage, with the heterogeneity of clients, feed polling intervals and multi-user aggregation systems (like My Yahoo or Bloglines). _Disclaimer: I'm on the FeedBurner advisory board._

Dick Costolo, FeedBurner's CEO, [outlines the new approach](http://www.burningdoor.com/feedburner/archives/000608.html) in a post on the product blog. With the new release, they're presenting a calculation of "daily circulation," which they're defining as...

> Unique IP addresses accessing your feed today on behalf of a unique client feed reader plus the number of subscribers to your feed reported today in any accesses of your feed by an online aggregator.

Dick continues by pointing out that that "circulation is by no means perfect."

> There are a few different issues with trying to make a highly accurate count via this approach, including the usual IP address as person issues (although we try to mitigate this issue by only using "daily circulation" and not "weekly" or more, so that you have less likelihood of DHCP users reporting multiple IP addresses over the time period). The key is to think of circulation in much the way, well, commercial publishers think of it. It represents the best current approximation of how many people you reached today, via the various agents reporting back to us through feed accesses. This number is particularly interesting as a trend over time.

Whether FeedBurner's approach is perfect or not, if RSS/Atom is going to evolve into a medium that supports commercial applications, we're going to need to settle on a common definition of XML "readership," while respecting the diverse landscape of feed consumers. Remember the transition in the web space from "hits" to "page views" to "visits"? We're about to see something similar here.