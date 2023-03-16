---
layout: post
title: "latent semantic politics, or red v. blue"
permalink: /2008/10/latent-semantic-politics-or-red-v-blue.html
---

<p>Andy Baio and Joshua Schachter today shipped <a href="http://waxy.org/2008/10/memeorandum_colors/">Memeorandum Colors</a>, a Firefox extension and Greasemonkey script that helps you visualize political bias of the sites linked to on <a href="http://www.memeorandum.com/">Memeorandum</a>.</p>

<blockquote>
  <p>With the help of del.icio.us founder Joshua Schachter, we used a recommendation algorithm to score every blog on Memeorandum based on their linking activity in the last three months. Then I wrote a Greasemonkey script to pull that information out of Google Spreadsheets, and colorize Memeorandum on-the-fly. Left-leaning blogs are blue and right-leaning blogs are red, with darker colors representing strong biases.</p>
</blockquote>

<p>Andy's post is worth reading; as he usually does he describes in detail their methodology for crawling Memeorandum, analyzing link relationships using the <a href="http://en.wikipedia.org/wiki/Singular_value_decomposition">Singular Value Decomposition</a> method (on top of <a href="http://numpy.scipy.org/">NumPy</a>, btw) to discover political bias, and then stitching together a Greasemonkey coloring script using Google Docs, its ability to output XML and some simple XMLHttpRequest.  Voila, latent semantic politics[1].</p>

<p>What's incredibly cool is what you see after you install the extension / script.  </p>

<p><a style="display: inline;" href="http://waxy.org/2008/10/memeorandum_colors/"><img class="at-xid-6a00d8341c4f5f53ef01053579d7f2970c" alt="Memeorandum-colors" src="https://sippey.typepad.com/.a/6a00d8341c4f5f53ef01053579d7f2970c-500wi"  /></a></p>

<p>Memeorandum suddenly became about ten times better for me, because now the discussion links are more interesting than the main stories.  The blue and red highlighting make me want to click through to see what a "deep red" blogger is saying about Obama, or a "deep blue" blogger is saying about McCain...and I'm now diving into more interesting conversations.</p>

<p>[1] Hat tip to <a href="http://hello.typepad.com/">David Jacobs</a> for that lovely phrase.  And I can't believe I actually said "hat tip."</p>



