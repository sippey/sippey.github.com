---
layout: post
title: "spot instances"
permalink: /2009/12/spot-instances.html
---

<p>Amazon&#39;s doing some interesting pricing innovation with EC2. The latest -- spot instances.  More info from <a href="http://www.allthingsdistributed.com/2009/12/amazon_ec2_spot_instances.html">Werner Vogels&#39; blog</a>:</p>

<blockquote><p> The central concept in this new option is that of the Spot Price, which we determine based on current supply and demand and will fluctuate periodically. If the maximum price a customer has bid exceeds the current Spot Price then their instances will be run, priced at the current Spot Price. If the Spot Price rises above the customer&#39;s bid, their instances will be terminated and restarted (if the customer wants it restarted at all) when the Spot Price falls below the customer&#39;s bid.</p></blockquote>

<p>Clever, and plays to the strength of the Amazon cloud, which is its elasticity. As Vogels points out, spot instances are perfect for tasks that don&#39;t need to be started / stopped at a particular time.</p>


