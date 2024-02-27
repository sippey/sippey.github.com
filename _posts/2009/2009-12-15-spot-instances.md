---
layout: post
title: "spot instances"
permalink: /2009/12/spot-instances.html
---

Amazon's doing some interesting pricing innovation with EC2. The latest -- spot instances. More info from [Werner Vogels' blog](http://www.allthingsdistributed.com/2009/12/amazon_ec2_spot_instances.html):

> The central concept in this new option is that of the Spot Price, which we determine based on current supply and demand and will fluctuate periodically. If the maximum price a customer has bid exceeds the current Spot Price then their instances will be run, priced at the current Spot Price. If the Spot Price rises above the customer's bid, their instances will be terminated and restarted (if the customer wants it restarted at all) when the Spot Price falls below the customer's bid.

Clever, and plays to the strength of the Amazon cloud, which is its elasticity. As Vogels points out, spot instances are perfect for tasks that don't need to be started / stopped at a particular time.