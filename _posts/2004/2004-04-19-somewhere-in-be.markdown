---
layout: post
title: "somewhere in between personal and super"
permalink: /2004/04/somewhere_in_be.html
---

<p>Don't ask why, but I spent a good part of my weekend crunching a fairly large data set (a couple of million rows, about 20 attributes per row of varying sizes / types).  As my laptop whirred and paged and paged and whirred, I sat at my desk staring at the other two machines sitting on the LAN -- both of which had plenty of spare processing cycles and RAM -- in frustration.  Why can't <i>this</i> task leverage <i>those</i> resources?</p>

<p>Think about it from a user's perspective.  It's dead simple for me to join a network.  Once I'm on that network, it's <a href="http://daringfireball.net/2004/04/spray_on_usability">dead simple</a> for me to access shared files or shared devices like printers, scanners, burners, etc.  Why can't I share processor cycles?  Whether I'm doing a left outer join on tables with a couple million rows, or rendering fly-over titles for the grandparents' DVD, machine 1 should be able to reach out and commandeer cycles of machines 2 through N in the workgroup.</p>

<p>I'm sure there are dozens of reasons why this is impractical or impossible from a computer science perspective.  (For example, making sure that the benefit of using machines 2 through N actually outweighs the overhead of task coordination.)  But conceptually it makes sense:  bring clustering technology out of the data center and on to the LAN, and enhance applications that live between personal computing and supercomputing.</p>


