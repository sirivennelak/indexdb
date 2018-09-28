var name;
var rollno;
var emailid;
var store;

function getdetails() {
name=document.getElementById('name').value;
rollno=document.getElementById('rollno').value;
emailid=document.getElementById('emailid').value;
console.log(name+"   "+rollno+"   "+emailid);

if(!window.indexedDB){
  console.log("indexedDB not working.....!");
}
var request= window.indexedDB.open("svitDB",1);
request.onerror=e=>{
  console.log(e);
}
request.onupgradeneeded=e=>{
var dbname=e.target.result;
dbname.createObjectStore("cse",{keyPath:"name"});

  console.log("upgraded..!");

}
request.onsuccess=e=>{
var dbname=e.target.result;
store=dbname.transaction("cse","readwrite").objectStore("cse");
store.put(
  {
    "name":name,
    "roll":rollno,
    "email":emailid
  }
  );
  console.log("success....!");
}


}
