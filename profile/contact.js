window.onload=function(){
	var x=document.getElementById("all_contact").children.length;
	if(x==0)
	{
		document.getElementById("contact_list").innerHTML="no contact found";
	}
	
}
function contact_box()
{
	var x=document.getElementById("box");
	var user_data=sessionStorage.getItem("user_mail");
	var detail=localStorage.getItem(user_data+"image_url");
	x.style.background="url("+detail+")";
	x.style.backgroundSize="cover";
}
contact_box();



function add_check()
{
var pnum=document.getElementById("fnumber").value;
var snum=document.getElementById("snumber").value;	
var fullname=document.getElementById("fname").value;	
if(pnum!=""&&snum!=""&&fullname!="")
  {
	if(pnum.charAt(0)!=9&&pnum.charAt(0)!=8&&pnum.charAt(0)!=7&&pnum.charAt(0)!=6||pnum.length!=10)
    {
		alert("first number is invalid");
	}
	else
	{
		if(snum.charAt(0)!=9&&snum.charAt(0)!=8&&snum.charAt(0)!=7&&pnum.charAt(0)!=6||snum.length!=10)
		{
			alert("second number is invalid");
		}
		else
		{
			if(isNaN(fullname))
			{
				var user={fullname:fullname,pnum:pnum,snum:snum};
				var user_data=JSON.stringify(user);
				localStorage.setItem(fullname+" contact",user_data);
				document.getElementById("store_check").innerHTML="store successful";
				document.getElementById("store_check").style.display="block";
				document.getElementById("reset").reset();
				setTimeout(function(){document.getElementById("store_check").innerHTML="";},2000);
				window.location=location.href;
				
				
			}
		    else
			{
				alert("enter valid name and max 8 character");
			}
		  		  
		}
	}
  }
  else
  {
  alert("field area is empty");
  }
}

function show_contacts()
{
	var i;
	for(i=1;i<=localStorage.length;i++)
	{
		var keys=localStorage.key(i);
		if(keys.match("contact"))
		{
			var user=localStorage.getItem(keys);
			var user_data=JSON.parse(user);
			var all_contact=document.getElementById("all_contact");
			var fieldset=document.createElement("FIELDSET");
			var legend=document.createElement("LEGEND");
			legend.setAttribute("id","text");
			var ol=document.createElement("OL")
			var li_one=document.createElement("LI");
			var li_two=document.createElement("LI");
			var trash=document.createElement("I");
			var edit=document.createElement("I");
			var save=document.createElement("I");
			var saved=document.createElement("span");
			
			edit.setAttribute("class","fa fa-edit");
			edit.setAttribute("id","delete_icon");
			edit.setAttribute("title","edit_contact");
			
			save.setAttribute("class","fa fa-save");
			save.setAttribute("id","delete_icon");
			save.setAttribute("title","save contact");
			
			fieldset.setAttribute("id","fieldset");
			trash.setAttribute("class","fa fa-trash");
			trash.setAttribute("id","delete_icon");
			trash.setAttribute("title","delete_contact");
			all_contact.appendChild(fieldset);
			fieldset.appendChild(legend);
	        fieldset.appendChild(ol);
			ol.appendChild(li_one);
			ol.appendChild(li_two);		
			ol.appendChild(save);			
			ol.appendChild(edit);
			ol.appendChild(trash);
			ol.appendChild(saved);
			legend.appendChild(document.createTextNode(user_data.fullname));
			li_one.appendChild(document.createTextNode(user_data.pnum));
			li_two.appendChild(document.createTextNode(user_data.snum));
		     del_contact(keys,trash);
			 saved.innerHTML="successfuliy saved";
			 saved.style.color="rgb(255,116,102)";
			 saved.style.fontFamily="calibri";
			 saved.style.display="none";
			 user_all_contact(keys,edit,save,saved);
            save.style.display="none";	
             			
		
	    }
	}
	
}
show_contacts();
function del_contact(keys_data,delet)
{
	delet.onclick=function()
	{
		var sure=confirm("are you sure want to delete this contact ?");
		if(sure==true)
		{			
		var ol=this.parentElement;
		fieldset=ol.parentElement;
		fieldset.remove();
		document.cookie=keys_data+"="+localStorage.getItem(keys_data)+";max-age:90000000000";
		localStorage.removeItem(keys_data);
		var x=document.getElementById("all_contact").children.length;
	if(x==0)
	   {
		document.getElementById("contact_list").innerHTML="no contact found";
	  }
	  }
	}
}
 
 function search_data(user_input){
	 var keywords=user_input.value.toUpperCase();
	 var all_contact=document.getElementById("all_contact");
	 var legend=all_contact.getElementsByTagName("LEGEND");
	 var i;
	 for(i=0;i<legend.length;i++)
	 {
		 if(legend[i].innerHTML.toUpperCase().indexOf(keywords)!=-1)
		 {
			 legend[i].parentElement.style.display="";
		 }
		 else
		 {
			 legend[i].parentElement.style.display="none";
		 }
	 }
	 
 }

function user_all_contact(user_profile,edit,save_btn,saved)
{
	edit.onclick=function()
	{
		var ol=this.parentElement;
		var fieldset=ol.parentElement;		
		var legend=fieldset.getElementsByTagName("LEGEND");
		legend[0].setAttribute("contentEditable","true");
		save_btn.style.display="block";
		
		legend[0].focus();
		var li=ol.getElementsByTagName("LI");
		
		
		var i;
		for(i=0;i<li.length;i++)
		{
			li[i].setAttribute("contentEditable","true");
			
		}
		var current_legend;
		var previous_data;
		
		legend[0].onclick=function()
		{
			previous_data=this.innerHTML;
		}
		legend[0].onblur=function()
		{
			current_legend=this.innerHTML;
		}
		
		var previous_number=[];
		var current_number=[];
		
		li[0].onclick=function()
		 {
			 previous_number[0]=this.innerHTML;
			 li[0].style.border="none";
		 }
	    li[1].onclick=function()
		 {
			 previous_number[1]=this.innerHTML;
			 li[1].style.border="none";
		 }
		 li[0].onblur=function()
		 {
			 current_number[0]=this.innerHTML;
		 }
		 li[1].onblur=function()
		 {
			 current_number[1]=this.innerHTML;
		 }
		 
		  
		 save_btn.onclick=function()
		 {
		
			 var user_submit={fullname:current_legend==undefined?legend[0].innerHTML:current_legend,pnum:current_number[0]==undefined?li[0].innerHTML:current_number[0],snum:current_number[1]==undefined?li[1].innerHTML:current_number[1]};
			
			 var final_data=JSON.stringify(user_submit);
			 
			   var txt=localStorage.getItem(user_profile);
			   
			   localStorage.setItem(user_profile,txt.replace(txt,final_data));
			   
              saved.style.display="block";
			  setTimeout(function(){saved.style.display="none";},2000);
			 
			 
			}
}

}
//contact logout coding
function contact_logout()
{
	var data=confirm("are tou sure want to logout ?");
	if(data==true)
	{
		
		setTimeout(function(){window.location="../index.html";},2000);
	}
}
//end contact logout codding

//start contact restore coding
function restore()
{
	
	document.getElementById("restore").style.display="block";
	var table_head=document.getElementById("cont");
	
	var name=document.cookie.split(";");
	var i;
	var j;
	for(i=0;i<name.length;i++)
	{
		var help=name[i].split("=");
		for(j=0;j<help.length;j++)
		{
			if(help[j].indexOf("contact")==-1)
			{
				var extract=JSON.parse(help[j]);
				var tr=document.createElement("TR");
				var td_one=document.createElement("TD");
				var td_two=document.createElement("TD");
				var td_three=document.createElement("TD");
				var td_four=document.createElement("TD");
				var refresh=document.createElement("I");
				refresh.setAttribute("class","fa fa-refresh");
				refresh.setAttribute("id","delete_contact");
				refresh.setAttribute("title","restore now");
				tr.appendChild(td_one);
				tr.appendChild(td_two);
				tr.appendChild(td_three);
				tr.appendChild(td_four);
				table_head.appendChild(tr);
				td_four.appendChild(refresh);
				td_one.appendChild(document.createTextNode(extract.fullname));
				td_two.appendChild(document.createTextNode(extract.pnum));
				td_three.appendChild(document.createTextNode(extract.snum));
				refresh.onclick=function()
				{
					var x=this.parentElement;
					var tr=x.parentElement;
					var all=tr.getElementsByTagName("TD");
					var total={fullname:all[0].innerHTML,pnum:all[1].innerHTML,snum:all[2].innerHTML};
					var final=JSON.stringify(total);
					localStorage.setItem(all[0].innerHTML+" contact",final);
					document.cookie=all[0].innerHTML+" contact=;max-age:0";
					tr.remove();
					window.location=location.href;
					
				}
				
			}
		}
	}
	
	
	
	
}
function cut()
{
	document.getElementById("restore").style.display="none";
}
//end contact restore coding

