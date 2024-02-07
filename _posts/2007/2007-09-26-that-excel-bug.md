---
layout: post
title: "that excel bug"
permalink: /2007/09/that-excel-bug.html
---

I'm sure you've read this already, but Joel Spolksy's piece [explaining the Excel bug](http://www.joelonsoftware.com/items/2007/09/26b.html) is worth linking to just to accrete an infintessimal amount of incremental PageRank to joelonsoftware.com.

> Q: Shouldn't they be testing for these kinds of things?
> 
> A: I'll bet that most of the numeric testing done on the Excel team is done automatically with VBA code. Cells containing this value display as 100,000, but from VBA, they're going to look like 65,535 (since the number would be passed into the Basic runtime in binary, before the display formatting.) I'm sure there's plenty of code to test display formatting, but with a bug like this that only happens on 12 out of 18446744073709551616 possible floating point binary numbers, it's unlikely that any set of black-box tests would cover this case.

And if you make it all the way through to the end, his parting shot is good for the laugh, but perhaps a _bit_ over the top.