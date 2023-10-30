const menuA = [
  "딸기주스",
  "아이스크림",
  "아이스 아메리카노",
  "디저트",
  "망고주스",
  "팥빙수",
];
const imgA = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
];
const textA = [
  "딸기는 여름 과일 아니고 겨울 과일 입니다.",
  "아이스크림을 많이 먹으면 ...",
  "33",
  "44",
  "55",
  "66",
];

const priceA = [0, 100, 200, 300, 400, 500, 600];
const calA = [0, 10, 15, 22, 35, 17, 85];

let count = 1;

window.onload = function () {
  for(i=0;i<menuA.length;i++)
  {
    $("#menu"+(i+1)).text(menuA[i])
  }
  
};
$(function () {
//   $("menu li").on("click", function () {
//     let no = $(this).index();
//     $(".disp").text(count + "/6");
//     $("#pic").attr("src", "img/" + imgA[no]);
//     $("#text1").text("상품명: " + menuA[no]);
//     $("#text2").text("가격: " + priceA[no] + "원");
//     $("#text3").text("칼로리: " + calA[no] + "kcal");
//   });
//이부분 강사가 오류 출력

  $("#pic").attr("src", "img/" + imgA[0]);
  $("#text1").text("상품명: 딸기주스");
  $("#text2").text("가격: 0원");
  $("#text3").text("칼로리: 0 kcal");
  $(".prevB").on("click", function () {
    if (count > 1) {
      count--;
    } else {
      count = 6;
    }
    $(".disp").text(count + "/6");
    $("#pic").attr("src", "img/" + imgA[count - 1]);
    //attr : 그림 변경
    $("#text1").text("상품명: " + menuA[count - 1]);
    $("#text2").text("가격: " + priceA[count - 1] + "원");
    $("#text3").text("칼로리: " + calA[count - 1] + "kcal");
  });
  $(".nextB").on("click", function () {
    if (count < 6) {
      count++;
    } else {
      count = 1;
    }
    $(".disp").text(count + "/6");
    $("#pic").attr("src", "img/" + imgA[count - 1]);
    //attr : 그림 변경.  attribute(속성)
    $("#text1").text("상품명: " + menuA[count - 1]);
    $("#text2").text("가격: " + priceA[count - 1] + "원");
    $("#text3").text("칼로리: " + calA[count - 1] + "kcal");
  });
});

//     $("#text1").html( "상품 : " + menuA[5] );
//     $("#text2").html( "가격 : " + priceA[5] );
//     $("#text3").html( "영양 : " + calA[5] );

//     let menu, title;
//     title=document.querySelector(".title");
//     title.innerHTML = "스타벅스 주문 메뉴판";

//     menu=document.querySelector(".menu").getElementsByTagName("li");
//     for(i=0; i<menuA.length; i++) {
//         menu[i].innerHTML = menuA[i];
//     }

//     $(".menu li").hover(function() {
//         $(this).css({"outline":"1px solid red"});
//     }, function() {
//         $(this).css({"outline":"0px solid #ccc"});
//     })

//     let pic;

//     $(".menu li").on("click", function() {
//         no=$(this).index() ;
//         $("#pic").attr("src", "img/" + imgA[no])
//         $(".text").html( textA[no] );

//         $("#text1").html( "상품 : " + menuA[no] );
//         $("#text2").html( "가격 : " + priceA[no] );
//         $("#text3").html( "영양 : " + calA[no] );

//     })

//     let count=1;
//     $(".nextB").on("click", function() {
//         if( count < 6) {
//             count++;
//         }
//         else {
//             $(".back").show();
//         }
//         $(".disp").html( count + " / 6");
//         $("#pic").attr("src", "img/" + imgA[count-1] );

//         $("#text1").html( "상품 : " + menuA[count-1] );
//         $("#text2").html( "가격 : " + priceA[count-1] );
//         $("#text3").html( "영양 : " + calA[count-1] );
//     });
//     $(".close").on("click", function() {
//         $(".back").hide();
//     })

// /*
//     $(".nextB").on("click", function() {
//         let back=document.querySelector(".back");
//         let close=document.querySelector(".close");
//         if( count < 6)
//             count++;
//         else
//             back.style.display="block";

//         close.addEventListener("click", function() {
//             back.style.display="none";
//         })

//         $(".disp").html( count + " / 6");
//         $("#pic").attr("src", "img/" + imgA[count] );
//     })
// */
//     $(".prevB").on("click", function() {
//         if( count > 1 )
//             count--;
//         else {
//             $(".back").show();
//         }
//         $(".disp").html( count + " / 6");
//         $("#pic").attr("src", "img/" + imgA[count-1] );

//         $("#text1").html( "상품 : " + menuA[count-1] );
//         $("#text2").html( "가격 : " + priceA[count-1] );
//         $("#text3").html( "영양 : " + calA[count-1] );
//     });
//     $(".close").on("click", function() {
//         $(".back").hide();
//     })

//     // 자바스크립트로 그림 6개를 For문으로 넣기
//     let js_img=document.getElementsByClassName("imgJs_img");
//     let js_text=document.getElementsByClassName("imgJs_text");
//     for(i=0; i<imgA.length; i++) {  // 0~6 7개
//         js_img[i].style.background = "url(img/" + imgA[i] + ")";
//         js_img[i].style.backgroundSize = "100% 100%";
//         js_text[i].innerHTML = menuA[i];

//         $(".imgJq_img"+i).css("background", "url(img/" + imgA[i] + ")")
//                          .css("backgroundSize", "100% 100%");
//         $(".imgJq_text"+i).html( menuA[i] );
//     }

//     $(".imgs li").hover(function() {
//         $(this).css({"outline":"1px solid red"});
//     }, function() {
//         $(this).css({"outline":"0px solid #ccc"});
//     })
