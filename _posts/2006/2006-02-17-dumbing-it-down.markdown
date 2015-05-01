---
layout: post
title: "dumbing it down"
permalink: /2006/02/dumbing_it_down.html
---

<p>While I take umbrage at the phrase &quot;typical MBA-laden, non-engineering focused Product Manager&quot; in <a href="http://jeremy.zawodny.com/blog/archives/006323.html">Jeremy Zawodny's post</a>, he does an excellent job of <del>translating</del> annotating Tom Coates' slide on the <a href="http://www.plasticbag.org/archives/2006/02/my_future_of_web_apps_slides.shtml">future of web apps</a>.&nbsp; What I think is missing, though, are the reasons <em>why</em> these rules matter; so, just to pile on, I'll dumb the conversation down into a discussion of <em>benefits</em>.</p>

<p><strong>Look to add value to the aggregate of web data.</strong><br />Benefit:&nbsp; without doing this, you have no business.&nbsp; Jeremy's message is geared to the PM at a BigCo (&quot;[at] a company with infrastructure that can scale to scan, retrieve, and
analyze a significant portion of all the public on-line information in
the world...&quot;), but it works for SmallCos, too.&nbsp; Your customers are swimming in information -- whether they're producing it or consuming it.&nbsp; If you can't add value to that production or consumption process (or, better yet, both), why would they use or (gasp) pay for your service?</p>

<p><strong>Build for normal users, developers and machines</strong><br />Benefit:&nbsp; reach a larger audience.&nbsp; Normal users are obvious; developers will help you extend your distribution; machines will make that distribution possible in an automated, scalable way.</p>

<p><strong>Start designing with data, not pages</strong><br />Benefit:&nbsp; ability to leverage a service across multiple audiences.&nbsp; Good web PMs (and especially PMMs -- product <em>marketing</em> managers) are necessarily visual people, so this habit will be hard to break.&nbsp; But by focusing first on the data and the use cases that drive the data leaves you degrees of freedom to adapt and brand a single code base for multiple audiences.&nbsp; It's how you do versioning (where versioning &lt;&gt; road mapping) right.</p>

<p><strong>Identify first order objects and make them addressable <em>and</em> Use readable, reliable and hackable URLs <em>and</em> Make your data as discoverable as possible</strong><br />Benefit:&nbsp; link sharing and <del>Google</del> search index juice[1].&nbsp; Remember the early e-commerce systems that made it impossible for a user to bookmark an individual product?&nbsp; Remember how frustrating that was?&nbsp; If your product is good enough, your users will share links through IM, email, blogs, social bookmark services, SMS; not to mention saving state / position for their own use.&nbsp; And without addressable objects, how the hell will you end up in the search engines?&nbsp; Not enabling this behavior would just be stupid.</p>

<p><strong>Correlate with external identifier schemes</strong><br />Benefit 1:&nbsp; no wasted time / money developing and evangelizing new namespaces.&nbsp; There's no reason to invent a new ISBN scheme, a new set of EXIF data, a new way to represent location.&nbsp; Stand on the shoulders of the giants that have come before you, and follow their lead.&nbsp; <br />Benefit 2:&nbsp; how else will someone be able to mash your collaborative shopping service into a zoomable, draggable map that layers on real time weather tracking, LiveJournal mood data photo facial recognition?&nbsp; Repeat after me:&nbsp; our app is not an island.&nbsp; Our app is not an island.&nbsp; Our app is not an island.</p>

<p><strong>Build list views and batch manipulation interfaces</strong><br />Benefit:&nbsp; deep, repeated use of the application.&nbsp; List views and batch manipulation are typically characterized as &quot;power user&quot; features.&nbsp; While your target market may not be &quot;power users,&quot; I would bet that you want to encourage &quot;power use&quot; of your app.&nbsp; If your app is to take a prominent place in a user's daily behavior, you need to enable use cases that go beyond the casual and support extended use over time.</p>

<p><strong>Create parallel data services using standards</strong><br />Benefit:&nbsp; faster, cheaper, more flexible product evolution.&nbsp; &nbsp;Not only will your own developers be able to evolve and adapt the product more quickly, but using standards will enable you to (a) take advantage of the creativity of the market, and (b) lower your overall feature development cost.&nbsp; Certain apps are more &quot;platform&quot; than others; an overwhelming portion of Konfabulator's value is driven by third party widgets, for example.&nbsp; (Horn tooting:&nbsp; Movable Type is a great publishing platform, and is even better when you factor in how its been extended by its developer community.)&nbsp; Without standards-based data (and application) services, you're making yourself responsible for every dollar of value creation.</p>

<p>I'm sure there's a bunch of obvious stuff I'm missing.&nbsp; But hey, maybe this will help that typical MBA-laden non-engineering focused Product Manager get a better handle on what Tom's talking about.</p>

<p><span style="font-size: 0.8em;">[1] Tom and Jeremy both work for Yahoo, after all.</span></p>


