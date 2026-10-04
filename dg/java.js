/*function great(name){
    console.log("hellow",(name));


}
great("MUBARAK");
const add= function(a,b){
    return a*b;
}
console.log(add(4,5));
const multiply=(a,b)=> a*b;
console.log(multiply(9,5));
const variable=document.getElementById("title");
variable.textContent="updated content";
variable.style.color="green"
const child=document.getElementById("child");
console.log(child.parentNode.id);
const list=document.getElementById("list");
console.log(list.childNodes.length);*/
const box=document.getElementById("red");
box.classList.add("green");
box.classList.remove("black");
console.log(box.className);
const list=document.getElementById("list");
const varia=document.createElement("li");
varia.textContent=item2;
list.appendChild(varia);
const button=document.getElementById("btn");
button.addEventListener('click',() =>(alert("Button clicked!")));



