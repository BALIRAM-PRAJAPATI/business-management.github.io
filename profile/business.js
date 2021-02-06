
//start business user image coding
var select;
function demo()
{
	var box=document.getElementById("box_image");
	var user=sessionStorage.getItem("user_mail");
	var data=localStorage.getItem(user+"image_url");
	box.style.background="url("+data+")";
	box.style.backgroundSize="cover";
}
demo();
//end business user image coding
var container=document.getElementById("container");
var x=container.getElementsByTagName("DIV");
var i;
for(i=0;i<x.length;i++)
{
x[i].onmouseover=function()
  {
	this.className="animated pulse";
  }	
  x[i].onmouseout=function()
  {
	this.className="";  
  }
}
//start logout coding
function out()
{
	var x=confirm("do you want to sure logout");
	if(x==true)
	{
	sessionStorage.clear();
	document.getElementById("please").innerHTML="please wait.......";
	setTimeout(function(){window.location="../index.html";},2000);
	return false;
	}	
}
//end logout coding
var create=document.getElementById("create");
create.onclick=function()
{
	var all=document.getElementById("all");
	var x=document.getElementById("frm");
	var form=document.getElementById("form");
	if(x.offsetHeight==0)
	{
		all.style.display="block";
		x.style.height="350px";
		x.className="animated fadeInDown";
		form.className="animated fadeInDown";
	}
	else
	{
	x.className="animated fadeOutUp";
	form.className="animated fadeOutUp";
	all.style.display="none";
	x.style.height="0";	
	x.style.transition="1s";
	
	}
}
//form validation start
var y=document.getElementsByTagName("INPUT");
y[0].onchange=function()
{
	if(isNaN(this.value))
	{
		y[1].onchange=function()
		{
			if(y[1].value==y[0].value)
			{
				this.value="company name and mailing name are different";
		        this.style.color="red";
		        this.className="animated pulse infinite";
		        this.style.border="1px solid red";
				this.onclick=function()
		               {
		               this.style.color="inherit";
		               this.className="";
		               this.style.border="";
		               this.value="";
		               }
			}
			else
			{
				if(y[1].value.match(y[0].value+".pvt.ltd")||y[1].value.match(y[0].value+".govt.ltd"))
				{
					y[6].onchange=function()
					{
						var fine=document.getElementById("fine").value;
						var x=new Date();
						var y=new Date(fine);
						if(y.getFullYear()>=x.getFullYear())
						{
							if(y.getMonth()+1==4)
							{
								if(y.getDate()==1)
								{
									var success=document.getElementById("success");
									
									success.onsubmit=function()
									{
										var text=document.getElementById("text").value;
										var select=document.getElementById("select").value;
										var cmp_name=document.getElementById("cmp_name").value;
										var mailing=document.getElementById("mailing").value;
										var mobile=document.getElementById("mobile").value;
										var tel=document.getElementById("tel").value;
										var website=document.getElementById("website").value;
										var fine=document.getElementById("fine").value;
										var email=document.getElementById("email").value;
										var data={cmp_name:cmp_name,mailing:mailing,mobile:mobile,text:text,tel:tel,website:website,fine:fine,select:select,email:email};
										var detail=JSON.stringify(data);
										localStorage.setItem("company",detail);	
										
										
										
										
										
									}
																	
								}
								else
								{
									this.type="text";
							        this.value="enter only first date";
		                            this.style.color="red";
		                            this.className="animated pulse infinite";
		                            this.style.border="1px solid red";
				                    this.onclick=function()
		                             {
								       this.type="date";
		                               this.style.color="inherit";
		                               this.className="";
		                               this.style.border="";
		                                this.value="";
								      }
							    }
							}
							else
							{
								this.type="text";
							   this.value="enter only 4th month";
		                        this.style.color="red";
		                        this.className="animated pulse infinite";
		                       this.style.border="1px solid red";
				               this.onclick=function()
		                        {
								 this.type="date";
		                         this.style.color="inherit";
		                          this.className="";
		                         this.style.border="";
		                          this.value="";
						        }
							}
						}
						else
						{
							this.type="text";
							this.value="enter only>=current year";
		                    this.style.color="red";
		                    this.className="animated pulse infinite";
		                    this.style.border="1px solid red";
				            this.onclick=function()
		                     {
								 this.type="date";
		                      this.style.color="inherit";
		                        this.className="";
		                       this.style.border="";
		                       this.value="";
						      }
					    }
				    }
				}
				else
				{
					this.value="please enter valid mailing name";
		            this.style.color="red";
		            this.className="animated pulse infinite";
		            this.style.border="1px solid red";
				    this.onclick=function()
		               {
		               this.style.color="inherit";
		               this.className="";
		               this.style.border="";
		               this.value="";
		               }
				}
			}
		}
	}
	else
	{
		this.value="please enter valid company name";
		this.style.color="red";
		this.className="animated pulse infinite";
		this.style.border="1px solid red";
		this.onclick=function()
		{
		this.style.color="inherit";
		this.className="";
		this.style.border="";
		this.value="";
		}
	}
}
//end form validation
function company()
{
if(localStorage.getItem("company")!==null)
  {
    document.getElementById("all").style.display="none";
     var x=localStorage.getItem("company");
	 var y=JSON.parse(x);
	 document.getElementById("create").innerHTML=y.cmp_name;
	 document.getElementById("create").style.color="red";
	 document.getElementById("check").style.display="block";
	 document.getElementById("create").onclick=function()
	 {
		 return false;
	 }
	 var home=document.getElementById("home");
	 home.className="fa fa-upload";
	 home.title="upload logo";
	 home.style.cursor="pointer";
	 home.onclick=function()
	 {
		var input=document.createElement("INPUT");
        input.type="file";
		input.accept="image/*";
		input.click();
		input.onchange=function()
		{
			if(this.files[0].size<1500)
			{
			var reader=new FileReader();
			reader.readAsDataURL(this.files[0]);
			
			reader.onload=function()
			{
				localStorage.setItem("company_logo",reader.result);
				      
				 
			}
				
			}
			else
			{
				alert("upload only 1500bytes size image");
			}
		}
	}
    function show()
	{
		if(localStorage.getItem("company_logo")!==null)
	      {
	         var home=document.getElementById("home"); 
	         home.className=""
	         var z=document.getElementById("first_div");
	         z.style.background="url("+localStorage.getItem("company_logo")+")";
	         z.style.backgroundRepeat="no-repeat";
	         document.getElementById("create").style.marginLeft="150px"; 
			 
		  }
			
	}
	
			
	 show();   
   
    		
  }  
else
 {
	 document.getElementById("create").innerHTML="CREATE COMPANY";
   	return false;
 }
}
company();
var erase=document.getElementById("del");
erase.onclick=function()
{ 
if(localStorage.getItem("company")!=null)
{
	var x=confirm("are you sure want to delete company");
	if(x==true)
	{
		localStorage.removeItem("company");
		localStorage.removeItem("company_logo");
		var i;
		for(i=0;i<localStorage.length;i++)
		{
			var a=localStorage.key(i);
			if(a.match("voucher_no")!=null)
			{
				localStorage.removeItem(a);
			}
			else if(a.match("tax")!=null)
			{
				localStorage.removeItem(a);
			}
			else if(a.match("measure")!=null)
			{
				localStorage.removeItem(a);
			}
		}
		window.location=location.href;
	}
}
else
{
	alert("no company name found please create");
}
}
var btn=document.getElementById("btn");
btn.onclick=function()
{
	var x=localStorage.getItem("company");	
	var y=JSON.parse(x);
	
	if(y.select=="Accounts Only")
	{
			window.location="b_manage.html";
	
	}
	else
	{
		window.location="accounts with inventry/godown.html";
	
	}
}
