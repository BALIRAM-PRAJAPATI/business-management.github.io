
//exit coding
document.getElementById("ex").onclick=function()
{
	history.back();
}
//animation coding
var ap=document.getElementById("app_box");
var ap_an=ap.getElementsByTagName("LI");
var i;

for(i=0;i<ap_an.length;i++)
{
	ap_an[i].onmouseover=function()
	{
		this.style.transform="rotate(360deg)";
		this.style.transition="1s";
	}
	ap_an[i].onmouseout=function()
	{
		this.style.transform="rotate(0deg)";
		this.style.transition="1s";
	}
}
//ledger page coding
document.getElementById("le").onclick=function()
{
	window.location="ledger.html";
}

//default ledger
var cash=localStorage.getItem("cash_ledger");
var profit=localStorage.getItem("profit_loss_ledger");
if(cash==null&&profit==null)
{
	var x={ledger_name:"cash",ledger_account:"cash in hand",balance:"",mode:""};
	var cash_store=JSON.stringify(x);
	localStorage.setItem("cash_ledger",cash_store);
	var y={ledger_name:"profit&loss A/c",ledger_account:"profit&loss A/c",balance:"",mode:""};
	var profit_store=JSON.stringify(y);
	localStorage.setItem("profit_loss_ledger",profit_store);
}
//start unit of measure coding
var unit=document.getElementById("me")
unit.onclick=function()
{
	
var frame=document.getElementById("frame");
frame.style.display="block";
frame.src="../b_manage.html#measure";
frame.onload=function()
{
	var main=this.contentWindow.document.getElementById("main");
	main.style.width="100%";
	main.style.height="50vh";
	main.style.position="absolute";
	main.style.right="0";
	main.style.top="0";
	main.style.border="none";
	
	var voucher=this.contentWindow.document.getElementById("voucher");
	var tax=this.contentWindow.document.getElementById("tax");
	var shut=this.contentWindow.document.getElementById("shut")
	voucher.style.display="none";
	tax.style.display="none";
	shut.style.display="none";
	
	
	
var target=this.contentWindow.document.getElementById("measure");


target.style.position = "absolute";
		target.style.top = "0";	
		target.style.left = "0";
		
		
		target.click();
		var major=this.contentWindow.document.getElementById("measure_div");
		var manage=this.contentWindow.document.getElementById("manage_box");
		manage.style.display="none";
		major.style.height="270px";
		var close=this.contentWindow.document.getElementById("balance_close");
close.style.display="none";
var close=this.contentWindow.document.getElementById("close_btn");
close.className="fa fa-close";
	close.onclick=function()
	{
		target.style.display="none";
	setTimeout(function(){window.location=location.href;},500)
	}
var edit_unit=this.contentWindow.document.getElementById("edit_m");
var unit_select=this.contentWindow.document.getElementById("unit_select");
var sd=this.contentWindow.document.getElementById("update");
	
var trash=this.contentWindow.document.getElementById("trash");

unit_select.style.display="block";
//appear unit coding
var i;
for(i=0;i<localStorage.length;i++)
{
	var keys=localStorage.key(i);
	if(keys.match("measure"))
	{
		var data=localStorage.getItem(keys);
		var ext=JSON.parse(data);
		var opt=document.createElement("OPTION");
		unit_select.appendChild(opt);
		opt.appendChild(document.createTextNode(ext.symbol));
	}
}
// end appear unit coding	
//start delete coding
unit_select.onchange=function()
{
	trash.style.display="block";
	edit_unit.style.display="block";
	trash.onclick=function()
	{
		var z=confirm("do you sure ?");
		if(z==true)
		{
			localStorage.removeItem("measure "+unit_select.value);
			window.location=location.href;
		}
	}
}
//end delete coding
//start editing coding
edit_unit.onclick=function()
{
	var data_e=localStorage.getItem("measure "+unit_select.value);
	var ext_e=JSON.parse(data_e);
	var input=frame.contentWindow.document.getElementsByTagName("INPUT");
	input[0].value=ext_e.symbol;
	var symbol=input[0].value;
	input[1].value=ext_e.formal_name;
	input[2].type="button";
	input[2].onclick=function()
	{
	if(symbol==input[0].value)
	{
		var find={symbol:input[0].value,formal_name:input[1].value};
		var store=JSON.stringify(find);
		localStorage.setItem("measure "+input[0].value,store);
		sd.style.display="block";
		setTimeout(function(){sd.innerHTML="";},2000);
		setTimeout(function(){window.location=location.href;},2000);
		
	}
	else
	{
		localStorage.removeItem("measure "+unit_select.value);
			var find={symbol:input[0].value,formal_name:input[1].value};
		var store=JSON.stringify(find);
		localStorage.setItem("measure "+input[0].value,store);
			sd.style.display="block";
		
		setTimeout(function(){sd.innerHTML="";},2000);
		setTimeout(function(){window.location=location.href;},2000);
		
	}
	}
}
//end editing coding
}
}
var v=document.getElementById("vo");
v.onclick=function()
{
	window.location="voucher.html";
}