//start tabs coding
var i,j;
function tabs()
{

var check=document.getElementById("check");
var button=check.getElementsByTagName("BUTTON");
var hide=document.getElementsByClassName("hide");
for(i=0;i<button.length;i++)
{
	button[i].onclick=function()
	{
		for(j=0;j<hide.length;j++)
		{
			hide[j].style.display="none";
		}
		for(i=0;i<button.length;i++)
		{
			button[i].className="";
		}
		var find=this.innerHTML;
		
		var get=document.getElementById(find);
		get.style.display="block";
		this.className="active";
		
	}
}
button[0].click();

}
tabs();
//purchase shortcut coding
function sales_p()
{
	
var check=document.getElementById("check");
var button=check.getElementsByTagName("BUTTON");

window.onkeydown = function(){

	if(event.altKey&&event.keyCode==80)
	{
		
		button[0].click();
	}
	else if(event.altKey&&event.keyCode==83)
	{
		
		button[1].click();
	}
}
}
sales_p();
//purchase add coding
function add_data()
{
var add_table=document.getElementById("add_table");
var tr=document.createElement("TR");
var td_item=document.createElement("TD");
td_item.style.padding="5px";
var td_qty=document.createElement("TD");
td_qty.style.padding="5px";
var td_rate=document.createElement("TD");
var td_sp=document.createElement("TD");

td_rate.style.padding="5px";
var td_per=document.createElement("TD");
td_per.style.padding="5px";
var td_amount=document.createElement("TD");
td_amount.style.padding="5px";
var td_del=document.createElement("TD");
td_del.style.padding="5px";
var trash=document.createElement("I");

trash.className="fa fa-trash";
trash.style.fontSize="2vw";
trash.style.marginLeft="12px";
trash.style.cursor="pointer";
var sel=document.createElement("SELECT");
var u_opt=document.createElement("OPTION");
u_opt.appendChild(document.createTextNode("unit"));
sel.appendChild(u_opt);
sel.id="p_per";
sel.className="per";
for(i=0;i<localStorage.length;i++)
{
	var s_keys=localStorage.key(i);
	if(s_keys.match("measure"))
	{
		var s_data=localStorage.getItem(s_keys);
		var s_ext=JSON.parse(s_data);
		var opt=document.createElement("Option");
		sel.appendChild(opt);
		opt.appendChild(document.createTextNode(s_ext.symbol));
	}
}

add_table.appendChild(tr);
tr.appendChild(td_item);
tr.appendChild(td_qty);
tr.appendChild(td_rate);
tr.appendChild(td_sp);
tr.appendChild(td_per);
tr.appendChild(td_amount);
tr.appendChild(td_del);
var input_item=document.createElement("INPUT");

input_item.placeholder="Item";
input_item.id="p_item";
input_item.className="item";
var input_qty=document.createElement("INPUT");
input_qty.type="number"
input_qty.placeholder="00.00"
input_qty.disabled=true;
input_item.onkeyup=function(event)
{
	if(event.keyCode==13)
	{
		input_qty.focus();
	}
	input_qty.disabled=false;
}
input_qty.id="p_qty";
input_qty.className="qty";
var input_rate=document.createElement("INPUT");
var input_sp=document.createElement("INPUT");
input_sp.type="number";
input_sp.placeholder="00.00";
input_sp.className="sp";
input_sp.style.width="100%";
input_rate.onkeyup=function(event)
{
	if(event.keyCode==13)
	{
		input_sp.focus();
		input_amount.disabled=false;
	}
}
input_sp.onkeyup=function(event)
{
	if(event.keyCode==13)
	{
		
		if(Number(this.value)>Number(input_rate.value))
		{
			
		sel.focus();
	
		sel.onchange=function()
		{
			document.getElementById("pls").click();
		}
		}
		else
		{
			alert("sp value must be greater than rate value")
		}
	}
	var ev=String.fromCharCode(event.keyCode);
	
	var p_sel=sel.getElementsByTagName("OPTION");
	for(i=0;i<p_sel.length;i++)
	{
	if(p_sel[i].value.toUpperCase().charAt(0).match(ev.toUpperCase()))
	{
		sel.value=p_sel[i].value;
	}
	}
	input_amount.disabled=false;
}
input_rate.type="number";
input_rate.placeholder="00.00";
input_qty.onkeyup=function(event)
{
	if(event.keyCode==13)
	{
		input_rate.focus();
	}
	input_rate.disabled=false;
}
//amount coding
input_qty.oninput=function()
{
	input_amount.value=this.value*input_rate.value;
	subtotal();
	purchase_tax();
	total_tax();
	
}

input_rate.oninput=function()
{
	input_amount.value=this.value*input_qty.value;
	subtotal();
	purchase_tax();
	total_tax();
	
}
input_rate.disabled=true;
input_rate.id="p_rate";
input_rate.className="rate";
var input_amount=document.createElement("INPUT");
input_amount.disabled=true;
input_amount.placeholder="00.00";
input_amount.style.width="100%";
input_amount.onkeydown=function()
{
	return false;
}
input_amount.oncontextmenu=function()
{
	return false;
}
input_amount.id="p_amount";
input_amount.className="amount";
td_item.appendChild(input_item);
td_qty.appendChild(input_qty);
td_rate.appendChild(input_rate);
td_amount.appendChild(input_amount);
td_del.appendChild(trash);
td_per.appendChild(sel);
td_sp.appendChild(input_sp);

// remove coding

var r_tr=add_table.getElementsByTagName("TR");
var tax_data=document.getElementsByClassName("tax_data");
trash.onclick=function()
{
	var tr=this.parentElement.parentElement;
	var yes=confirm("do you sure want to delete");
	if(yes==true)
	{
	tr.remove();
	subtotal();
	purchase_tax();
	total_tax();
	
	}
	if(r_tr.length==1)
	{
		document.getElementById("sub_remove").innerHTML="00.00";
		for(i=0;i<tax_data.length;i++)
		{
			tax_data[i].innerHTML="00.00";
		}
		document.getElementById("t_remove").innerHTML="00.00";
		document.getElementById("paid").value="";
		window.location=location.href;
		document.getElementById("balance").innerHTML=="";
		
		
	}
}
var item=document.getElementsByClassName("item");
item[item.length-1].focus();
}

var pls=document.getElementById("pls");
pls.onclick=function()
{
	if(document.getElementById("sub_remove")!=null)
	{
    add_data();
	}
	else
	{
		alert("please input vouchername");
	}
	
}
// shortcut coding

window.onkeyup=function(event)
{
	if(event.altKey&&event.keyCode==65)
	{
		
		if(document.getElementById("sub_remove")!=null)
		{
		add_data();
		}		
			else
			{
				alert("please purchase something");
			}
	}
}
//purchase account coding
var p_input;
function p_edit()
{
p_input=document.getElementById("p_input");
p_input.onclick=function()
{
	
	this.onclick=function()
	{
	return false;	
	}
	var group=document.getElementById("p_group");
	group.style.display="block";
	for(i=0;i<localStorage.length;i++)
	{
		var keys=localStorage.key(i);
		if(keys.match("ledger_no"))
		{
			var p_find=localStorage.getItem(keys);
			var p_ext=JSON.parse(p_find);
			if(p_ext.group.match("purchase account"))
			{
				group.innerHTML+="<p class='dis'>"+p_ext.ledger+"</p>";
				
				
			}
		}
	}
	var all_p=document.getElementsByClassName("dis");
				for(i=0;i<all_p.length;i++)
				{
					   all_p[i].onclick=function()
		              {
			           p_input.value=this.innerHTML;
					   p_input.focus();
			            group.style.display="none";
		               }
				}
	var all_p=document.getElementsByClassName("dis");
for(i=0;i<all_p.length;i++)
{
	all_p[i].onmouseover=function()
	{
		this.style.backgroundColor="green";
		
		
	}
	all_p[i].onmouseout=function()
	{
		this.style.backgroundColor="";
	}
}
var all_p=document.getElementsByClassName("dis");
p_input.oninput=function()
{
   for(i=0;i<all_p.length;i++)
   {
	   if(all_p[i].innerHTML.toUpperCase().match(p_input.value.toUpperCase())!=null)
	   {
		   all_p[i].style.display="block";
		   
		   all_p[i].onclick=function()
		   {
			   p_input.value=this.innerHTML;
			   p_input.focus();
			   group.style.display="none";
		   }
	   }
	   else
	   {
		  all_p[i].style.display="none"; 
	   }
   }
}
}

p_input.focus();
p_input.click();
p_input.onkeyup=function(event)
{
	if(event.keyCode==13)
	{	
      var all_p=document.getElementsByClassName("dis");
	  if(this.value=="")
	  {
		  return false;
	  }
	  else
	  { 
              for(i=0;i<all_p.length;i++)
               {
	             if(this.value==all_p[i].innerHTML)
		          {
					  document.getElementById("p_group").style.display="none";
		            add_data();
		          }
                }
				
	  }
	}
}

}
p_edit();

//search purchase account coding

//subtotal coding
function subtotal()
{
var sum=0;
var amount=document.getElementsByClassName("amount");
for(i=0;i<amount.length;i++)
{
	sum+=Number(amount[i].value);
	
	document.getElementById("subtotal").innerHTML="<p id='sub_remove' style='margin:0;' class='fa fa-rupee'>"+sum.toFixed(2)+"</p>";
   
}
}
//tax setup coding
var tax_name=document.getElementById("tax_name");
var tax=document.getElementById("tax");
var form=document.getElementById("p_frm");
tax_name.onchange=function()
{
	if(this.value.match(" tax")!==null)
	{
		form.onsubmit=function()
		{
	        if(tax.value.charAt(0).match("%")===null)
	        {
		       var check=/[a-z!=@#+$_^&*({;:"'|\][?/<,.>})-]/i;
		       if(tax.value.match(check)==null)
		       {
			     if(tax.value.indexOf("%")!=-1)
				 {
					 
					 var p_obj={tax_name:tax_name.value,tax:tax.value};
					 var p_save=JSON.stringify(p_obj);
					 localStorage.setItem("ptax_"+tax_name.value,p_save);
					 document.getElementById("p_tax").innerHTML="";
					 tax_name_td();
					 purchase_tax();
					 total_tax();

					 if(localStorage.getItem("ptax_"+tax_name.value)!=null)
					 {
						 document.getElementById("p_legend").innerHTML="sava successfully";
						 document.getElementById("p_legend").style.color="red";
						 setTimeout(function(){document.getElementById("p_legend").innerHTML="Tax Setup";
						 document.getElementById("p_legend").style.color="";
						 },2000)
						 setTimeout(function(){form.reset();},3000)
						 return false;
					 }
					 
				 }
				 else
				 {
					alert("please enter % symbol "); 
					return false;
				 }
		       }
		       else
		       {
			    alert("only 0-9 character acceptable");
				return false;
		       }
	        }
	        else
	        {
		        alert("first index should not be %"); 
				return false;
	        }
		}
	}
	else
	{
		alert("please enter tax with space");
		this.focus();
		this.value="";
	}
}
//tax name coding
function tax_name_td()
{
	for(i=0;i<localStorage.length;i++)
	{
		var key_tax=localStorage.key(i);
		if(key_tax.match("ptax_"))
		{
			var read_data=localStorage.getItem(key_tax);
			var read_ext=JSON.parse(read_data);
			document.getElementById("p_tax").innerHTML+="<p>"+read_ext.tax_name+" - <span>"+read_ext.tax+"</span></p>";
		}
	}
}
tax_name_td();
//tax calculation
function purchase_tax()
{
var subtotal_amount=document.getElementById("sub_remove").innerHTML;

document.getElementById("tax_amount").innerHTML="";
var tax_td=document.getElementById("p_tax");
var span=tax_td.getElementsByTagName("SPAN");
for(i=0;i<span.length;i++)
{

	
	var store=span[i].innerHTML.replace("%","");
	
	var calculate=(Number(subtotal_amount)*Number(store))/100;
	
	document.getElementById("tax_amount").innerHTML+="<p style='padding:8px;margin:0;' id='tax_remove' class='tax_data fa fa-rupee'>"+calculate.toFixed(2)+"</p><br>";
	
}
}
// total tax calculation
function total_tax()
{
var subtotal_amount=document.getElementById("sub_remove").innerHTML;

var tax_amount=document.getElementById("tax_amount");
var p=tax_amount.getElementsByTagName("P");
var x=document.getElementById("p_tax");
var t=x.getElementsByTagName("P");

				if(t.length!=0)
				{
              for(i=0;i<p.length;i++)
              {     
	            subtotal_amount=Number(subtotal_amount)+Number(p[i].innerHTML);
	

	           document.getElementById("total").innerHTML="<p id='t_remove' style='margin:0;' class='fa fa-rupee'>"+subtotal_amount.toFixed(2)+"</p>";
              }
               
                paid();
            }
            else
	      {
		    
		     document.getElementById("total").innerHTML="<p id='t_remove' style='margin:0;' class='fa fa-rupee'>"+subtotal_amount+"</p>";
		     paid();
	      }
		
	
	}



// paid coding
function paid()
{
	var total=document.getElementById("t_remove").innerHTML;
var paid=document.getElementById("paid")
var balance=document.getElementById("balance");
paid.oninput=function()
{
	var save=Number(total)-this.value;
	
	balance.innerHTML=save.toFixed(2);
}
}
//default tax calculation
function defa()
{
	var tax_td=document.getElementById("tax_amount");
	for(i=0;i<localStorage.length;i++)
	{
		var key_data=localStorage.key(i);
		if(key_data.match("ptax_"))
		{
			var pt=document.createElement("P");
			pt.appendChild(document.createTextNode("00.00"));
			tax_td.appendChild(pt);
			
		}
	}
}
defa()
//without tax coding
//arrow key coding
function input_arrow()
{
	
   var input=document.getElementById("p_input");
   input.onclick=function()
   {
	   document.getElementById("p_group").style.display="block";
   }
   var p=document.getElementsByClassName("dis");
   input.onkeydown=function(event)
   {
        if(event.keyCode==40)
        {
			for(i=0;i<p.length;i++)
			{
				p[i].style.backgroundColor="inherit";
			}
            if(sessionStorage.getItem("count")==null)
			{
				p[0].style.backgroundColor="blue";
				this.value=p[0].innerHTML;
				this.onkeyup=function(event)
				{
					if(event.keyCode==13)
					{
						document.getElementById("p_group").style.display="none";
						add_data();
					}
				}
				sessionStorage.setItem("count",0);
			}
			else
			{
				var current=Number(sessionStorage.getItem("count"))+1;
				 sessionStorage.setItem("count",current);
				
				
					
					if(p[current]!=undefined)
					{
						p[current].style.backgroundColor="blue";
						this.value=p[current].innerHTML;
						this.onkeyup=function(event)
				         {
					      if(event.keyCode==13)
					       {
					          	document.getElementById("p_group").style.display="none";
						       add_data();
					        }
				         }
					}
					else
					{
						sessionStorage.removeItem("count");
					}					
			}
        }
		// up arrow
		if(event.keyCode==38)
        {
			for(i=0;i<p.length;i++)
			{
				p[i].style.backgroundColor="inherit";
			}
            if(sessionStorage.getItem("count")==null)
			{
				p[p.length-1].style.backgroundColor="blue";
				this.value=p[p.length-1].innerHTML;
				this.onkeyup=function(event)
				{
					if(event.keyCode==13)
					{
						document.getElementById("p_group").style.display="none";
						add_data();
					}
				}
				sessionStorage.setItem("count",p.length-1);
			}
			else
			{
				var current=Number(sessionStorage.getItem("count"))-1;
				 sessionStorage.setItem("count",current);
				
				
					
					if(p[current]!=undefined)
					{
						p[current].style.backgroundColor="blue";
						this.value=p[current].innerHTML;
						this.onkeyup=function(event)
				         {
					      if(event.keyCode==13)
					       {
					          	document.getElementById("p_group").style.display="none";
						       add_data();
					        }
				         }
					}
					else
					{
						sessionStorage.removeItem("count");
					}					
			}
        }
    }
}	

input_arrow();
//voucher date coding
function voucher_dat()
{
	var date=document.getElementById("date_p");
	date.style.cursor="pointer";
	
	var a=new Date();
	var b=a.getDate();
	var c=a.getMonth()+1;
	var d=a.getFullYear();
	date.innerHTML="<span id='up_date'>"+b+"-"+c+"-"+d+"</span>";
	var ne=document.getElementById("up_date");
	ne.title="edit date";
	ne.onclick=function()
	{
		this.innerHTML="";
		var inp=document.createElement("input");
		inp.type="date";
		date.appendChild(inp);		
	   inp.onblur=function()
	{
		this.remove();
		var all_d=new Date(this.value);
		var s=[all_d.getDate(),all_d.getMonth()+1,all_d.getFullYear()];
		ne.innerHTML=s[0]+"-"+s[1]+"-"+s[2];
	}
	  inp.onchange=function()
	{
		this.remove();
		var all_d=new Date(this.value);
		var s=[all_d.getDate(),all_d.getMonth()+1,all_d.getFullYear()];
		ne.innerHTML=s[0]+"-"+s[1]+"-"+s[2];
	}
	}
}
voucher_dat();
//store voucher
function store_voucher()
{
	var voucher_date=document.getElementById("up_date").innerHTML;
	var s_name=document.getElementById("s_name").value;
	var s_number=document.getElementById("s_number").value;
	var s_address=document.getElementById("s_address").value;
	var ledger_name=document.getElementById("p_input").value;
	var store_item=[],store_qty=[],store_rate=[],store_sp=[],store_per=[],store_amount=[],tax=[];
	var item=document.getElementsByClassName("item");
	var qty=document.getElementsByClassName("qty");
	var rate=document.getElementsByClassName("rate");
	var sp=document.getElementsByClassName("sp");
	var per=document.getElementsByClassName("per");
	var amount=document.getElementsByClassName("amount");
	for(i=0;i<item.length;i++)
	{
		store_item[i]=item[i].value;
	}
	for(i=0;i<qty.length;i++)
	{
		store_qty[i]=qty[i].value;
	}
	for(i=0;i<rate.length;i++)
	{
		store_rate[i]=rate[i].value;
	}
	for(i=0;i<sp.length;i++)
	{
		store_sp[i]=sp[i].value;
	}
	for(i=0;i<per.length;i++)
	{
		store_per[i]=per[i].value;
	}
	for(i=0;i<amount.length;i++)
	{
		store_amount[i]=amount[i].value;
	}
	var subtotal=document.getElementById("sub_remove").innerHTML;
	var tax_data=document.getElementsByClassName("tax_data");
	for(i=0;i<tax_data.length;i++)
	{
		tax[i]=tax_data[i].innerHTML;
	}
	var total_amount=document.getElementById("t_remove").innerHTML;
	var paid_amount=document.getElementById("paid").value;
	var balance_amount=document.getElementById("balance").innerHTML;
	var store_detail={voucher_date:voucher_date,
	                   s_name:s_name,
					   s_number:s_number,
					   s_address:s_address,
					   ledger_name:ledger_name,
					   store_item:store_item,
					   store_qty:store_qty,
					   store_rate:store_rate,
					   store_sp:store_sp,
					   store_per:store_per,
					   store_amount:store_amount,
					   subtotal:subtotal,
					   tax:tax,
					   total_amount:total_amount,
					   paid_amount:paid_amount,
					   balance_amount:balance_amount		
	                  }
	var ext_data=JSON.stringify(store_detail);
	localStorage.setItem("godown_voucher_no_"+document.getElementById("godown").innerHTML,ext_data);
	
}
// save button coding
function save_data()
{
	var btn=document.getElementById("save_btn");
	btn.onclick=function()
	{
		if((document.getElementById("sub_remove"))!=null)
		{
		store_voucher();
		document.getElementById("save_v").innerHTML="store successfully";
		setTimeout(function(){document.getElementById("save_v").innerHTML="";},2000);
		setTimeout(function(){window.location=location.href;},3000);
		}
		else
		{
			alert("please purchase something");
		}
	}
}
save_data();
//update no coding

function update_no()
{
	var x,y=0;
	
	
	for(i=0;i<localStorage.length;i++)
	{
		var x_key=localStorage.key(i);
		if(x_key.match("godown_voucher_no"))
		{
			x=Number(x_key.replace("godown_voucher_no_",""));
			
			if(x>y)
			{
			y=x;
				
				
				
			}
			
		}
	}
	document.getElementById("godown").innerHTML=y+1;
}
update_no();

//shortcut coding
function short()
{
	var icon=document.getElementById("up_icon");
	var ft=document.getElementById("ft");
	icon.onclick=function()
	{
	 if(ft.offsetHeight==0)
	 {
		 this.className="fa fa-toggle-up";
		 
		 ft.style.height="230px";
		 ft.style.transition="1s";
		 ft.style.padding="3px";
	 }
	 else
	 {
		 ft.style.height="0";
		  ft.style.padding="0";
		  ft.style.transition="1s";
		 this.className="fa fa-toggle-down animated infinite flash";
	 }
	 
	}
}
short();
//current balance coding
function current_b()
{
	var current=0;
	var c=document.getElementById("current_balance");
	for(i=0;i<localStorage.length;i++)
	{
		var c_key=localStorage.key(i);
		if(c_key.match("godown_voucher_no"))
		{
			var get_data=localStorage.getItem(c_key);
			var ext=JSON.parse(get_data);
			current+=Number(ext.total_amount)
		}
	}
	c.innerHTML=current+": Cr";
}
current_b();
//supplier shortcut coding
function supp()
{
	b=document.getElementById("s_name");
	window.onkeyup=function(event)
	{
		if(event.shiftKey&&event.keyCode==83)
		{
			if(document.getElementById("sub_remove")!=null)
			{
			 
			 b.style.border="2px solid red";
			 
			   
			}
			else
			{
				alert("please purchase something");
			}
			
		}
	}
}
supp()
var s_name=document.getElementById("s_name");
var s_number=document.getElementById("s_number");
var s_address=document.getElementById("s_address");
s_name.onkeyup=function(event)
{
	this.style.border="1px solid #ccc";
	if(event.keyCode==13)
	{
		s_number.focus();
	}
}
s_number.onkeyup=function(event)
{
	
	if(event.keyCode==13)
	{
		s_address.focus();
	}
}
//end suuplire details

//company logo and name coding
function cmp()
{
	var x=document.getElementById("cmp_detail");
	var y=document.getElementById("cmp_img");
	var z=localStorage.getItem("company");
	var a=JSON.parse(z);
	x.innerHTML="<h1 style='padding:0;margin:0;font-family:righteous;'>"+a.cmp_name+"</h1><br>"+"phone no:<span style='margin-bottom:5px;color:black;'>"+a.mobile+"</span><br>Email Id:"+a.email;
	var cmp_im=localStorage.getItem("company_logo");
	y.src=cmp_im;
	y.style.backgroundSize="cover";
}
cmp();
//start search coding
function voucher_search()
{
	var item=document.getElementsByClassName("item");
	var qty=document.getElementsByClassName("qty");
	var rate=document.getElementsByClassName("rate");
	var sp=document.getElementsByClassName("sp");
	var per=document.getElementsByClassName("per");
	var amount=document.getElementsByClassName("amount");
	var input_s=document.getElementById("p_input");	
	var search=document.getElementById("search_v");
	search.onkeyup=function(event)
	{
		
		if(event.keyCode==13)
		{
			if(this.value=="")
			{
				alert("please input number");
				
			}
			else
			{
				if(localStorage.getItem("godown_voucher_no_"+this.value)!=null)
				{
					del_voucher();
					var read_data=localStorage.getItem("godown_voucher_no_"+this.value)
					var ext=JSON.parse(read_data);
					document.getElementById("godown").innerHTML=this.value;
					input_s.value=ext.ledger_name;
					document.getElementById("p_group").style.display="none";
					
					
					
					document.getElementById("up_date").innerHTML=ext.voucher_date;
					
					document.getElementById("subtotal").innerHTML="";
					document.getElementById("tax_amount").innerHTML="";
					var j
					for(j=0;j<ext.store_item.length;j++)
					{
						
						add_data();
					}
					for(i=0;i<item.length;i++)
					{
						qty[i].value=ext.store_qty[i];
						qty[i].disabled=false;
						rate[i].value=ext.store_rate[i];
						rate[i].disabled=false;
						sp[i].value=ext.store_sp[i];
						per[i].value=ext.store_per[i];
						amount[i].value=ext.store_amount[i];
						amount[i].disabled=false;
						item[i].value=ext.store_item[i];
					}
					document.getElementById("s_name").value=ext.s_name;
					document.getElementById("s_number").value=ext.s_number;
					document.getElementById("s_address").value=ext.s_address;
					var sub=document.getElementById("subtotal");
					var p_sub=document.createElement("P");
					p_sub.className="fa fa-rupee";
					p_sub.id="sub_remove";
					sub.appendChild(p_sub);
					p_sub.appendChild(document.createTextNode(ext.subtotal));
					var tax_a=document.getElementById("tax_amount");
					
					for(j=0;j<ext.tax.length;j++)
					{
					var ta_p=document.createElement("P");
					ta_p.id="tax_remove";
					ta_p.className="tax_data fa fa-rupee";
					tax_a.appendChild(ta_p);
					ta_p.appendChild(document.createTextNode(ext.tax[j]));
					var b=document.createElement("BR");
					tax_a.appendChild(b);
					
					var total_e=document.getElementById("total");
					total_e.innerHTML="";
					var total_p=document.createElement("P");
					total_p.className="fa fa-rupee";
					total_p.id="t_remove";
					total_e.appendChild(total_p);
					total_p.appendChild(document.createTextNode(ext.total_amount));
					document.getElementById("paid").value=ext.paid_amount;
					document.getElementById("balance").innerHTML=ext.balance_amount;
					}
				}
				
				    else
				    {
					   alert("voucher not found");
					   search_v.value="";
				    }
			}
		}
				
	}
	
}
	

voucher_search();
//start delete coding
function del_voucher()
{
	var search=document.getElementById("search_v");
	var del=document.getElementById("delete_v");
	del.onclick=function()
	{
		var x=confirm("do you sure want to delete");
		if(x==true)
		{
	       localStorage.removeItem("godown_voucher_no_"+search.value);
		   window.location=location.href;
		}
	  
	}
}
