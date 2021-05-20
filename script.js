

addworkexp=()=>
{
	newnode=document.createElement("textarea");
	newnode.classList.add("form-control");
	newnode.classList.add("mt-2");
	newnode.classList.add("wexpp");
	newnode.setAttribute("rows","2");
	newnode.setAttribute("placeholder","Enter more Work Experience");
	
	//console.log(newnode);
	
	let divloc=document.getElementById("we");
	let loca=document.getElementById("wexpaddbtn");
	loca.insertAdjacentElement("beforebegin",newnode);

	
	
	
}
	
addstudy=()=>
{
	newnode=document.createElement("textarea");
	newnode.classList.add("form-control");
	newnode.classList.add("mt-2");
	newnode.classList.add("aq");
	newnode.setAttribute("rows","2");
	newnode.setAttribute("placeholder","Enter more Qualification");
	
	//console.log(newnode);
	
	let divloc=document.getElementById("st");
	let loca1=document.getElementById("studyaddbtn");
loca1.insertAdjacentElement("beforebegin",newnode);
}

function generatecv()
{
name1=document.getElementById("name").value;
document.getElementById("namet").innerHTML=name1;
document.getElementById("namet2").innerHTML=name1;


cell=document.getElementById("call").value;
document.getElementById("contactt").innerHTML=cell;

address=document.getElementById("add").value;
document.getElementById("addt").innerHTML=address;

facebook=document.getElementById("fb").value;
document.getElementById("fbt").innerHTML=facebook;

github=document.getElementById("git").value;
document.getElementById("gitt").innerHTML=github;


linkedin=document.getElementById("int").value;
document.getElementById("int").innerHTML=linkedin;

objective=document.getElementById("obj").value;
document.getElementById("objt").innerHTML=objective;


// working for dynamic workexperence

 let workexp=document.getElementsByClassName("wexpp");

let str="";

for(let e of workexp)
   {
   	str =str + "<li>" + e.value + "</li>" ;
   }

document.getElementById("wexpt").innerHTML=str;


// working for academic qualification

let acqual=document.getElementsByClassName("aq");

let str1="";

for(let a of acqual)
   {
   	str1 =str1 + "<li>" + a.value + "</li>" ;
   }

document.getElementById("studyt").innerHTML=str1;


// working for profile pic

 let profile=document.getElementById("proimg").files[0];
console.log(profile);
let reader = new FileReader();
reader.readAsDataURL(profile);
console.log(reader.result);
// set img in cv template

reader.onloadend = function ()
{

	document.getElementById("cvpro").src=reader.result;

}



document.getElementById("cv_form").style.display="none";
document.getElementById("cv_template").style.display="block";


}

// print cv function

function PrintCv()
{
window.print();

}
