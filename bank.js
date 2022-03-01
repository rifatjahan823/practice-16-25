//deposit add
document.getElementById("deposit-btn").addEventListener("click",function(){
   const deposit= document.getElementById("deposit");
   const depositValue = deposit.value;

   const mainDeposit = document.getElementById("main-deposit");
   const mainDepositValue = mainDeposit.innerText;

    const total = parseFloat(mainDepositValue)+parseFloat(depositValue);

   mainDeposit.innerText = total;

   //main balance add
   const mainBalance = document.getElementById("main-balance");
   const mainValue = mainBalance.innerText;
   const totalBalance = parseFloat(mainValue)+parseFloat(depositValue);
   mainBalance.innerText = totalBalance;

})

//withdraw add
document.getElementById("withdraw-btn").addEventListener("click",function(){
    const withdraw = document.getElementById("withdraw");
    const withdrawValue = withdraw.value;

    const mainWithdraw = document.getElementById("main-withdraw");
    mainWithdrawValue = mainWithdraw.innerText;

    const sum = parseFloat(mainWithdrawValue)+parseFloat(withdrawValue);

    mainWithdraw .innerText = sum;

     //main balance add
   const mainBalance = document.getElementById("main-balance");
   const sumValue = mainBalance.innerText;
   const sumBalance = parseFloat(sumValue)-parseFloat(withdrawValue);
   mainBalance.innerText = sumBalance;

})

// // second rules 
// function withdrawDeposit(inputValue,mainTk,finalValue,isTrue){
//    const deposit= document.getElementById(inputValue);
//    const depositValue = deposit.value;
//    deposit.value = "";

//    const mainDeposit = document.getElementById(mainTk);
//    const mainDepositValue = mainDeposit.innerText;

//     const total = parseFloat(mainDepositValue)+parseFloat(depositValue);

//    mainDeposit.innerText = total;


//     //main balance add
//     const mainBalance = document.getElementById(finalValue);
// if(isTrue==true){
//    const mainValue = mainBalance.innerText;
//    const totalBalance = parseFloat(mainValue)+parseFloat(depositValue);
//    mainBalance.innerText = totalBalance;
// }
// else{
//    const mainValue = mainBalance.innerText;
//    const totalBalance = parseFloat(mainValue)-parseFloat(depositValue);
//    mainBalance.innerText = totalBalance;
// }
// }



// //deposit add
// document.getElementById("deposit-btn").addEventListener("click",function(){
//   const deposit= document.getElementById("deposit").value;
//    if(deposit>0){
//        withdrawDeposit("deposit","main-deposit","main-balance",true)
//    }
//    else{
//        alert("nagative value please give posative value")
//    }
  
// })

// //withdraw add
// document.getElementById("withdraw-btn").addEventListener("click",function(){
//    const deposit= document.getElementById("withdraw").value;
//    const mainBalance = document.getElementById("main-balance").innerText
//    if(deposit>0 & deposit<mainBalance){
//        withdrawDeposit("withdraw","main-withdraw","main-balance",false)
//    }
//    else if(deposit>0 & deposit>mainBalance){
//        alert("your withdraw amout is grater than deposit ")
//    }
//    else{
//        alert("nagative value please give posative value")
//    }
// })




