//global variable

a=10;
console.log(a);

//function scope variale

function add(){
	var a=20;
	var b=30;
    console.log(a,b,a+b);
}
console.log(a); //undefined value

//block scope variable
// let
function add1(){
	var a=20;
	if(a===20){
		let b=30;
		console.log(a+b);
	}
	console.log(b); //undefined value
	console.log(a);
}

//constant variable  u can not change the value of this variable

const pie=3.14;
console.log(pie);
pie=25;
console.log(pie);