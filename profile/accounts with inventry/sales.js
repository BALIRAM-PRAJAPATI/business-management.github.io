//company logo and name coding
function sales_cmp()
{
	var x=document.getElementById("sales_cmp_detail");
	var y=document.getElementById("sales_cmp_img");
	var z=localStorage.getItem("company");
	var a=JSON.parse(z);
	x.innerHTML="<h1 style='padding:0;margin:0;font-family:righteous;'>"+a.cmp_name+"</h1><br>"+"phone no:<span style='margin-bottom:5px;color:black;'>"+a.mobile+"</span><br>Email Id:"+a.email;
	var cmp_im=localStorage.getItem("company_logo");
	y.src=cmp_im;
	y.style.backgroundSize="cover";
}
sales_cmp();
// start sales_add_item coding
function sales_add_data()
{
	var add_table=document.getElementById("sales_add_table");
var tr=document.createElement("TR");
var td_item=document.createElement("TD");
td_item.style.padding="5px";
var td_qty=document.createElement("TD");
td_qty.style.padding="5px";
var td_rate=document.createElement("TD");


td_rate.style.padding="5px";
var td_per=document.createElement("TD");
td_per.style.padding="5px";
var td_amount=document.createElement("TD");
td_amount.style.padding="5px";
var td_del=document.createElement("TD");
td_del.style.padding="5px";
var trash=document.createElement("I");
//remove trash
var r_tr=add_table.getElementsByTagName("TR");

trash.onclick=function()
{
	
	var tr=this.parentElement.parentElement;
	var yes=confirm("do you sure want to delete");
	if(yes==true)
	{
		tr.remove();
	sales_subtotal();
	sales_purchase_tax();
	sales_total_tax();
	
	if(r_tr.length==1)
	{
	
	window.location=location.href;
	}
	}
}
//end trash
trash.className="fa fa-trash";
trash.style.fontSize="2vw";
trash.style.marginLeft="12px";
trash.style.cursor="pointer";
var sel=document.createElement("SELECT");
var u_opt=document.createElement("OPTION");
u_opt.appendChild(document.createTextNode("unit"));
sel.appendChild(u_opt);
sel.id="sales_p_per";
sel.className="sales_per";
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

tr.appendChild(td_per);
tr.appendChild(td_amount);
tr.appendChild(td_del);
var input_item=document.createElement("INPUT");

input_item.placeholder="Item";
input_item.id="sales_p_item";
input_item.className="sales_item";
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
input_qty.id="sales_p_qty";
input_qty.className="sales_qty";
var input_rate=document.createElement("INPUT");

input_rate.onkeydown=function(event)
{
	if(event.keyCode==13)
	{
		sel.focus();
		sel.onchange=function()
		{
			sales_add_data();
		}
		input_amount.disabled=false;
	}
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
	sales_subtotal();
	sales_purchase_tax();
	sales_total_tax();
}

input_rate.oninput=function()
{
	input_amount.value=this.value*input_qty.value;
	sales_subtotal();
	sales_purchase_tax();
	sales_total_tax();
}
input_rate.disabled=true;
input_rate.id="sales_p_rate";
input_rate.className="sales_rate";
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
input_amount.id="sales_p_amount";
input_amount.className="sales_amount";
td_item.appendChild(input_item);
td_qty.appendChild(input_qty);
td_rate.appendChild(input_rate);
td_amount.appendChild(input_amount);
td_del.appendChild(trash);
td_per.appendChild(sel);







var item=document.getElementsByClassName("sales_item");
item[item.length-1].focus();
}
//pls click
var pls=document.getElementById("sales_pls");
pls.onclick=function()
{
	if(document.getElementById("sales_sub_remove")!=null)
	{
    sales_add_data();	
	}
}

//start sales input coding
//purchase account coding
var s_input;
function sales_p_edit()
{
s_input=document.getElementById("sales_p_input");
s_input.onclick=function()
{
	
	this.onclick=function()
	{
	return false;	
	}
	var group=document.getElementById("sales_p_group");
	group.style.display="block";
	for(i=0;i<localStorage.length;i++)
	{
		var keys=localStorage.key(i);
		if(keys.match("ledger_no"))
		{
			var p_find=localStorage.getItem(keys);
			var p_ext=JSON.parse(p_find);
			if(p_ext.group.match("sales account"))
			{
				group.innerHTML+="<p class='sales_dis'>"+p_ext.ledger+"</p>";
				
				
			}
		}
	}
	var all_p=document.getElementsByClassName("sales_dis");
				for(i=0;i<all_p.length;i++)
				{
					   all_p[i].onclick=function()
		              {
			           s_input.value=this.innerHTML;
					   s_input.focus();
			            group.style.display="none";
		               }
				}
	var all_p=document.getElementsByClassName("sales_dis");
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
var all_p=document.getElementsByClassName("sales_dis");
s_input.oninput=function()
{
   for(i=0;i<all_p.length;i++)
   {
	   if(all_p[i].innerHTML.toUpperCase().match(s_input.value.toUpperCase())!=null)
	   {
		   all_p[i].style.display="block";
		   
		   all_p[i].onclick=function()
		   {
			   s_input.value=this.innerHTML;
			   s_input.focus();
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

s_input.focus();
s_input.click();
s_input.onkeyup=function(event)
{
	if(event.keyCode==13)
	{	
      var all_p=document.getElementsByClassName("sales_dis");
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
					  document.getElementById("sales_p_group").style.display="none";
					 
		            sales_add_data();
		          }
                }
				
	  }
	}
}

}
sales_p_edit();
//end  sales input coding
//sales tax coding
var sales_tax_name=document.getElementById("sales_tax_name");
var sales_tax=document.getElementById("sales_tax");
var sales_form=document.getElementById("sales_p_frm");
sales_tax_name.onchange=function()
{
	if(this.value.match(" tax")!==null)
	{
		sales_form.onsubmit=function()
		{
	        if(sales_tax.value.charAt(0).match("%")===null)
	        {
		       var check=/[a-z!=@#+$_^&*({;:"'|\][?/<,.>})-]/i;
		       if(sales_tax.value.match(check)==null)
		       {
			     if(sales_tax.value.indexOf("%")!=-1)
				 {
					 
					 var p_obj={tax_name:sales_tax_name.value,tax:sales_tax.value};
					 var p_save=JSON.stringify(p_obj);
					 localStorage.setItem("stax_"+sales_tax_name.value,p_save);
					 document.getElementById("sales_p_tax").innerHTML="";
					
                    sales_tax_name_td();
					sales_purchase_tax();
					sales_total_tax();
					 if(localStorage.getItem("stax_"+sales_tax_name.value)!=null)
					 {
						 document.getElementById("sales_p_legend").innerHTML="sava successfully";
						 document.getElementById("sales_p_legend").style.color="red";
						 setTimeout(function(){document.getElementById("p_legend").innerHTML="Tax Setup";
						 document.getElementById("sales_p_legend").style.color="";
						 },2000)
						 setTimeout(function(){sales_form.reset();},3000)
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
//end sales tax coding
//sales subtotal coding
function sales_subtotal()
{
var sum=0;
var amount=document.getElementsByClassName("sales_amount");
for(i=0;i<amount.length;i++)
{
	sum+=Number(amount[i].value);
	
	document.getElementById("sales_subtotal").innerHTML="<p id='sales_sub_remove' style='margin:0;' class='fa fa-rupee'>"+sum.toFixed(2)+"</p>";
   
}
}
//end sales subtotal coding
//present coding
function sales_tax_name_td()
{
	for(i=0;i<localStorage.length;i++)
	{
		var key_tax=localStorage.key(i);
		if(key_tax.match("stax_"))
		{
			var read_data=localStorage.getItem(key_tax);
			var read_ext=JSON.parse(read_data);
			document.getElementById("sales_p_tax").innerHTML+="<p>"+read_ext.tax_name+" - <span>"+read_ext.tax+"</span></p>";
		}
	}
}
sales_tax_name_td();
//end present coding
//all_tax calculation

function sales_purchase_tax()
{
var subtotal_amount=document.getElementById("sales_sub_remove").innerHTML;

document.getElementById("sales_tax_amount").innerHTML="";
var tax_td=document.getElementById("sales_p_tax");
var span=tax_td.getElementsByTagName("SPAN");
for(i=0;i<span.length;i++)
{

	
	var store=span[i].innerHTML.replace("%","");
	
	var calculate=(Number(subtotal_amount)*Number(store))/100;
	
	document.getElementById("sales_tax_amount").innerHTML+="<p style='padding:8px;margin:0;' id='sales_tax_remove' class='sales_tax_data fa fa-rupee'>"+calculate.toFixed(2)+"</p><br>";
	
}
}
// total tax calculation
function sales_total_tax()
{
var subtotal_amount=document.getElementById("sales_sub_remove").innerHTML;

var tax_amount=document.getElementById("sales_tax_amount");
var p=tax_amount.getElementsByTagName("P");
var x=document.getElementById("sales_p_tax");
var t=x.getElementsByTagName("P");

				if(t.length!=0)
				{
              for(i=0;i<p.length;i++)
              {     
	            subtotal_amount=Number(subtotal_amount)+Number(p[i].innerHTML);
	

	           document.getElementById("sales_total").innerHTML="<p id='sales_t_remove' style='margin:0;' class='fa fa-rupee'>"+subtotal_amount.toFixed(2)+"</p>";
              }
               
                sales_paid();
            }
            else
	      {
		    
		     document.getElementById("sales_total").innerHTML="<p id='sales_t_remove' style='margin:0;' class='fa fa-rupee'>"+subtotal_amount+"</p>";
		     sales_paid();
	      }
		
	
	}



// paid coding
function sales_paid()
{
	var total=document.getElementById("sales_t_remove").innerHTML;
var paid=document.getElementById("sales_paid")
var balance=document.getElementById("sales_balance");
paid.oninput=function()
{
	var save=Number(total)-this.value;
	
	balance.innerHTML=save.toFixed(2);
}
}
//default tax calculation
function sales_defa()
{
	var tax_td=document.getElementById("sales_tax_amount");
	for(i=0;i<localStorage.length;i++)
	{
		var key_data=localStorage.key(i);
		if(key_data.match("stax_"))
		{
			var pt=document.createElement("P");
			pt.appendChild(document.createTextNode("00.00"));
			tax_td.appendChild(pt);
			
		}
	}
}
sales_defa()
//end tax calculation

//sales arrow coding
function sales_input_arrow()
{
	
   var input=document.getElementById("sales_p_input");
   input.onclick=function()
   {
	   document.getElementById("sales_p_group").style.display="block";
   }
   var p=document.getElementsByClassName("sales_dis");
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
						document.getElementById("sales_p_group").style.display="none";
						sales_add_data();
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
					          	document.getElementById("sales_p_group").style.display="none";
						       sales_add_data();
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
						document.getElementById("sales_p_group").style.display="none";
						sales_add_data();
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
					          	document.getElementById("sales_p_group").style.display="none";
						       sales_add_data();
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
sales_input_arrow();
//end sales arrow coding

//start sales date coding
function sales_voucher_dat()
{
	var date=document.getElementById("sales_date_p");
	date.style.cursor="pointer";
	
	var a=new Date();
	var b=a.getDate();
	var c=a.getMonth()+1;
	var d=a.getFullYear();
	date.innerHTML="<span id='sales_up_date'>"+b+"-"+c+"-"+d+"</span>";
	var ne=document.getElementById("sales_up_date");
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
sales_voucher_dat();
//end sales date coding

//sales store coding
function sales_store_voucher()
{
	var voucher_date=document.getElementById("sales_up_date").innerHTML;
	var s_name=document.getElementById("sales_s_name").value;
	var s_number=document.getElementById("sales_s_number").value;
	var s_address=document.getElementById("sales_s_address").value;
	var ledger_name=document.getElementById("sales_p_input").value;
	var store_item=[],store_qty=[],store_rate=[],store_per=[],store_amount=[],tax=[];
	var item=document.getElementsByClassName("sales_item");
	var qty=document.getElementsByClassName("sales_qty");
	var rate=document.getElementsByClassName("sales_rate");
	
	var per=document.getElementsByClassName("sales_per");
	var amount=document.getElementsByClassName("sales_amount");
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
	
	for(i=0;i<per.length;i++)
	{
		store_per[i]=per[i].value;
	}
	for(i=0;i<amount.length;i++)
	{
		store_amount[i]=amount[i].value;
	}
	var subtotal=document.getElementById("sales_sub_remove").innerHTML;
	var tax_data=document.getElementsByClassName("sales_tax_data");
	for(i=0;i<tax_data.length;i++)
	{
		tax[i]=tax_data[i].innerHTML;
	}
	var total_amount=document.getElementById("sales_t_remove").innerHTML;
	var paid_amount=document.getElementById("sales_paid").value;
	var balance_amount=document.getElementById("sales_balance").innerHTML;
	var store_detail={voucher_date:voucher_date,
	                   s_name:s_name,
					   s_number:s_number,
					   s_address:s_address,
					   ledger_name:ledger_name,
					   store_item:store_item,
					   store_qty:store_qty,
					   store_rate:store_rate,
					   
					   store_per:store_per,
					   store_amount:store_amount,
					   subtotal:subtotal,
					   tax:tax,
					   total_amount:total_amount,
					   paid_amount:paid_amount,
					   balance_amount:balance_amount		
	                  }
	var ext_data=JSON.stringify(store_detail);
	localStorage.setItem("godown_sales_no_"+document.getElementById("sales_godown").innerHTML,ext_data);
	
}
// save button coding
function sales_save_data()
{
	var btn=document.getElementById("sales_save_btn");
	btn.onclick=function()
	{
		if((document.getElementById("sales_sub_remove"))!=null)
		{
		sales_store_voucher();
		document.getElementById("sales_save_v").innerHTML="store successfully";
		setTimeout(function(){document.getElementById("sales_save_v").innerHTML="";},2000);
		setTimeout(function(){window.location=location.href;},3000);
		}
		else
		{
			alert("please purchase something");
		}
	}
}
sales_save_data();
//update no coding

function sales_update_no()
{
	var x,y=0;
	
	
	for(i=0;i<localStorage.length;i++)
	{
		var x_key=localStorage.key(i);
		if(x_key.match("godown_sales_no"))
		{
			x=Number(x_key.replace("godown_sales_no_",""));
			
			if(x>y)
			{
			y=x;
				
				
				
			}
			
		}
	}
	document.getElementById("sales_godown").innerHTML=y+1;
}
sales_update_no();

//end sales store coding

//sales current balance coding
function sales_current_b()
{
	var current=0;
	var c=document.getElementById("sales_current_balance");
	for(i=0;i<localStorage.length;i++)
	{
		var c_key=localStorage.key(i);
		if(c_key.match("godown_sales_no"))
		{
			var get_data=localStorage.getItem(c_key);
			var ext=JSON.parse(get_data);
			current+=Number(ext.total_amount)
		}
	}
	c.innerHTML=current+": Cr";
}
sales_current_b();
//end sales current balance coding

//customer shortcut coding
function sales_supp()
{
	b=document.getElementById("sales_s_name");
	window.onkeyup=function(event)
	{
		if(event.shiftKey&&event.keyCode==83)
		{
			if(document.getElementById("sales_sub_remove")!=null)
			{
			 
			 b.style.border="2px solid red";			   
			}
			else
			{
				 alert("please purchase some thing");
				
			}
			
		}
	}

}
sales_supp()
	var sales_s_name=document.getElementById("sales_s_name");
var sales_s_number=document.getElementById("sales_s_number");
var sales_s_address=document.getElementById("sales_s_address");
sales_s_name.onkeyup=function(event)
{
	this.style.border="1px solid #ccc";
	if(event.keyCode==13)
	{
		sales_s_number.focus();
	}
}
sales_s_number.onkeyup=function(event)
{
	
	if(event.keyCode==13)
	{
		sales_s_address.focus();
	}
}
//end customer shortcut coding

//start sales search coding
function sales_voucher_search()
{
	var item=document.getElementsByClassName("sales_item");
	var qty=document.getElementsByClassName("sales_qty");
	var rate=document.getElementsByClassName("sales_rate");
	
	var per=document.getElementsByClassName("sales_per");
	var amount=document.getElementsByClassName("sales_amount");
	var input_s=document.getElementById("sales_p_input");	
	var search=document.getElementById("sales_search_v");
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
				if(localStorage.getItem("godown_sales_no_"+this.value)!=null)
				{
					sales_del_voucher();
					var read_data=localStorage.getItem("godown_sales_no_"+this.value)
					var ext=JSON.parse(read_data);
					document.getElementById("sales_godown").innerHTML=this.value;
					input_s.value=ext.ledger_name;
					document.getElementById("sales_p_group").style.display="none";
					
					
					
					document.getElementById("sales_up_date").innerHTML=ext.voucher_date;
					
					document.getElementById("sales_subtotal").innerHTML="";
					document.getElementById("sales_tax_amount").innerHTML="";
					var j
					for(j=0;j<ext.store_item.length;j++)
					{
						
						sales_add_data();
					}
					for(i=0;i<item.length;i++)
					{
						qty[i].value=ext.store_qty[i];
						qty[i].disabled=false;
						rate[i].value=ext.store_rate[i];
						rate[i].disabled=false;
						
						per[i].value=ext.store_per[i];
						amount[i].value=ext.store_amount[i];
						amount[i].disabled=false;
						item[i].value=ext.store_item[i];
					}
					document.getElementById("sales_s_name").value=ext.s_name;
					document.getElementById("sales_s_number").value=ext.s_number;
					document.getElementById("sales_s_address").value=ext.s_address;
					var sub=document.getElementById("sales_subtotal");
					var p_sub=document.createElement("P");
					p_sub.className="fa fa-rupee";
					p_sub.id="sales_sub_remove";
					sub.appendChild(p_sub);
					p_sub.appendChild(document.createTextNode(ext.subtotal));
					var tax_a=document.getElementById("sales_tax_amount");
					
					for(j=0;j<ext.tax.length;j++)
					{
					var ta_p=document.createElement("P");
					ta_p.id="sales_tax_remove";
					ta_p.className="sales_tax_data fa fa-rupee";
					tax_a.appendChild(ta_p);
					ta_p.appendChild(document.createTextNode(ext.tax[j]));
					var b=document.createElement("BR");
					tax_a.appendChild(b);
					
					var total_e=document.getElementById("sales_total");
					total_e.innerHTML="";
					var total_p=document.createElement("P");
					total_p.className="fa fa-rupee";
					total_p.id="sales_t_remove";
					total_e.appendChild(total_p);
					total_p.appendChild(document.createTextNode(ext.total_amount));
					document.getElementById("sales_paid").value=ext.paid_amount;
					document.getElementById("sales_balance").innerHTML=ext.balance_amount;
					}
				}
				
				    else
				    {
					   alert("voucher not found");
					   sales_search_v.value="";
				    }
			}
		}
				
	}
	
}
	

sales_voucher_search();
//start delete coding
function sales_del_voucher()
{
	var search=document.getElementById("sales_search_v");
	var del=document.getElementById("sales_delete_v");
	del.onclick=function()
	{
		var x=confirm("do you sure want to delete");
		if(x==true)
		{
	       localStorage.removeItem("godown_sales_no_"+search.value);
		   window.location=location.href;
		}
	  
	}
}
//end sales search coding