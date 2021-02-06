//start business user image coding
var input_qty;
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
function man()
{
var check=document.getElementById("check");
var x=localStorage.getItem("company_logo");
check.style.background="url("+x+")";
check.style.backgroundRepeat="no-repeat";
check.style.backgroundSize="150px 150px";
check.style.backgroundPosition="center";
}
man();
function update()
{
	var x=localStorage.getItem("company");
	var y=JSON.parse(x);
	document.getElementById("name").innerHTML=y.cmp_name;
}
update()
var balance=document.getElementById("measure");
balance.onclick=function()
{
	
	var x=document.getElementById("measure_div");	
	var y=document.getElementById("main");
	
	
	this.style.display="none";
	
	
	x.style.display="block";
	x.style.background="black";
	x.style.cursor="auto";
	y.style.height="33vw";

	frm=document.getElementById("wap");
	frm.onsubmit=function()
	{
	var symbol=document.getElementById("m_s").value;
	var formal_name=document.getElementById("m_f").value;
	var all={symbol:symbol,formal_name:formal_name};
	var measure_data=JSON.stringify(all);
	localStorage.setItem("measure "+symbol,measure_data);
	var mgr=document.getElementById("measure_div");
	var s=document.createElement("P");
	s.style.position="absolute";
	s.style.top="-7px";
	s.style.left="0";
	mgr.appendChild(s);
	s.appendChild(document.createTextNode("store successfully"));
	s.style.color="red";
	setTimeout(function(){s.innerHTML="";},600);
	this.reset();
	
	return false;
	}
}
	

var close=document.getElementById("balance_close");
close.onclick=function()
{
	var x=document.getElementById("measure_div");

	x.style.display="none"
	balance.style.display="block";
	
}

//start voucher coding
var i,data;
var sale=document.getElementById("c_sale");
sale.onclick=function()
{
	
	var x=document.getElementById("voucher_box");
	x.style.display="block";
	x.className="animated fadeInDown";
	x.style.transition="1s";
	this.onclick=function()
	{
		return false;
	}
	var z=localStorage.getItem("store_voucher");
	for(i=0;i<localStorage.length;i++)
	{
		keys=localStorage.key(i);
		if(keys.indexOf(z+"voucher_no")!=-1)
		{
			
			data=keys.split("_");
			all_voucher_no=data[2];
			all_voucher_no++;
			
			document.getElementById("voucher_no").innerHTML="voucher-no:"+all_voucher_no;
		}
		else
		{
		 document.getElementById("voucher_no").innerHTML="voucher-no:"+all_voucher_no;
		}
	}
	

	
	
	var a=document.getElementById("address_voucher");
	var b=document.getElementById("logo_voucher");
	var data=localStorage.getItem("company_logo");
	var img=document.createElement("IMG");
	b.appendChild(img);
	img.src=data;
	img.style.backgroundPosition="cover";
	var detail=localStorage.getItem("company");
	var user=JSON.parse(detail);
	a.innerHTML="Company Name: "+user.cmp_name+"<br>Mailing name: "+user.mailing+"<address>venue: "+user.text+"</address><address>call: "+user.mobile+"</address>";
	var y=document.getElementById("close_voucher");
	y.onclick=function()
	{		
	document.getElementById("logo_voucher").innerHTML="";
	 document.getElementById("subtotal").innerHTML="";
		x.className="animated fadeOutUp";
		x.style.transition="1s";
		setTimeout(function(){window.location=location.href;},1000)
		
	}
	reserve=0;
	          for(i=0;i<localStorage.length;i++)
	         {
	            var item=localStorage.key(i);
	            if(item.indexOf("tax")!=-1)
	              {
					  
		                      var item_v=localStorage.getItem(item);
		                     var extract=JSON.parse(item_v);
		                     reserve=reserve+extract.tax_name+"("+extract.percent+")&nbsp&nbsp&nbsp&nbsp<br><br>";
		                     document.getElementById("p_tax").innerHTML=reserve.replace(0,"");
							 document.getElementById("subtotal").innerHTML+="<i class='fa fa-rupee'></i>&nbsp&nbsp0.00<br><br>";
							 
					   
	              }
				  
	         }
			 var v_name=document.getElementById("one");
			 var v_email=document.getElementById("two");
			 var v_mobile=document.getElementById("three");
			 var v_address=document.getElementById("four");
			 v_name.focus();
			 v_name.oninput=function()
			 {
			   onkeyup=function(event)
			   {
				 if(event.keyCode==13)
				 {
					 v_email.focus();
				 }
			   }
			 }
			 v_email.oninput=function()
			 {
			   onkeyup=function(event)
			   {
				 if(event.keyCode==13)
				 {
					 v_mobile.focus();
				 }
			   }
			 }
			 v_mobile.oninput=function()
			 {
			   onkeyup=function(event)
			   {
				 if(event.keyCode==13)
				 {
					 v_address.focus();
				 }
			   }
			 }
			 v_address.oninput=function()
			 {
			   onkeyup=function(event)
			   {
				 if(event.keyCode==13)
				 {
					 document.getElementById("add_voucher").click();
					  document.getElementById("add_voucher").focus();
				 }
			   }
			 }
}

var store_amount=[],store_item=[],store_price=[],store_qty=[],voucher_Al,user_Al,sum,current,paid_store,user_tax=[],user_opt=[],opt,user_date,store_email=[],user_ex;
	var sel;
function add_item()
{ 

	var y=document.getElementById("voucher_table");
	var tr=document.createElement("TR");
	var td_de=document.createElement("TD");
	
	td_de.setAttribute("id","ram");
	var td_price=document.createElement("TD");
	
	td_price.setAttribute("id","ram");
	var td_qty=document.createElement("TD");
	
	td_qty.setAttribute("id","ram");
	var td_unit=document.createElement("TD");
	td_unit.setAttribute("id","ram")
	sel=document.createElement("SELECT");
	sel.className="voucher_select";
	
	
	sel.style.width="100%";
	td_unit.appendChild(sel);
	
	var u;
	for(u=0;u<localStorage.length;u++)
	{
	var all_u=localStorage.key(u);
	if(all_u.match("measure"))
	{
		
		
		var unit_da=localStorage.getItem(all_u);
	    var total_one=JSON.parse(unit_da);
		opt=document.createElement("OPTION");
		
	    sel.appendChild(opt);
		opt.appendChild(document.createTextNode(total_one.symbol))
	}
	
	}
	var td_amount=document.createElement("TD");
	
	td_amount.setAttribute("id","ram");
	var td_delete=document.createElement("TD");
	td_delete.setAttribute("id","ram");
	td_delete.align="center";
	var del_icon=document.createElement("I");
	del_icon.className="fa fa-trash";
	del_icon.style.cursor="pointer";
	var input_de=document.createElement("INPUT");
	input_de.type="text";
	input_de.setAttribute("id","description");
	input_de.className="item";
	input_de.placeholder="Item Description";
	
	
	var input_price=document.createElement("INPUT");
	input_price.className="price";
	input_price.type="number";
	input_price.disabled=true;
	input_price.placeholder="0.00";
	input_qty=document.createElement("INPUT");
	input_qty.className="qty";
	input_qty.type="number";
	input_qty.placeholder="1";
	input_qty.disabled=true;
	var input_amount=document.createElement("INPUT");
	
	input_amount.type="number";
	input_amount.placeholder="0.00";
	input_amount.disabled=true;
	input_amount.className="amount";
	y.appendChild(tr);
	tr.appendChild(td_de);
	tr.appendChild(td_price);
	tr.appendChild(td_qty);
	tr.appendChild(td_unit);
	tr.appendChild(td_amount);
	tr.appendChild(td_delete);
	td_de.appendChild(input_de);
	td_price.appendChild(input_price);
	td_qty.appendChild(input_qty);
	td_amount.appendChild(input_amount);
	td_delete.appendChild(del_icon);
	del_icon.onclick=function()
	{
		var a=confirm("do you sure want to delete this data");
		if(a==true)
		{
		var x=this.parentElement;
		var y=x.parentElement;
		y.remove();
		}
	}
	input_de.oninput=function()
	{
		input_price.disabled=false;
		onkeyup=function(event)
		{
			if(event.keyCode==13)
			{
				input_price.focus();
			}
		}
	}
	input_price.oninput=function()
	{
		input_qty.disabled=false;
		onkeyup=function(event)
		{
			if(event.keyCode==13)
			{
				input_qty.focus();
			}
		}
	}
	input_qty.oninput=function()
	{
		input_amount.disabled=false;
       input_amount.value=input_price.value*input_qty.value;
        var subtotal=voucher_table.getElementsByClassName("amount");
	     var i;
	     sum=0;
		var user;
		
	    var pre=0;
		var det=0;
		
		
	     for(i=0;i<subtotal.length;i++)
	     {
		    sum=sum+Number(subtotal[i].value);
		     document.getElementById("sub").innerHTML="&nbsp&nbsp"+sum;                     			         
	           
		 
		 }
	          for(i=0;i<localStorage.length;i++)
	         {
	            var item=localStorage.key(i);
	            if(item.indexOf("tax")!=-1)
	              {
					  
		                      var item_v=localStorage.getItem(item);
		                     var extract=JSON.parse(item_v);
		                     pre = pre+extract.percent+"<br>";
							document.getElementById("subtotal").innerHTML = "<span id='percentage' style='display:none';>"+pre.replace(0,"")+"</span>";  
							
		                    
		             }	
			 }	
                             var pe=document.getElementById("percentage").innerHTML;
                            var data=pe.split("%<br>");
		                     for(i=0;i<data.length-1;i++)
		                          {
									  user_tax[i]=(sum*data[i])/100; 
			                             user_Al=(sum*data[i])/100; 
										 var det=det+user_Al;
										 
			                              document.getElementById("subtotal").innerHTML+="<i class='fa fa-rupee'></i>&nbsp&nbsp"+user_Al+"<br><br>";
										  
										  document.getElementById("give").oninput=function()
										  {
											  paid_store=this.value;
										      current=(sum+det-this.value);
										      document.getElementById("pay").innerHTML="&nbsp&nbsp"+current;
										      document.getElementById("v_print").style.display="block"									      						      
											  													
																																		
												
	
	
												
										  }
										  
		                             }
									 voucher_Al=sum+det;
            document.getElementById("total").innerHTML="&nbsp&nbsp"+(sum+det);									 
		}
		 
	input_amount.oncontextmenu=function()
	{
		return false;
	}
	input_amount.onkeydown=function()
	{
		return false;
	}
	
}
function adding()
{
var x=document.getElementById("add_voucher");
x.onclick=function()
{
	add_item();
}	
}
adding();
function date()
{
	var a=document.getElementById("date");
	var x=new Date()
	var date=x.getDate();
	var month=x.getMonth()+1;
	var year=x.getFullYear();
	user_date=date+"/"+month+"/"+year;
	a.innerHTML+=date+"/"+month+"/"+year;
}
date();
//end voucher coding
//taxsetup coding
var tax=document.getElementById("tax");
var set=document.getElementById("tax_set");
set.onclick=function()
{
	if(tax.offsetHeight==70)
	{ 
        var hid=document.getElementById("hid");
		hid.style.display="block";
		tax.style.height="260px";
		tax.style.transition="1s";
		tax.style.background="yellow";
	}
	else
	{
		var hid=document.getElementById("hid");
		hid.style.display="none";
		tax.style.height="70px";
		tax.style.transition="1s";
	}
}
var m=document.getElementById("hid");
var input=m.getElementsByTagName("INPUT");
input[0].onchange=function()
{
  if(this.value.indexOf("tax")!=-1)
  {
	  input[1].onchange=function()
	  {
	     if(this.value.charAt(0).indexOf('%')==-1)
	     {
		    if(this.value.indexOf('%')!=-1)
			{
				var reg=/[a-z!=@#+$_^&*({;:"'|\][?/<,.>})-]/i;
				var demo=document.getElementById("demo");
				demo.onsubmit=function()
				{
					var x=input[1].value;
					
				if(x.match(reg)==null)
				{ 
			        var tax_name=document.getElementById("tax_name").value;
					var percent=document.getElementById("percent").value;
					var user={tax_name:tax_name,percent:percent};
					var detail=JSON.stringify(user);
					localStorage.setItem(tax_name,detail);
				}
				else
				{
					alert("allow only 0-9 and % as input");
	                  return false;
				}
				}
			}
			else
			{
				this.value=" please add % ";
	             this.style.border="1px solid red";
	              this.style.color="red";
	             this.className="animated infinite pulse";
		         this.onclick=function()
	            {
		          this.value="";
	               this.style.border="";
	               this.style.color="";
	                 this.className=""; 
			      }
	          }
		 }			  
          else
         {
		  this.value="first index should not be %";
	       this.style.border="1px solid red";
	       this.style.color="red";
	       this.className="animated infinite pulse";
		   this.onclick=function()
	       {
		     this.value="";
	         this.style.border="";
	          this.style.color="";
	         this.className=""; 
		   }   		  
          }	  
     }
  }
  else
  {
	  this.value="tax word must be add";
	  this.style.border="1px solid red";
	  this.style.color="red";
	  this.className="animated infinite pulse";
	  this.onclick=function()
	  {
		 this.value="";
	     this.style.border="";
	      this.style.color="";
	      this.className=""; 
	  }
  }

}	
									
//end taxsetup coding
//start get bill coding
var all_voucher_no=1;
function bill()
{
document.getElementById("v_print").onclick=function()
	                                             {
		                                         
												  var name=document.getElementById("one").value;
												  var email=document.getElementById("two").value;
												  var mobile=document.getElementById("three").value;
												  var address=document.getElementById("four").value;
												  var all=document.getElementById("voucher_table");
												  var byer_item=document.getElementsByClassName("item");
												  for(i=0;i<byer_item.length;i++)
												  {
													  store_item[i]=byer_item[i].value;
												  }
												  var byer_price=document.getElementsByClassName("price");
												  for(i=0;i<byer_price.length;i++)
												  {
													  store_price[i]=byer_price[i].value;
												  }
												  var byer_qty=document.getElementsByClassName("qty");
												  for(i=0;i<byer_qty.length;i++)
												  {
													  store_qty[i]=byer_qty[i].value;
												  }
												  var byer_amount=document.getElementsByClassName("amount");
												  for(i=0;i<byer_amount.length;i++)
												  {
													  store_amount[i]=byer_amount[i].value;
												  }
												 
												  var user_se=document.getElementsByClassName("voucher_select");
												  for(i=0;i<user_se.length;i++)
												  {
													  user_opt[i]=user_se[i].value;
												  }
												  var voucher_de={name:name,email:email,mobile:mobile,address:address,store_item:store_item,store_price:store_price,store_qty:store_qty,store_amount:store_amount,subtotal:sum,total:voucher_Al,tax:user_tax,balance:current,paid:paid_store,unit:user_opt,date:user_date};
												  var voucher_data=JSON.stringify(voucher_de);
												  localStorage.setItem(email+"voucher_no_"+all_voucher_no,voucher_data);
												  
												  localStorage.setItem("store_voucher",email);
												  var row=all.getElementsByTagName("TR");
												  for(i=0;i<row.length;i++)
												  {
													  var column=row[i].getElementsByTagName("TD");
													  column[column.length-1].remove();
												  }
													
													document.getElementById("voucher_box").style.width="100%";
													document.getElementById("voucher_box").style.height="100vh";
													document.getElementById("voucher_box").style.top="0";
													document.getElementById("voucher_box").style.left="0";
													sel.style.webkitAppearance="none";
													sel.style.appearance="none";
													sel.style.border="none";
													var name=document.getElementById("one");
													name.style.border="none";
												    var email=document.getElementById("two");
													email.style.border="none";
												    var mobile=document.getElementById("three");
													mobile.style.border="none"
												   var address=document.getElementById("four");
												   address.style.border="none";
													var v_rem=document.getElementsByClassName("remove");
													for(i=0;i<v_rem.length;i++)
													{
														v_rem[i].style.display="none";
													}
													this.style.display="none";
													
													 
													 
													}	
}
bill();
//end get bill coding
var data_seco;
//shut company coding
var shut=document.getElementById("shut_cmp");
shut.onclick=function()
{
	var x=confirm("are you sure want to logout")
	if(x==true)
	{
	window.location="../index.html";
	
	}
}
//voucher search coding
var xy=0
var voucher_data;
var s=document.getElementById("s_voucher");
s.onkeyup=function(event)
{
	                   if(event.keyCode==13)
	                      {
		                    var user="voucher_no_"		
		                   for(i=0;i<localStorage.length;i++)
	                       {
			                 var keys=localStorage.key(i);
			
			
			                if(keys.match(user))
			                    {
				
		                           voucher_data=localStorage.getItem(keys);
			                       var shiv=JSON.parse(voucher_data);
			                     var eml=shiv.email;
			                    if(keys.match(eml)==this.value)
			                     {
				 xy=1;
				 var del=keys;
				 var data_v=keys.split("_");
				 data_seco=data_v[2];

	
	             var x=document.getElementById("voucher_box");
	             x.style.display="block";
	             x.className="animated fadeInDown";
	             x.style.transition="1s";
				        document.getElementById("one").value=shiv.name;
						 document.getElementById("two").value=shiv.email;
						 document.getElementById("three").value=shiv.mobile;
						 document.getElementById("four").value=shiv.address;
						 document.getElementById("voucher_no").innerHTML="voucher-no:"+data_seco;
						 document.getElementById("date").innerHTML="Date:"+shiv.date;
		                  var a=document.getElementById("address_voucher");
	                      var b=document.getElementById("logo_voucher");
                          var data=localStorage.getItem("company_logo");
	                      var img=document.createElement("IMG");
	                      b.appendChild(img);
	                     img.src=data;
	                        img.style.backgroundPosition="cover";
	                         var detail=localStorage.getItem("company");
	                        var user=JSON.parse(detail);
	                         a.innerHTML="Company Name: "+user.cmp_name+"<br>Mailing name: "+user.mailing+"<address>venue: "+user.text+"</address><address>call: "+user.mobile+"</address>";
	                     var item=document.getElementsByClassName("item");
						 var price=document.getElementsByClassName("price");
						  var qty=document.getElementsByClassName("qty");
						  var unit=document.getElementsByClassName("voucher_select");
						 var amount=document.getElementsByClassName("amount");
						  	var item_length=shiv.store_item.length;
							var j;
							for(j=0;j<item_length;j++)
							{
								document.getElementById("add_voucher").click();
								item[j].value=shiv.store_item[j];
								
								price[j].value=shiv.store_price[j];
								price[j].disabled=false;
								qty[j].value=shiv.store_qty[j];
								qty[j].disabled=false;
								unit[j].value=shiv.unit[j];
								
								amount[j].value=shiv.store_amount[j];
								var y=-1;
							}
							document.getElementById("sub").innerHTML=shiv.subtotal;
							document.getElementById("total").innerHTML=shiv.total;
							document.getElementById("give").value=shiv.paid;
							document.getElementById("pay").innerHTML=shiv.balance;
							document.getElementById("p_tax").innerHTML="";
							for(i=0;i<localStorage.length;i++)
							{
								var user_k=localStorage.key(i);
								if(user_k.match("tax"))
								{
									var k=localStorage.getItem(user_k);
									var m=JSON.parse(k);
                                        y=y+1									
																					
									      document.getElementById("p_tax").innerHTML+=m.tax_name+"("+m.percent+")&nbsp&nbsp&nbsp&nbsp"+"<i class='fa fa-rupee'></i>"+shiv.tax[y]+"<br><br>";
									
							
								}
							}					
							
									
			 								
			}
			 
					}
		
		
	}
	if(xy==0)
		{
			alert("voucher not found");
		}
	}
	               document.getElementById("c_sale").onclick=function()
	                                   {
		                                 return false;
	                                   }
									   var y=document.getElementById("close_voucher");
	                                    y.onclick=function()
	                                        {		
	                                          
		                                        x.className="animated fadeOutUp";
		                                       x.style.transition="1s";
											     s.value="";
												 setTimeout(function(){window.location=location.href;},1000);
	                                        }
		//start editing coding
	document.getElementById("cl").style.display="block";
	document.getElementById("delete_voucher").onclick=function()
	{
		var x=confirm("do you sure want to delete this user");
		if(x==true)
		{
		localStorage.removeItem(del);
		var x=document.getElementById("voucher_box");
	     x.style.display="none";
		}
	}
function bill()
{
document.getElementById("v_print").onclick=function()
	                                             {
		                                         
												  var name=document.getElementById("one").value;
												  var email=document.getElementById("two").value;
												  var mobile=document.getElementById("three").value;
												  var address=document.getElementById("four").value;
												  var all=document.getElementById("voucher_table");
												  var byer_item=document.getElementsByClassName("item");
												  for(i=0;i<byer_item.length;i++)
												  {
													  store_item[i]=byer_item[i].value;
												  }
												  var byer_price=document.getElementsByClassName("price");
												  for(i=0;i<byer_price.length;i++)
												  {
													  store_price[i]=byer_price[i].value;
												  }
												  var byer_qty=document.getElementsByClassName("qty");
												  for(i=0;i<byer_qty.length;i++)
												  {
													  store_qty[i]=byer_qty[i].value;
												  }
												  var byer_amount=document.getElementsByClassName("amount");
												  for(i=0;i<byer_amount.length;i++)
												  {
													  store_amount[i]=byer_amount[i].value;
												  }
												 
												  var user_se=document.getElementsByClassName("voucher_select");
												  for(i=0;i<user_se.length;i++)
												  {
													  user_opt[i]=user_se[i].value;
												  }
												  var voucher_de={name:name,email:email,mobile:mobile,address:address,store_item:store_item,store_price:store_price,store_qty:store_qty,store_amount:store_amount,subtotal:sum,total:voucher_Al,tax:user_tax,balance:current,paid:paid_store,unit:user_opt,date:user_date};
												  var voucher_datas=JSON.stringify(voucher_de);
												 
												  
												  localStorage.setItem(email+"voucher_no_"+data_seco,voucher_datas);									  
												  
												  localStorage.setItem("store_voucher",email);
												  var row=all.getElementsByTagName("TR");
												  for(i=0;i<row.length;i++)
												  {
													  var column=row[i].getElementsByTagName("TD");
													  column[column.length-1].remove();
												  }
													
													document.getElementById("voucher_box").style.width="100%";
													document.getElementById("voucher_box").style.height="100vh";
													document.getElementById("voucher_box").style.top="0";
													document.getElementById("voucher_box").style.left="0";
													sel.style.webkitAppearance="none";
													sel.style.appearance="none";
													sel.style.border="none";
													var name=document.getElementById("one");
													name.style.border="none";
												    var email=document.getElementById("two");
													email.style.border="none";
												    var mobile=document.getElementById("three");
													mobile.style.border="none"
												   var address=document.getElementById("four");
												   address.style.border="none";
													var v_rem=document.getElementsByClassName("remove");
													for(i=0;i<v_rem.length;i++)
													{
														v_rem[i].style.display="none";
													}
													this.style.display="none";
													
													 
													 
													}	
}
bill();
        //end editing coding		
											
											
}						  
//manage voucher display coding
for(i=0;i<localStorage.length;i++)
{
	var voucher_d=localStorage.key(i);
	if(voucher_d.indexOf("voucher_no")!=-1)
	{
      document.getElementById("manage_box").style.display="block";
	}
	
}
