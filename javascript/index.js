let i = 1;
let str = "";
let box1;
let dan2;
let dan3;

let a;

window.onload = function () {
  box1 = document.querySelector(".box1");
  dan2 = document.getElementById("dan2");
  function dan2_func() {
    i = 1;
    str = "";
    while (i <= 9) {
      str += "2*" + i + "=" + 2 * i + "<br>";
      i++;
    }
    box1.innerHTML = str;
  }
  dan2.addEventListener("click", dan2_func);
  //클릭하면 dan2+func 동작 수행. dan2.onclick 대체

  dan3 = document.getElementById("dan3");
  function dan3_func() {
    i = 1;
    str = "";
    while (i <= 9) {
      str += "3*" + i + "=" + 3 * i + "<br>";
      i++;
    }
    box1.innerHTML = str;
  }

  dan3.addEventListener("click", dan3_func);

  let all=document.querySelector("#dan_all");
  all.addEventListener("click", all_func());

  function all_func() {
    str = "";
    for (i = 1; i <= 9; i++) {
      for (j = 1; j <= 9; j++) {
        str +="&nbsp; &nbsp; &nbsp; "+ i + "*" + j + "=" + i * j;
      }
      str += "<br>";
    }
    box1.innerHTML = str;
  }
}; //window.onload=function() 끝

//html에서 직접 onclick으로 함수 호출 : onload 밖에서 호출하는거라 온로드 바깥에서 선언. 바닐라 자바스크립트의 특수성때문에
function func(a) {
  if (a == 4) {
    dan4_func();
  } else if (a == 5) {
    dan5_func();
  }
}

function dan4_func() {
  i = 1;
  str = "";
  while (i <= 9) {
    str += "4*" + i + "=" + 4 * i + "<br>";
    i++;
  }
  box1.innerHTML = str;
}

function dan5_func() {
  i = 1;
  str = "";
  while (i <= 9) {
    str += "5*" + i + "=" + 5 * i + "<br>";
    i++;
  }
  box1.innerHTML = str;
}

function func_comm(a) {
  i = 1;
  str = "";
  while (i <= 9) {
    str += a + "*" + i + "=" + a * i + "<br>";
    i++;
  }
  box1.innerHTML = str;
}
