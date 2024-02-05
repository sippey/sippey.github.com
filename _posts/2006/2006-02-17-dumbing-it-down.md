---
layout: post
title: "dumbing it down"
permalink: /2006/02/dumbing_it_down.html
---

While I take umbrage at the phrase "typical MBA-laden, non-engineering focused Product Manager" in [Jeremy Zawodny's post](http://jeremy.zawodny.com/blog/archives/006323.html), he does an excellent job of translating annotating Tom Coates' slide on the [future of web apps](http://www.plasticbag.org/archives/2006/02/my_future_of_web_apps_slides.shtml).  What I think is missing, though, are the reasons _why_ these rules matter; so, just to pile on, I'll dumb the conversation down into a discussion of _benefits_.

**Look to add value to the aggregate of web data.**  
Benefit:  without doing this, you have no business.  Jeremy's message is geared to the PM at a BigCo ("\[at\] a company with infrastructure that can scale to scan, retrieve, and analyze a significant portion of all the public on-line information in the world..."), but it works for SmallCos, too.  Your customers are swimming in information -- whether they're producing it or consuming it.  If you can't add value to that production or consumption process (or, better yet, both), why would they use or (gasp) pay for your service?

**Build for normal users, developers and machines**  
Benefit:  reach a larger audience.  Normal users are obvious; developers will help you extend your distribution; machines will make that distribution possible in an automated, scalable way.

**Start designing with data, not pages**  
Benefit:  ability to leverage a service across multiple audiences.  Good web PMs (and especially PMMs -- product _marketing_ managers) are necessarily visual people, so this habit will be hard to break.  But by focusing first on the data and the use cases that drive the data leaves you degrees of freedom to adapt and brand a single code base for multiple audiences.  It's how you do versioning (where versioning <> road mapping) right.

**Identify first order objects and make them addressable _and_ Use readable, reliable and hackable URLs _and_ Make your data as discoverable as possible**  
Benefit:  link sharing and Google search index juice\[1\].  Remember the early e-commerce systems that made it impossible for a user to bookmark an individual product?  Remember how frustrating that was?  If your product is good enough, your users will share links through IM, email, blogs, social bookmark services, SMS; not to mention saving state / position for their own use.  And without addressable objects, how the hell will you end up in the search engines?  Not enabling this behavior would just be stupid.

**Correlate with external identifier schemes**  
Benefit 1:  no wasted time / money developing and evangelizing new namespaces.  There's no reason to invent a new ISBN scheme, a new set of EXIF data, a new way to represent location.  Stand on the shoulders of the giants that have come before you, and follow their lead.   
Benefit 2:  how else will someone be able to mash your collaborative shopping service into a zoomable, draggable map that layers on real time weather tracking, LiveJournal mood data photo facial recognition?  Repeat after me:  our app is not an island.  Our app is not an island.  Our app is not an island.

**Build list views and batch manipulation interfaces**  
Benefit:  deep, repeated use of the application.  List views and batch manipulation are typically characterized as "power user" features.  While your target market may not be "power users," I would bet that you want to encourage "power use" of your app.  If your app is to take a prominent place in a user's daily behavior, you need to enable use cases that go beyond the casual and support extended use over time.

**Create parallel data services using standards**  
Benefit:  faster, cheaper, more flexible product evolution.   Not only will your own developers be able to evolve and adapt the product more quickly, but using standards will enable you to (a) take advantage of the creativity of the market, and (b) lower your overall feature development cost.  Certain apps are more "platform" than others; an overwhelming portion of Konfabulator's value is driven by third party widgets, for example.  (Horn tooting:  Movable Type is a great publishing platform, and is even better when you factor in how its been extended by its developer community.)  Without standards-based data (and application) services, you're making yourself responsible for every dollar of value creation.

I'm sure there's a bunch of obvious stuff I'm missing.  But hey, maybe this will help that typical MBA-laden non-engineering focused Product Manager get a better handle on what Tom's talking about.

\[1\] Tom and Jeremy both work for Yahoo, after all.