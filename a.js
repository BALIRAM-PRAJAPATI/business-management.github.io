function cookie_check()
{
	if(navigator.cookieEnabled==false)
	{
		var x=document.getElementById("webpage");
		x.style.display="none";
		document.body.style.background="black";
		document.body.innerHTML="<h1 style='color:white;font-size:90px;'>PLEASE ENABLE COOKIE</h1>";
	}
}
cookie_check();
function browser()
{
	if(navigator.userAgent.indexOf("MSIE")!==-1)
	{
		var x=document.getElementById("webpage");
		x.style.display="none";
		document.body.style.background="black";
		document.body.innerHTML="<h1 style='color:white;font-size:90px;'>PLEASE OPEN IN CHROME BROWSER</h1>";	
	}
}
browser();

function wap()
{
	var y=document.getElementById("box");
	y.style.display="block";
}
function demo()
{
	var y=document.getElementById("box");
	y.style.display="none";
}
function user()
{
	var name=btoa(document.getElementById("yname").value);
	var email=btoa(document.getElementById("email").value);
	var password=btoa(document.getElementById("pwd").value);
	var mobile=btoa(document.getElementById("mobile").value);
	if(name!=""&&email!=""&&password!=""&&mobile!="")
	{
		var user_data={name:name,email:email,password:password,mobile:mobile};
		var user_detail=JSON.stringify(user_data);
		localStorage.setItem(email,user_detail);
		document.getElementById("one").innerHTML="signup successful";
		
		document.getElementById("yname").value="";
		document.getElementById("email").value="";
		document.getElementById("pwd").value="";
		document.getElementById("mobile").value="";
		setInterval(function(){document.getElementById("one").innerHTML="";},2000)
		
		return false;
	}
	
}
function check()
{
var email=btoa(document.getElementById("email").value);
if(localStorage.getItem(email)!==null)
{
	document.getElementById("email").style.background="black";
	document.getElementById("email").style.color="white";
	document.getElementById("email").classList.add("pulse");
	document.getElementById("two").innerHTML="user already exist";
	document.getElementById("pwd").disabled="disabled";
		document.getElementById("mobile").disabled="disabled";
		document.getElementById("sign").style.cursor="not-allowed";	


	document.getElementById("email").onclick=function()
	{
		this.value="";
		this.style.background="";
		this.style.color="";
		document.getElementById("pwd").disabled=false;
		document.getElementById("mobile").disabled=false;
		document.getElementById("sign").style.cursor="pointer";
		document.getElementById("two").innerHTML="";
		
	}
		return false;
}
}

//start login coding
function lgn()
{
	var username=btoa(document.getElementById("username").value);
	var password=btoa(document.getElementById("password").value);
	var user={username:username,password:password};
	var data=JSON.stringify(user);
	sessionStorage.setItem(username,data);
	var user_detail=sessionStorage.getItem(username);
	var user_data=JSON.parse(user_detail);
    if(localStorage.getItem(user_data.username)!=null&&localStorage.getItem(user_data.username).match(user_data.password))
	{
		
		location.replace("profile/profile.html");
		sessionStorage.setItem("user_mail",username);
		return false;
	}
	else{
		alert("username/password are invalid");
		return false;
	}
	
}

//end login coding

