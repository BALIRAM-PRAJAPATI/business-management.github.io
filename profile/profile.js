function security_check()
{
	if(sessionStorage.length<=0)
	{
	document.getElementById("path").style.display="none";
     document.body.style.background="black";
	 document.body.innerHTML="<h1 align='center' style='color:white;'>ILLEGAL TASK PERFORM</h1>";
	
	
	}
}
security_check();

function upload()
{
	var x=document.getElementById("file");
	if(x.files[0].size<1000000)
	{
	var reader=new FileReader();
	reader.readAsDataURL(x.files[0]);
	reader.onloadend=function(event)
	{
		
		
		var y=document.getElementById("sp");
		y.style.background="url("+event.target.result+")";
		var image_url=event.target.result;
		y.style.backgroundSize="cover";
		y.style.backgroundRepeat="no-repeat";
		var a=document.getElementById("upld");
		a.style.display="none";
		var user_mail=sessionStorage.getItem("user_mail");
		
		document.getElementById("pic").style.display="none";
		document.getElementById("three").style.display="block";
		document.getElementById("three").onclick=function(){
			localStorage.setItem(user_mail+"image_url",image_url);
			document.getElementById("path").style.display="none";
			window.location=location.href;
		}		
		
	}
	}
	else{alert("upload only 1 mb size photo");}

}
function profile_user()
{
	var user_data=sessionStorage.getItem("user_mail");
	var y=localStorage.getItem(user_data);
	var z=JSON.parse(y);
	user=atob(z.name);
	
	document.getElementById("asd").innerHTML=user;	
		
}
profile_user();
function stop()
{
var user_mail=sessionStorage.getItem("user_mail");
if(localStorage.getItem(user_mail+"image_url")!=null)
{
	document.getElementById("path").style.display="none";
}
else{
	document.getElementById("path").style.display="block";
	document.getElementById("shiv").style.display="none";
}
}
stop();
//start profile name coding
function profile_name()
{
	var pic=document.getElementById("profile_pic");
	var user_data=sessionStorage.getItem("user_mail");
	var user_detail=localStorage.getItem(user_data);
	var x=JSON.parse(user_detail);
	var y=atob(x.name);
	pic.innerHTML=y;
}
profile_name();
//end profile name coding
//start profile image coding
function profile_image()
{
	var box=document.getElementById("profile_box");
	var user_data=sessionStorage.getItem("user_mail");
	var detail=localStorage.getItem(user_data+"image_url");
	box.style.background="url("+detail+")";
	box.style.backgroundSize="cover";
	
}
profile_image();

//end profile image coding
//start logout program
function logout()
{
	sessionStorage.clear();
	document.getElementById("please").innerHTML="please wait....";
	window.location="../index.html";
	return false;	
}
//end logout coding
function contact()
{
	document.getElementById("please").innerHTML="please wait....";
	window.location="contact.html";	
	
}
function playlist()
{
	
	setTimeout(function(){document.getElementById("please").innerHTML="please wait....";},2000);
	window.location="playlist.html";
}
function wap()
{
	setTimeout(function(){document.getElementById("please").innerHTML="please wait....";},2000);
	window.location="business.html";
}





