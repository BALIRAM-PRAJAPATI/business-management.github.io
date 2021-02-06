
// create edit search coding
function demo()
{
var manage=document.getElementById("manage_box");
var all=manage.getElementsByTagName("BUTTON");
var hide=document.getElementsByClassName("show");

var i,j;
for(i=0;i<all.length;i++)
{
	
	all[i].onclick=function()
	{
		for(i=0;i<all.length;i++)
			
		{
			all[i].className="";
			
		}
		
		for(j=0;j<hide.length;j++)
			
		{
			hide[j].style.display="none";
			document.getElementById("search_table").style.display="none";
			document.getElementById("edit_table").style.display="none";
			
		}
		var st=this.innerHTML;
		var find=document.getElementById(st)	
		find.style.display="block";
		this.className="active"
		var input=find.getElementsByTagName("INPUT");
		input[0].focus();
		input[0].value="";
		
		
	}
}
document.getElementById("a").click();	
}
demo();
//start select group coding
function update_cr()
{
var slt=document.getElementById("slt");
slt.onchange=function()
{
	var mode=document.getElementById("le_mode");
	var ac=this.value;
	switch(ac)
	{
		case "sales account" :mode.value="  Cr";
		break;
		
		case "capital account" :mode.value="  Cr";
		break;
		case "sundry creditors" :mode.value="  Cr";
		break;
		case "sundry debitors" :mode.value="  Dr";
		break;
		case "purchase account" :mode.value="  Dr";
		break;
		default :mode.value="";
		
	}
		
		
}
}
update_cr();
//store ledger details
var ledger_group=document.getElementById("slt");
var ledger_name=document.getElementById("le_name");

var le_balance=document.getElementById("le_number");
var le_mode=document.getElementById("le_mode");
var mailing_name=document.getElementById("mailing_name");
var address=document.getElementById("adrs");
var frm=document.getElementById("Create");
frm.onsubmit=function()
{
	if(ledger_group.value=="select group")
	{
		ledger_group.style.borderColor="red";
		ledger_group.className="animated infinite pulse";
		
		ledger_group.onclick=function()
		{
		ledger_group.style.borderColor="";
		ledger_group.className="";
		}
		return false;
	}
	else
	{
		var ledger_data={ledger:ledger_name.value,group:ledger_group.value,balance:le_balance.value,mode:le_mode.value,mailing_name:mailing_name.value,address:address.value};
		var ledger_store=JSON.stringify(ledger_data);
		localStorage.setItem("ledger_no_"+document.getElementById("le_btn").innerHTML,ledger_store);
	}
}
//update span
var x,keys,y=0;

for(i=0;i<localStorage.length;i++)
{
	keys=localStorage.key(i);
	if(keys.match("ledger_no"))
	{
		
		y++
	}
	
}



//update btn

for(i=0;i<localStorage.length;i++)
{
	keys=localStorage.key(i);
	if(keys.match("ledger_no"))
	{
		
		var data=keys.split("_");
		x=Number(data[2]);
		
		if(x==y)
		
		{
			document.getElementById("le_btn").innerHTML=x+1;
		}
		
	}
}

// total calculation
function total_cal()
{
  var i,credit = 0,debit = 0;
  for(i=0;i<localStorage.length;i++)
  {
    var all_keys = localStorage.key(i);
    if(all_keys.match("ledger_no"))
    {
      var ledger_data = localStorage.getItem(all_keys);
      var ledger = JSON.parse(ledger_data);
      if(ledger.mode.match(" Cr") != null)
      {
        credit += Number(ledger.balance);
        document.getElementById("credit").innerHTML = credit+" :Cr";
      }

      else{
        debit += Number(ledger.balance);
        document.getElementById("debit").innerHTML = debit+": Dr";
      }

      if(credit>debit)
      {
       document.getElementById("dif").innerHTML = credit-debit+" Cr";
      }

      else{
        document.getElementById("dif").innerHTML = debit-credit+" Cr";
      }
    }
  }
}

total_cal();
//start edit ledger coding
var lem;
function edit_ledger()
{
var edit_form=document.getElementById("Edit");	
edit_form.onsubmit=function()
{
	return false;
}
var edit=document.getElementById("edit_no");
edit.onkeyup=function(event)
{
	if(event.keyCode==13)
	{
		
		
		
		if(this.value==null)
		{
			return false;
		}
		else
		{
			
			if(localStorage.getItem("ledger_no_"+this.value)!=null)
			{
				document.getElementById("no").innerHTML="";
				var detail=localStorage.getItem("ledger_no_"+this.value);
				var ext=JSON.parse(detail);
				if(ext.delete!="active")
				{
					document.getElementById("edit_table").style.display="block";
				document.getElementById("ledger_no").innerHTML=this.value;
				document.getElementById("ledger_name").innerHTML="<span id='new_ledger' style='border:1px dashed blue;' contenteditable='true'>"+ext.ledger+"</span>";
				
                document.getElementById("slt_edit").style.display="block";
				document.getElementById("slt_edit").value=ext.group;
				document.getElementById("ledger_balance").innerHTML="<span id='new_balance' style='border:1px dashed blue;' contenteditable='true'>"+ext.balance+"</span>";
				lem=document.getElementById("ledger_mode");
				
				document.getElementById("ledger_mode").innerHTML=ext.mode;
				document.getElementById("mail").innerHTML=ext.mailing_name==""?"": "<span id='new_mail' style='border:1px dashed blue;' contenteditable='true'>"+ext.mailing_name+"</span>";							
				document.getElementById("venue").innerHTML=ext.address== ""?"":"<span id='new_address' style='border:1px dashed blue;' contenteditable='true'>"+ext.address+"</span>";	
			     document.getElementById("delete").style.display="block";
				  
                  
                       slt_edit.onchange=function()
                             {
	                            
	                             var ac=this.value;
	                               switch(ac)
	                                   {
		                                 case "sales account" :lem.innerHTML=" Cr";
		                                    break;
		
		                                    case "capital account" :lem.innerHTML=" Cr";
		                                        break;
		                                      case "sundry creditors" :lem.innerHTML=" Cr";
		                                       break;
		                                    case "sundry debitors" :lem.innerHTML=" Dr";
		                                         break;
		                                       case "purchase account" :lem.innerHTML=" Dr"
		                                        break;
		                                        default :mode.value="";
		
	                                    }
		
		
                             }
							//sava ledger coding
							var save_btn=document.getElementById("ledger_btn");
							 save_btn.style.display="block";
							 save_btn.onclick=function()
							 {
								var h=confirm("do you sure want to edit");
								if(h==true)
								{								
							 var all_ledger={ledger:document.getElementById("new_ledger").innerHTML,                               
							 group:document.getElementById("slt_edit").value,
							 balance:document.getElementById("new_balance").innerHTML,
							 mode:lem.innerHTML,
							 mailing_name:document.getElementById("new_mail")==null?"":document.getElementById("new_mail").innerHTML,
							 address:document.getElementById("new_address")==null?"":document.getElementById("new_address").innerHTML								 
							 };
							 var all_data=JSON.stringify(all_ledger);
							 localStorage.setItem("ledger_no_"+edit.value,all_data);
							
							 setTimeout(function(){window.location=location.href;},3000);
								}
							 }
							 //end ledger coding
							
							 //start delete coding
							 document.getElementById("delete").onclick=function()
							 {
								 
								 var all_ledger={ledger:document.getElementById("new_ledger").innerHTML,                               
							 group:document.getElementById("slt_edit").value,
							 balance:document.getElementById("new_balance").innerHTML,
							 mode:lem.innerHTML,
							 mailing_name:document.getElementById("new_mail")==null?"":document.getElementById("new_mail").innerHTML,
							 address:document.getElementById("new_address")==null?"":document.getElementById("new_address").innerHTML,	
                             delete:"active"							 
							 };
							 var all_data=JSON.stringify(all_ledger);
							 
							 localStorage.setItem("ledger_no_"+edit.value,all_data);
							 window.location=location.href;
							 }
							 //end delete coding
				}
				else
				{
					document.getElementById("restore").innerHTML="whoops data some times ago deleted <button style='border:none;color:white;background:linear-gradient(red,blue);' id='rest'>restore</button>";
					document.getElementById("restore").onclick=function()
					{
						var t=confirm("do you sure restore data");
						if(t==true)
						{
							var all_re=localStorage.getItem("ledger_no_"+edit.value);
							localStorage.setItem("ledger_no_"+edit.value,all_re.replace("active","deactive"));
							window.location=location.href;
						}
					}
				}
							 
			}
			else
			{
				document.getElementById("edit_table").style.display="none";
				document.getElementById("ledger_no").innerHTML="";
			  document.getElementById("ledger_name").innerHTML=""
				
                document.getElementById("slt_edit").style.display="none";
				document.getElementById("slt_edit").value="";
				document.getElementById("ledger_balance").innerHTML="";
				var lem=document.getElementById("ledger_mode");
				
				document.getElementById("ledger_mode").innerHTML="";
				document.getElementById("mail").innerHTML="";							
				document.getElementById("venue").innerHTML="";
			   document.getElementById("no").innerHTML="user not found";
			   document.getElementById("ledger_btn").style.display="none";
			   document.getElementById("delete").style.display="none";
			}
			
		}
		this.onchange=function()
		{
			save_btn.onclick=function()
			{
				return false;
			}
			window.location=location.href;
		}
	}

}
	
}
edit_ledger();
//search ledger
function search_ledger()
{
	
	document.getElementById("Search").onsubmit=function()
		{
			return false;
		}
	var search=document.getElementById("re");
	search.onkeyup=function()
	{
	  if(event.keyCode==13)
	 {
		
		
		
		if(this.value==null)
		{
			return false;
		}
		else
		{
			
			if(localStorage.getItem("ledger_no_"+this.value)!=null)
			{
				document.getElementById("no").innerHTML="";
				var detail=localStorage.getItem("ledger_no_"+this.value);
				var ext=JSON.parse(detail);
				if(ext.delete!=="active")
				{
					document.getElementById("search_table").style.display="block";
				document.getElementById("ledger_nos").innerHTML=this.value;
				document.getElementById("ledger_names").innerHTML=ext.ledger;
				document.getElementById("ledger_groups").innerHTML=ext.group;	
               
				document.getElementById("ledger_balances").innerHTML=ext.balance;
				lem=document.getElementById("ledger_modes");
				
				document.getElementById("ledger_modes").innerHTML=ext.mode;
				document.getElementById("mails").innerHTML=ext.mailing_name;							
				document.getElementById("venues").innerHTML=ext.address;	
				document.getElementById("nos").innerHTML="";
			}
			else
			{
				document.getElementById("search_table").style.display="none";
			document.getElementById("ledger_nos").innerHTML="";
			  document.getElementById("ledger_names").innerHTML=""
				document.getElementById("ledger_groups").innerHTML=""	
               
				document.getElementById("ledger_balances").innerHTML="";
				
				
				document.getElementById("ledger_modes").innerHTML="";
				document.getElementById("mails").innerHTML="";							
				document.getElementById("venues").innerHTML="";
			   document.getElementById("nos").innerHTML="user not found";
			   document.getElementById("ledger_btn").style.display="none";
			}
		}
			else
			{
				document.getElementById("search_table").style.display="none";
				document.getElementById("ledger_nos").innerHTML="";
			  document.getElementById("ledger_names").innerHTML=""
				document.getElementById("ledger_groups").innerHTML=""	
                
				document.getElementById("ledger_balances").innerHTML="";
				
				
				document.getElementById("ledger_modes").innerHTML="";
				document.getElementById("mails").innerHTML="";							
				document.getElementById("venues").innerHTML="";
			   document.getElementById("nos").innerHTML="user not found";
			   document.getElementById("ledger_btn").style.display="none";
			}
		}
	}
    }
}
search_ledger();


	
