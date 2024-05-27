/* basic javascript */
var username="gayathri";
console.log(username)

/*Es6*/
let password="gayu@123";
console.log(password)
const element="javascript is one of the famous language ";
console.log(element)
 
/*basic*/
var firstname="gayathri";
var lastname="suresh";
console.log(firstname+" "+lastname)
/*Es6*/
var firstname1="gayathri";
var lastname1="suresh";
console.log(`hello ${firstname}  ${lastname}`)
/*basic*/
var x=9,y=10,sum;
function sum()
{
sum=x+y;
console.log("The sum value is"+sum)
}
sum();
var z;
var a=parseInt(prompt("enter the num1"))
var b=parseInt(prompt("enter the num2"))
function sumEx(a,b)
{
z=a+b;
console.log("Runtime sum value is"+z)
}
sumEx(a,b);
/*ES6*/
function product(p,q=5)
{

let pro=p*q;
console.log("The product result is"+pro);
}
product(2);

/*basic */
function division(r,s)
{
    let c=r/s;
    return c;

}
console.log("The division result is=:"+division(10,5));
/* Es6 arrow function*/
let prod=(c,d)=>c*d;//product=(5,10)=>50
let result=prod(5,10);//result=product(5,10)
console.log("The Arrow function result is=:"+result)//50

