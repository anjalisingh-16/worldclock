
function a(){
//alert("hi");
var d=new Date();
t1.innerHTML=d.toLocaleString('en-US',{
timeZone:"Asia/Kolkata"
}).split(", ")[1];
setInterval(()=>{a()},1000);
}




function b(){
//alert("hi");
var d=new Date();
t2.innerHTML=d.toLocaleString('en-US',{
timeZone:"America/Anchorage"
}).split(", ")[1];
setInterval(()=>{b()},1000);
}




function c(){
var d=new Date();
t3.innerHTML=d.toLocaleString('en-US',{
timeZone:"Antarctica/Davis",
}).split(", ")[1];
setInterval(()=>{c()},1000);
}


