---
layout: post
title: "that excel bug"
permalink: /2007/09/that-excel-bug.html
---

<p>I'm sure you've read this already, but Joel Spolksy's piece <a href="http://www.joelonsoftware.com/items/2007/09/26b.html">explaining the Excel bug</a> is worth linking to just to accrete an infintessimal amount of incremental PageRank to joelonsoftware.com.  </p>

<blockquote>
  <p>Q: Shouldn't they be testing for these kinds of things?</p>

  <p>A: I'll bet that most of the numeric testing done on the Excel team is done automatically with VBA code. Cells containing this value display as 100,000, but from VBA, they're going to look like 65,535 (since the number would be passed into the Basic runtime in binary, before the display formatting.) I'm sure there's plenty of code to test display formatting, but with a bug like this that only happens on 12 out of 18446744073709551616 possible floating point binary numbers, it's unlikely that any set of black-box tests would cover this case.</p>
</blockquote>

<p>And if you make it all the way through to the end, his parting shot is good for the laugh, but perhaps a <em>bit</em> over the top.</p>



