// ==UserScript==
// @name        Webm for zbn
// @namespace   https://zombn.com
// @description webm embed
// @include     https://www.zombn.com*
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @version     1
// @grant     GM_addStyle
// ==/UserScript==

'use strict';

 waitForKeyElements ("div.cb a", main);

function main(jNode)
{

var link, video;  

  link = jNode.attr("href");


  if (link.indexOf('.gifv') === link.length - 5 || link.indexOf('.webm') === link.length - 5 || link.indexOf('.mp4') === link.length - 4)
  {
   
  video = document.createElement('video');
    if (link.indexOf('.gifv') === link.length - 5) {
      video.src = link.substring(0,link.length - 5) + ".webm";
    } else video.src = link;
  video.autoplay = false;
  video.loop = true;
  video.muted = false;
  video.width = '720';
  video.controls= true;


  jNode.after(video);
  jNode.remove();
  }



/*
  var vid = document.getElementsByTagName("video");
  for(var i=0; i < vid.length; i++);
  for(var b=1; i < vid.length; i++);
  {

  vid[i].onclick = vid[i].play;
  vid[b].onclick = vid[b].pause;
  
  }
*/
}

