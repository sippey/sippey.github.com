---
layout: post
title: "recent comments on sippey.com"
permalink: /2009/12/recent-comments.html
---

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js"></script>
<script type="text/javascript" src="https://www.sippey.com/images/jquery.timeago.js"></script>
<script type="text/javascript">
    function sippey(obj){ 
        var x;
        var links='';
        for (x = 0; x < obj.count ; x++){
            links += '<div class="stream ' + obj.value.items[x].source + '"><h3 class="entry-header"><a href=' + obj.value.items[x].link + '>' + obj.value.items[x].title + 
            '</a></h3><div class="entry-body">' + obj.value.items[x].description + '<div class="stream-date">' + $.timeago(obj.value.items[x].updated) + '</div></div></div>';
        }
        $("#loading").html(links);
    }
</script>

<style>
.comment {margin-bottom : 10px;
padding-left : 20px;
background-image : url(http://sippey.typepad.com/files/comment.png);
background-repeat : no-repeat;
padding-top : 0px;
}
.blog {display: none;}
.comment .entry-header {margin-bottom : 0px !important; letter-spacing : 0px !important;}
.comment .entry-header a,
.comment .entry-body {font-size : 13px !important;}
.stream-date {font-size : 13px; color : gray; font-style: italic; margin-top : -10px;}
</style>

<p>&nbsp;</p>

<div id="loading"><img src="https://www.sippey.com/images/ajax-loader.gif" /></div>

<script type="text/javascript" src="https://pipes.yahoo.com/pipes/pipe.run?_id=972d2a574fd4420cb53655b5b980af6f&_render=json&_callback=sippey"></script>


