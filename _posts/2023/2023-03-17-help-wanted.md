---
date: 2023-03-17 23:59
title: shit gets weird
layout: links
---

Inspired by the conversation between [Gruber and Kottke on The Talk Show](https://daringfireball.net/thetalkshow/2023/03/11/ep-370), I kicked off a weekend project: a simple script that would cycle through my blog archives, extract every URL I've ever linked to, and then load them to see if those pages are still up. My hypothesis: more than 50% of the URLs linked to more than 10 years ago are gone, thanks to the second law of thermodynamics.

It'd been a while since I'd written any Ruby, so I fired up Chat GPT and asked it this prompt as a starting point:

> can you help me write a ruby script that will loop through a folder of markdown documents in order to build a CSV with columns for date (pulled from YAML frontmatter), date (also pulled from YAML front matter) and URL, where each row in the table is every anchor HREF tag in the body of the document

And, of course, the [response](https://gist.github.com/sippey/44b100e1d030a9e9f35783928636df11) wasn't perfect out of the box, but it was pretty damn good -- and it included a description of how the script works! As I've been tweaking it, debugging regex bullshit, adding functionality (follow redirects, anyone?) my robot overlord has been with me all along the way, a patient teacher with perfect context of our whole conversation. And it will be there tomorrow when I pick this weekend project back up. 

I know this isn't exactly the freshest of news or the hottest of takes, but this is just a reminder that AI tech is making computers *fun* again. And when tech feels fun, tech has a high likelihood of getting *weird*. This shit's gonna get really, really weird.