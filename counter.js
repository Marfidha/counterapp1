
let res=0
function minus() {
  
  res = --res;
  document.getElementById("calculation").innerHTML = res;
}
function clearvalue(){
  res=0
  document.getElementById("calculation").innerHTML=res
}
function add(){
   res = ++res;
  document.getElementById("calculation").innerHTML = res;
}