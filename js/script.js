var elSelect = document.querySelector(".select");
var elInput = document.querySelector(".input");
var elButton = document.querySelector(".button");
var elOutput = document.querySelector("output");


var universtities = ["Choose university", "Harvard" ,"Stenford" ,"Oxford"]

for ( university  of universtities) {
  var newOption = document.createElement("option");
  newOption.textContent = university;
  elSelect.appendChild(newOption)
}


elButton.addEventListener("click",function(e){
  e.preventDefault();

  var amount = elInput.value.trim();
  var convert = elSelect.value;

  if(amount == ""){
    return
  }

  amount = Number(amount);
  if (isNaN(amount)){
    return
  }




  var thousand = 1000;
  var thousandTwoHundred = 1200;
  var thousandThreeHundred = 1300;

  var thousandFourHundred = 1400;
  var thousandFiveHundred = 1500;

  var grant = "Congratulations! You have passed to university on a grant!";
  var contract = "You have passed to university on a contract, and you have to pay money!"
  var lose = "Sorry.You have not passed the exam!"




  switch (convert) {
    case "Harvard":
      if(amount >= thousandThreeHundred){
        elOutput.textContent = grant;
      }
  
      else if(amount >= thousandTwoHundred){
        elOutput.textContent = contract;
      }
  
      else {
        elOutput.textContent = lose;
      }
    
      break;
  
    

    case "Stenford":
      if(amount >= thousandFiveHundred){
        elOutput.textContent = grant;
      }
  
      else if(amount >= thousandFourHundred){
        elOutput.textContent = contract;
      }
  
      else {
        elOutput.textContent = lose;
      }
      break;


      case "Oxford":
      if(amount >= thousandFourHundred){
        elOutput.textContent = grant;
      }
  
      else if(amount >= thousandThreeHundred){
        elOutput.textContent = contract;
      }
  
      else {
        elOutput.textContent = lose;
      }
      break;

  }



})