   let cb=document.getElementById("checkbox");
   let body=document.getElementsByTagName("body")[0];
body.style.backgroundColor="black"
   cb.addEventListener("change",()=>{
     body.style.backgroundColor=cb.checked==true ? "lightpink":"black";
})