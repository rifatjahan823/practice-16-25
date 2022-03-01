//------------ practice 16 all-------
            // 1st video

            let number = -7;
            let number2 = 5;
            let sum = Math.abs(number)+number2;
            document.write(sum)           
            document.write("<br/>")
           
            let floatNumber = 15.5555;
            document.write(Math.ceil(floatNumber))//up number;
           
            document.write("<br/>")
           
            let floatNumber2 = 17.9999;
            document.write(Math.floor(floatNumber2))//down or same number
           
            document.write("<br/>")
           
            let floatNumber3 = 19.89;
            document.write(Math.round(floatNumber3));//round input nearest number
           
            document.write("<br/>")
           
            let floatNumber4 = 21.5
            document.write(Math.random()*floatNumber4)// it will give different number
           
            document.write("<br/>")
           
            for(a=0;a>15;a++){
               let randomNumber = Math.random()*5;
               let roundNumber = Math.round(randomNumber);
               document.write(roundNumber); 
            }
           
           // ----practice 16  2nd video-----
           let b = 5;
           let c = 7;
           // let d = b;
           //  b=c;
           //  c=d;
           //  document.write(b,c);
           [b,c]=[c,b]
           document.write(b,c);
           
           document.write("<br/>")
           // ----practice 16 third video
           let mannager = 15000;
           let gm = 15000;
           let ceo = 15000;
           
           // compare who is the big
           if(mannager>gm && mannager>ceo){
               document.write("mannager you are big");
           }
           else if(gm>mannager && gm>ceo){
               document.write("gm you are big")
           }
           else if(mannager==gm==ceo){
               document.write("you are all same")
           }
           else{
               document.write("ceo you are big")
           }
           document.write("<br/>")
           // find largest number
           function largestNumber(largestNumber1,largestNumber2){
               var largeNumber = Math.max(largestNumber1,largestNumber2);
               return largeNumber;
           }
           var findLargeNumber = largestNumber(5,15);
           document.write(findLargeNumber);
           document.write("<br/>");
           
           // arry sum 
           function sumAdd(addnumber){
               let sum1 = 0;
               for(const addnumbers of addnumber){
                   sum1 = sum1+addnumbers;
               }
               return sum1;
           }
           var sumNumber = sumAdd([3,5,5]);
           document.write(sumNumber);
           document.write("<br/>");
           // arry sum second rules
           
           function secondSum(secondAddNumber){
               let sum2 = 0;
              for(second=0;second<secondAddNumber.length;second++){
                   var secondSums = secondAddNumber[second];
                   sum2 = sum2+secondSums;
               }
               return sum2;
           }
           var secondSumNumber = secondSum([3,5,5]);
           document.write(secondSumNumber);
           document.write("<br/>");
           
           // find largest number with function
           function funcLargest(funcNumbers){
               let funcLarge = funcNumbers[0];
               for(var funca=0;funca<funcNumbers.length;funca++){
                   let funcNumber = funcNumbers[funca];
                   if(funcNumber>funcLarge){
                       funcLarge=funcNumber
                   }
               }
               return funcLarge;
           }
           var sumFunc = funcLargest([90,80,45,100,5,6]);
           document.write(sumFunc);
           document.write("<br/>");
           // find smallest Number
           function smallest(smallNumber){
               let newSmall = smallNumber[0];
               for(let smalla = 0;smalla<smallNumber.length;smalla++){
                   let smallNumbers = smallNumber[smalla];
                   if(smallNumbers<newSmall){
                       newSmall=smallNumbers
                   }
               }
               return newSmall;
           }
           let sumSmall = smallest([90,5,100,30]);
           document.write(sumSmall);
           document.write("<br/>");
           
           //----practice 16 last 2 video-------
           function fubo(fuboNum){
               fubo1 = [0,1];
               for(var fuboa = 2;fuboa<=fuboNum;fuboa++){
                   fubo1[fuboa]=fubo1[fuboa-1] + fubo1[fuboa-2]
               }
               return fubo1;
           }
           var sumFubo = fubo(8);
           document.write(sumFubo);
           document.write("<br/>");
//------------------------------------------------
//-----------------practice 17-------------------- 
 //find foo  bar
           for(var foA=0;foA<=50;foA++){
               if(foA%3==0 && foA%5==0){
                   document.write("foo bar");
               }
               else if(foA%3==0){
                   document.write("foo");
               }
               else if(foA%5==0){
                   document.write("bar")
               }
               else{
                   document.write(foA)
               }
           }
           document.write("<br/>");
//again find smallest number
function secondSmallNumber(secondNumber){
    let uniqueSecond = secondNumber[0];
    for(const secondAddNumbers of secondNumber){
        if(secondAddNumbers<uniqueSecond){
            uniqueSecond=secondAddNumbers;
        }
    }
    return uniqueSecond;
}
var secondAddNumbers = secondSmallNumber([5,3,90,1,60]);
document.write(secondAddNumbers);
document.write("<br/>");

//find single number from dobule number
function singleNumber(dobuleNumber){
    let uniqueSingle = [];
    for(const dobuleNumbers of dobuleNumber){
        if(uniqueSingle.indexOf(dobuleNumbers)==-1){
            uniqueSingle.push(dobuleNumbers);
        }
    }
    return uniqueSingle;
}
var singleNumbers = singleNumber([5,5,6,6,7,7,9,9,11,11,12,13]);
document.write(singleNumbers)
document.write("<br/>");

//find big number
function findBigNumber(bigNumber){
    let uniqueBig = [];
    for(const bigNumbers of bigNumber){
        if(bigNumbers>=80){
            item = bigNumbers;
            uniqueBig.push(item)
        }
       
    }
    return uniqueBig
}

var findBigNumbers = findBigNumber([90,80,70,100,120,50]);
document.write(findBigNumbers);
document.write("<br/>");

//find big number second rules
let bigNumber2 = [70,80,90,100,120,50,85];
let uniqueBig2 = [];
for(let biga = 0;biga<bigNumber2.length;biga++){
    bigNumbers2 = bigNumber2[biga];
    if(bigNumbers2>=80){
        item2 = bigNumbers2;
        document.write(item2);
        
    }
    uniqueBig2.push(bigNumbers2>=80)
}

document.write("<br/>");

//---------------------------------------------
//------------------practice-18--------------------
//varyable string,number boolean
var name = "likha";
var numberr = 99;
var boolean = true;
document.write("<br/>");

//let and const variable
let change = 5;//let changeable
change +=7;
document.write(change)
const unchange = 3;
document.write("<br/>");

//variable +-*/%---------
let addNumber = 15;
let addNumber2 = 7;

let sumAd = addNumber+addNumber2;
document.write(sumAd);
document.write("<br/>");

let subtraction = addNumber-addNumber2;
document.write (subtraction);
document.write("<br/>");

let multiplication  = addNumber*addNumber2;
document.write (multiplication);
document.write("<br/>");

let divition = addNumber2/addNumber;
document.write(divition);
document.write("<br/>");

let remainder = addNumber2%addNumber;
document.write(remainder);
document.write("<br/>");

//compare difference btween two variable

// var a = 5;
// var b = 7;

// if(a==b){
//     console.log();
// }
// else if(a!=b){
//     document.write();
// }
// else if(a>b){
//     document.write();
// }
// else if(a<b){
//     document.write();   
// }
// else if(a>=b){
//     document.write();   
// }
// else if(a<=b){
//     document.write();   
// }
// document.write("<br/>");
// & || use 

var house = true;
var money = 5000000;
var car = true;

if(car==true && money>7000000){
   document.write('yes,you are win')
}
else if((car==true && money>7000000) || (house == true)){
    document.write('you are win cause you have house ')
}
else{
    document.write('you are failure')
}
document.write("<br/>");

// use if else
let color = 'white';
if(color=='red'){
    document.write("its a red color")
}
else if(color=='white'){
    document.write("its a white color")
}
else if(color=='blue'){
    document.write("its a color blue")
}
else{
    document.write("there are no match color");
}
document.write("<br/>");


// use while loop and get odd number 7 to 19
let whilea = 5;
while(whilea<=18){
    whilea++
    whilea +=1
    document.write(whilea);
}
document.write("<br/>");

let whileb = 5;
while(whileb<=18){
    whileb++
   if(whileb%2!=0){
    document.write(whileb);
   }
}
document.write("<br/>");

// use array ----
var arr = ['first','second','third','four','five','six','seven'];
document.write(arr);
document.write("<br/>");

document.write("array length:"+arr.length)//array length ber kora
document.write("<br/>");

arr[3]="change name four"//array name change
document.write(arr);
document.write("<br/>");

arr.push("new last name")//last array add new name
document.write(arr);
document.write("<br/>");

arr.unshift("new first name")//first array add new name
document.write(arr);
document.write("<br/>");

arr.pop("remove last name")//last array remove name
document.write(arr);
document.write("<br/>");

arr.shift("remove first name")//first array remove name
document.write(arr);
document.write("<br/>");

for(var i = 0; i<arr.length;i++){
    var arry = arr[i];
    document.write(arry)
}
document.write("<br/>");

// get multiplication 3numbers
function multiNumber(multi1,multi2,multi3){
    let sumMulti = multi1*multi2*multi3;
    return sumMulti;
}
let multiNumbers = multiNumber(5,7,9);
document.write(multiNumbers);
document.write("<br/>");

//use of object
 var obj=
{ name:"car",color:"red",price:1500000}
obj['color']='black';//object name update
console.log(obj);
document.write("<br/>");

//feet To Inch  convert;
function feetToInch(feet){
   let sumInch = feet*12;
   return sumInch;
}
let feetToInchs = feetToInch(5);
document.write(feetToInchs);
document.write("<br/>");

// centimeterToMeter  convert
function centimeterToMeter(centimeter){
    var sumCentimeter = centimeter*0.01;
    return sumCentimeter;
}
let centimeterToMeters = centimeterToMeter(12);
document.write(centimeterToMeters);
document.write("<br/>");

//paperRequirements function 
function paperRequirements(book1,book2,book3){
    var book1 = book1*100;
    var book2 = book2*200;
    var book3 = book3*300;
    var totalBook = book1+book2+book3;
    return totalBook;
}
var paperRequirement = paperRequirements(3,2,5);
document.write(paperRequirement)
document.write("<br/>");

//get big string
function bestFriendName(friendsName){
    var uniqueFriend=friendsName[0];
    for(const friendsNames of friendsName){
        if(friendsNames.length>uniqueFriend.length){
            uniqueFriend=friendsNames;
        }
    }
    return uniqueFriend;
}
let bestFriendNames = bestFriendName(['offi','likha','offi']);
document.write(bestFriendNames)
document.write("<br/>");

// find big numbe 
function bigNumberFunc (findBigNumber){
    var uniqueBigNumber = findBigNumber[0];
    for(const findBigNumbers of findBigNumber){
        if(findBigNumbers>uniqueBigNumber){
            uniqueBigNumber=findBigNumbers;
        }
    }
    return uniqueBigNumber;
}
var bigNumberFuncs = bigNumberFunc ([3,5,7,9,12,5,3]);
document.write(bigNumberFuncs);
document.write("<br/>");

//positive number 
function positiveNagative (pnNumber){
    var uniqeNumber = [];
    for(const pnNumbers of pnNumber){
        if(pnNumbers>=0){
            uniqeNumber.push(pnNumbers)
        }
        else{
            "please give positive number"
        }
    }
    return uniqeNumber;
}
var positiveNagatives = positiveNagative ([1,3,5,7,9,-5,-9,11]);
document.write(positiveNagatives);
document.write("<br/>");


//--------------------------------------------------
//--------------practice video 20 ---------------------
// javascript css style apply id
let cssHeader = document.getElementById("css-header");
cssHeader.style.backgroundColor="LightCoral"
cssHeader.style.padding="10px";
cssHeader.style.textAlignLast="center";

//javascript css style apply class
let cssClass = document.getElementsByClassName("css-class");
for(const cssClasses of cssClass){
    cssClasses.style.textAlignLast="center";
    cssClasses.style.fontSize = "40px"
}

//create element
let li=document.createElement("li")//je dhoroner element create kora hobe tar nam braketer vitor deoya hoy
li.innerText='lorem-5';

//add element from create
let ul = document.getElementById("ul");
ul.appendChild(li)

//querryselector use
var unique = document.querySelectorAll('#unique-cls h3')

for(const uniques of unique ){
    uniques.style.color="black";
    uniques.style.textAlign = "center"
    uniques.style.fontSize="35px";
    uniques.style.fontStyle="italic";
}

//create and add element with css style
const article = document.createElement("article");
article.classList.add("cl")
/*const h3 = document.createElement('h3');
h3.innerText="this is a javascript title"
const p =document.createElement('p');
p.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quam illum at cum sed magnam! Earum itaque, veritatis dolores consequuntur adipisci vero accusantium! Aliquam quas consequatur, voluptas excepturi quidem dolore?"

article.appendChild(h3);
article.appendChild(p);*/
article.innerHTML=`
<h3 id="unique-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quam illum at cum sed magnam! Earum itaque, veritatis dolores consequuntur adipisci vero accusantium! Aliquam quas consequatur, voluptas excepturi quidem dolore?
</p>
`
let addArticle = document.getElementById("add-article");
addArticle.appendChild(article)

// add css style
const blogs = document.getElementsByClassName('cl');
for(const blog of blogs){
    blog.style.backgroundColor='orange';
    blog.style.border = "2px solid black";
    blog.style.margin='5px';
    blog.style.color = "white";
    blog.style.paddingLeft = "25px";
}

// ------------------------------------
// ----- --------practice video 21 --------
// use different type onclick button
function coral(){
    document.body.style.backgroundColor="Coral"
}

let bisque = document.getElementById("bisque");
bisque.onclick=bisquef
function bisquef(){
    document.body.style.backgroundColor="Bisque"
}

let maroon =document.getElementById("maroon");
maroon.addEventListener("click",maroonf);
function maroonf(){
    document.body.style.backgroundColor="Maroon"
}

let sienna = document.getElementById("sienna");
sienna.addEventListener("click",function(){
    document.body.style.backgroundColor="Sienna"
})

document.getElementById("brown").addEventListener("click",function(){
    document.body.style.backgroundColor="Brown" 
})

//second part

function clickingmethod(){
    const click = document.getElementById("clicking-method");
    click.innerText="update button"
}
document.getElementById("new").addEventListener("click",function(){
    const update= document.getElementById("clicking-method");
    update.innerText="Nwe update button is here"
})
document.getElementById("value").addEventListener("click",function(){
    const input = document.getElementById("input2");
    input.value;
    const inputClick = document.getElementById("clicking-method");
    inputClick.innerText=input.value;

    input.value = " "

})
// <!-- third part -->
document.getElementById("btn").addEventListener("click",function(){
   const textComment = document.getElementById("text-comment");
   textComment.value;
   const create = document.createElement("p");
   create.innerText= textComment.value;
   const main = document.getElementById("main");
   main.appendChild(create);
   textComment.value=""
})

// fourth part
document.getElementById("btn2").addEventListener("click",function(){
    const p =document.getElementById("p");
    p.style.display="none";
})
document.getElementById("btn3").addEventListener("click",function(){
    const p =document.getElementById("p");
    p.style.display="block";
})

document.getElementById("delete-btn").addEventListener("click",function(){
    const textP = document.getElementById("text-p");
    textP.style.display="none";
})
document.getElementById("input-text").addEventListener("focus",function(){
    document.body.style.backgroundColor="#F5D380"
})
document.getElementById("input-text").addEventListener("blur",function(){
    document.body.style.backgroundColor="white"
})
document.getElementById("input-text").addEventListener("keyup",function(event){
if(event.target.value=="delete"){
    document.getElementById("delete-btn").removeAttribute("disabled")
}
else{
    document.getElementById("delete-btn").setAttribute("disabled",true)
  }
})
document.getElementById("input-text").addEventListener('change',function(){
    const deleteFiled = document.getElementById("input-text") ;
    console.log(deleteFiled.value)
  })

  
  // fifth part
  document.getElementById("ul-iteam").addEventListener("click",function(){
    console.log('yes,add item')
  })
  document.getElementById("items").addEventListener("click",function(event){
    console.log('yes,add item2')
    event.stopPropagation();
  })
  document.getElementById("section").addEventListener("click",function(){
    console.log('yes,add item3')
  })

   // six part

  // const item = document.getElementsByClassName("item")
// for(const items of item){
//   items.addEventListener("click",function(event){
//     // document.getElementById("delegate").removeChild(items)
//     event.target.parentNode.removeChild(event.target)
//   })
// }
document.getElementById("delegate-btn").addEventListener("click",function(){
    const li = document.createElement("li");
    li.innerText="add new iteam"
    const ul = document.getElementById("delegate")
    ul.appendChild(li)
  })
  
  document.getElementById("delegate").addEventListener("click",function(event) {
    event.target.parentNode.removeChild(event.target)
  })


//   <!-- ---------------------------------- -->
//   <!----- practice video 22-23 -------->
document.getElementById("submit-btn").addEventListener("click",function(){
    const emailInput = document.getElementById("email-input");
    userEmail = emailInput.value;

    const passInput = document.getElementById("password-input");
    userPass = passInput.value; 
    if(userEmail=="tom@gmail.com" & userPass=="offi"){
        window.location.href="bank.html"
    } 
    else{
        alert("worng input")
    }
})


//----------------------------------
// practice video 24 

function sumInput(inputFild,istrue,total,price){
    let input = document.getElementById(inputFild);
    let inputValue = input.value;
    if(istrue==true){
        inputValue = parseInt(inputValue)+1;
    }
    else if(inputValue>0){
        inputValue = parseInt(inputValue)-1;
    }
    input.value=inputValue;
    let balance = document.getElementById(total);
    balance.innerText=inputValue*price

}
document.getElementById("incrase-btn").addEventListener("click",function(){
    sumInput("input",true,"iphone-total",1219)
})
document.getElementById("drecase").addEventListener("click",function(){
    sumInput("input",false,"iphone-total",1219)
})
//case calc
document.getElementById("case-incrase").addEventListener("click",function(){
    sumInput("case-input",true,"case-total",59)
})
document.getElementById("case-drecase").addEventListener("click",function(){
    sumInput("case-input",false,"case-total",59)
})
