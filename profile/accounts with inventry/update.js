function demo()
{
	var box=document.getElementById("box_image");
	var user=sessionStorage.getItem("user_mail");
	var data=localStorage.getItem(user+"image_url");
	box.style.background="url("+data+")";
	box.style.backgroundSize="cover";
}
demo();
//showing date and time
function date()
{
	var x=new Date();
	var y=x.getDate();
	var z=x.getMonth()+1;
	var a=x.getFullYear();
	document.getElementById("date").innerHTML="Date:"+y+"- "+z+" -"+a;
	document.getElementById("time").innerHTML="Time:"+x.toLocaleTimeString();
}
date();
//company logo coding
document.getElementById("cmp_logo").style.backgroundImage="url("+localStorage.getItem("company_logo")+")";
document.getElementById("cmp_logo").style.backgroundSize="cover";
document.getElementById("cmp_logo").style.backgroundPosition="center";
//cmp-name coding
var cmp=localStorage.getItem("company");
var cmp_d=JSON.parse(cmp);
document.getElementById("cmp_name").innerHTML=cmp_d.cmp_name;