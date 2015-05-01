---
layout: post
title: "markdown for windows"
permalink: /2004/09/markdown_for_wi.html
---

<p>Taking inspiration from Merlin Mann's fantastic <a href="http://merlin.blogs.com/43folders/" title="A bunch of tricks, hacks &amp; other cool stuff.">43 Folders</a>, here's a quick hint for those of you who are just dying to use John Gruber's Markdown (the script version, not the MT plugin version, though use of it there is <a href="http://www.movabletype.org/developers_contest_plugin_pack_2004.shtml">obviously encouraged</a>) on <strong>Windows</strong>.</p>

<p>I assume, of course, that if you're looking to use Markdown on Windows, you've  taken the first important step and installed <a href="http://www.cygwin.com/">Cygwin</a> in order to afford yourself a proper bash environment and a local install of Perl.  (If not, well, go do that first and come back here later.)  If you're already there, then all you need to do is...</p>

<ol>
<li><p><a href="http://daringfireball.net/projects/markdown/">Download Markdown</a> and unzip it to a directory of your choice.  Mine is dumped into <em>~/stuff/bin</em>.</p></li>
<li><p>Launch your Cygwin shell.  Make sure that your Cygwin install has <em>getclip</em> and <em>putclip</em> installed (they should be in your /usr/bin).  These little utilities give Cygwin access to the Windows clipboard.</p></li>
<li><p>Open up a text editor, write some text in Markdown <a href="http://daringfireball.net/projects/markdown/syntax">syntax</a>.  Copy it to your clipboard.</p></li>
<li><p>Alt-tab over to your Cygwin shell and type the command <em>getclip | /path/to/your/Markdown.pl | putclip</em>.  This should (silently) get the contents of your Windows clipboard, pipe it through Markdown, and put it back out to your clipboard.</p></li>
<li><p>Alt-tab over to your text editor, hit CTRL-V, and enjoy properly marked-down text.</p></li>
</ol>

<p>For speed, edit your .bashrc (or equivalent) to create an alias for that command up there to something easier to remember, and faster to type.</p>

<p>Enjoy.</p>


