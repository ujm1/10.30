
let many;
let point;
let btn1;
let su;
let cash;
let sale;

window.onload = function () {
  btn1 = document.getElementById("btn1");
  many = document.getElementById("many");
  point = document.getElementById("point");
  sale = document.getElementById("sale");
 
  btn1.addEventListener("click", function () {
    
    su = Number(many.value);
    cash = 320 * su;

    
    if (cash >= 30000) {
      sale = cash * 0.03;
    } else {
      sale = 0;
    }

    point=cash%100;
    cash=cash-sale;
    cash=parseInt(cash);
  

    point.innerHTML = point;
    sale.innerHTML = sale;
    total.innerHTML = cash;

   
  });

  btn2 = document.getElementById("btn2");
  btn2.addEventListener("click", function (){
    point.innerHTML = 0;
    sale.innerHTML = 0;
    total.innerHTML = 0;
    many.focus();
  })
};
