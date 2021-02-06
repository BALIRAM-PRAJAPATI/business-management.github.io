//play pause coding
var video=document.getElementById("video_player");
var play_one=document.getElementById("play");
play_one.onclick=function()
{
	
	if(this.className=="fa fa-play")
	{
		video.play();
		this.className="fa fa-pause";
		this.title="pause";
	}
	else
	{
		video.pause();
		this.className="fa fa-play";
		this.title="play";
	}
}
//end play pause coding
//start progress coding
video.ontimeupdate=function()
{
	var progress=document.getElementById("progress");
	var x=(100/this.duration)*this.currentTime;
	progress.style.width=x+"%";
	video.onended=function()
	{
	if(video.currentTime==video.duration)
	{
		play_one.className="fa fa-play";
		play_one.title="play";
	}
	else
	{		
		play_one.className="fa fa-pause";
		play_one.title="pause"
		video.play();
	}
	}
}
//end progress coding
//start fullscreen coding
var fullscreen=document.getElementById("fullscreen");
fullscreen.onclick=function()
{
if(video.requestFullscreen)
 {
	 video.requestFullscreen();
 }
else if(video.webkitRequestFullscreen)
 {
	 video.webkitRequestFullscreen();
 }
 else if(video.mozRequestFullscreen)
 {
	 video.mozRequestFullscreen();
 }
 if(video.msRequestFullscreen)
 {
	 video.msRequestFullscreen();
 }
}
//end fullscreen coding
//start replay coding
var replay=document.getElementById("replay");
replay.onclick=function()
{
	video.currentTime=0;
	video.play();
	play_one.className="fa fa-pause";
}
//end replay coding
//start stop coding
var stop=document.getElementById("stop");
stop.onclick=function()
{
	video.currentTime=0;
	video.pause();
	play_one.className="fa fa-play"
}

// end stop coding
// volume coding
var volume=document.getElementById("volume");

	volume.onclick=function()
	{
	var rag=document.getElementById("slider");
	
		if(rag.style.display=="none")
		{
			rag.style.display="block";
			rag.oninput=function()
			{
			
			video.volume=this.value;
			if(this.value<=0)
			 {
				volume.className="fa fa-volume-off";
				volume.title=this.value*100+"%";
			 }
			 else
			 {
				volume.className="fa fa-volume-up"; 
				volume.title=this.value*100+"%";
			 }
			}
		}
		else
		{
			rag.style.display="none";
		}
	
	}
	
//end volume coding
// start backword forward progress coding
var percent=document.getElementById("progress_bar");
percent.onclick=function(event)
{
	var x=event.offsetX/percent.offsetWidth;
	video.currentTime=x*video.duration;
}
//end backword forward progress coding
//download coding
var download=document.getElementById("download");
download.onclick=function()
{
	var origin=document.getElementById("origin").src;
	var a_tag=document.createElement("A");
	a_tag.href=origin;
	a_tag.download="pradeep";
	a_tag.click();
	document.body.appendChild(a_tag);
}

//end download coding

//start setting coding
var gear=document.getElementById("gear");
gear.onclick=function()
{	
	var box=document.getElementById("setting_box");
	var box=document.getElementById("setting_box");
	if(box.offsetHeight==0)
	{
	box.style.height="21.7vw";
	box.style.transition=".5s";
	
	}
	else
	{
	box.style.height="0";
	box.style.transition=".5s";
	}
var range=document.getElementById("range_slider");
range.oninput=function()
{
	video.playbackRate=this.value;
	document.getElementById("span").innerHTML=": "+this.value;
}
//reset coding
var btn=document.getElementById("reset_btn");
btn.onclick=function()
{
range.value=1;
video.playbackRate=1;
document.getElementById("span").innerHTML=": 1"	
}
//end reset coding
//start mini player coding
var clone=document.getElementById("clone");
var upper_video=document.getElementById("origin").src;
var upper_time=video.currentTime;
var lower_video=document.getElementById("origin_mini");
var lower_time=document.getElementById("mini_video");
clone.onclick=function()
{
	lower_time.load();
 var x=document.getElementById("bigbox");
 var y=document.getElementById("mini");
 x.style.display="none";
 y.style.display="block";
 lower_time.currentTime=upper_time;
 lower_video.src=upper_video;
 if(play_one.className=="fa fa-play")
  {
	  lower_time.pause();
	  lower_time.onmouseover=function()
	  {
		  this.controls=true;
	  }
  }
  else
  {
	  lower_time.play();
	  video.pause();
	  lower_time.currentTime=video.currentTime;
	  lower_time.onmouseover=function()
	  {
		  this.controls=true;
	  }
  }

}
//end miniplayer coding	
lower_time.onplaying=function()
{
 var maxmize=document.getElementById("maxmize")
maxmize.onclick=function()
{
 var x=document.getElementById("bigbox");
 var y=document.getElementById("mini");
 document.getElementById("setting_box").style.height="0";
 x.style.display="block";
 y.style.display="none";
 
 video.currentTime=lower_time.currentTime;
	  video.play();
	  lower_time.pause();
	  
}
}
lower_time.onpause=function()
{
	var maxmize=document.getElementById("maxmize")
maxmize.onclick=function()
{
 var x=document.getElementById("bigbox");
 var y=document.getElementById("mini");
 document.getElementById("setting_box").style.height="0";
 x.style.display="block";
 y.style.display="none";
 
 video.currentTime=lower_time.currentTime;
	  video.pause();
	  play_one.className="fa fa-play";
	  play_one.title="play";
}
}
 //start color coding
 var container=document.getElementById("c_color");
 container.onchange=function()
 {
	 var c_one=document.getElementById("playlist_header");
	 var c_two=document.getElementById("bigbox");
	 var c_three=document.getElementById("progress_bar");
	 var c_four=document.getElementById("songs");
	 var c_five=document.getElementById("video_footer");
	 c_one.style.backgroundColor=this.value;
	 c_two.style.backgroundColor=this.value;
	 c_three.style.backgroundColor=this.value;
	 c_four.style.backgroundColor=this.value;
	 c_five.style.backgroundColor=this.value;
	 localStorage.setItem("c_theme",this.value);
 }
 var icon=document.getElementById("i_color");
 icon.onchange=function()
 {
	 var i_one=document.getElementsByTagName("I");
	 var i;
	 for(i=0;i<i_one.length;i++)
	 {
		 i_one[i].style.color=this.value;
	 }
	 localStorage.setItem("i_theme",this.value);
 }
 var text_one=document.getElementById("t_color");
 text_one.onchange=function()
 {
	 var text=document.getElementsByTagName("DIV");
	 var i;
	 for(i=0;i<text.length;i++)
	 {
		 text[i].style.color=this.value;
	 }
	 localStorage.setItem("t_theme",this.value);
 }
 
 //end color coding
 var rst=document.getElementById("r_btn");
 rst.onclick=function()
 {
	 localStorage.removeItem("c_theme"); 
	  localStorage.removeItem("i_theme");
	   localStorage.removeItem("t_theme");
	   window.location=location.href;

 }

}
//end setting coding
function active()
 {
	var color=[localStorage.getItem("c_theme"),localStorage.getItem("i_theme"),localStorage.getItem("t_theme")]; 
	var c_one=document.getElementById("playlist_header");
	 var c_two=document.getElementById("bigbox");
	 var c_three=document.getElementById("progress_bar");
	 var c_four=document.getElementById("songs");
	 var c_five=document.getElementById("video_footer");
	 c_one.style.backgroundColor=color[0];
	 c_two.style.backgroundColor=color[0];
	 c_three.style.backgroundColor=color[0];
	 c_four.style.backgroundColor=color[0];
	 c_five.style.backgroundColor=color[0];
	 var i_one=document.getElementsByTagName("I");
	 var i;
	 for(i=0;i<i_one.length;i++)
	 {
		 i_one[i].style.color=color[1];
	 }
	 var text=document.getElementsByTagName("DIV");
	 var i;
	 for(i=0;i<text.length;i++)
	 {
		 text[i].style.color=color[2];
	 }
	 	
 }
 active();
 //buffer coding
 video.onprogress=function()
 {
	 var buffer_p=(this.buffered.end(0)/this.duration)*100;
	 document.getElementById("buffer").style.width=buffer_p+"%";	 
 }
//end buffer coding 
if(video.networkState==3)
{
	video.setAttribute("poster","images/upload_pic.jpg");
	  var x=document.getElementsByTagName("I");
	  var i;
	  for(i=0;i<x.length;i++)
	  {
		  x[i].style.cursor="not-allowed";
	  }
video.onclick=function()
{
	var file=document.getElementById("file");
	file.click();
	file.onchange=function()
	{
	 var url=URL.createObjectURL(this.files[0]);
	 var d_video=document.getElementById("origin");
	 d_video.src=url;
	 video.load();
     video.play();
     play_one.className="fa fa-pause"
	   var x=document.getElementsByTagName("I");
	  var i;
	  for(i=0;i<x.length;i++)
	  {
		  x[i].style.cursor="pointer";
	  }
     play_one.title="pause";
     document.getElementById("current").innerHTML=this.files[0].name;	 
	}
}
}
//start file coding
//end file coding
