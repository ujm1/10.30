let i;
const sec5A = ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png"];
const sec2A = ["img5.png", "img2.png", "img3.png", "img4.png", "img5.png"];
const sec5_textA = ["동소개", "인구소개", "읍소개", "종합운동장", "시내전경"];
let sec5Box, sec5Box_text;
window.onload = function () {
  sec5Box = document.querySelector(".sec5Box").getElementsByTagName("li");
  // sec5Box_text=document.querySelector(".sec5Box").getElementsByTagName("div");
  sec5Box_text = document
    .querySelector(".sec5Box")
    .getElementsByClassName("sec5Box_text");
  for (i = 0; i < sec5A.length; i++) {
    sec5Box[i].style.background = "url(img/" + sec5A[i] + ")";
    sec5Box[i].style.backgroundSize = "100% 100%";

    // 그림 밑에 설명 5개 넣기
    sec5Box_text[i].innerHTML = sec5_textA[i];
  }

  let Big_img5 = document.querySelector(".Big_img5").getElementsByTagName("li");
  for (i = 0; i < sec2A.length; i++) {
    Big_img5[i].style.background = "url(img/" + sec2A[i] + ")";
    Big_img5[i].style.backgroundSize = "100% 100%";
  }
};

$(function () {
  $(".Big_prev").on("click", function () {
    $(".Big_img5 li:last").prependTo(".Big_img5");
    $(".Big_img5").css("left", "-=1000px");
    $(".Big_img5").animate({ left: "+=1000px" }, 300);
  }); //왼쪽으로 이동, 즉 이미지는 오른쪽으로, 이미지 끝났을때 처음으로 돌아오기

  $(".Big_next").on("click", function () {
    $(".Big_img5").animate({ left: "-=1000px" }, 300, function () {
      $(".Big_img5 li:first").appendTo(".Big_img5");
      $(".Big_img5").css("left", "+=1000px");
    });
  }); //오른쪽으로 이동, 즉 이미지는 왼쪽으로, 이미지 끝났을때 처음으로 돌아오기

  $(".sec3_img1").on("click", function () {
    $(".sec3_open1").fadeIn();
  });

  $(".sec3_img1").on("mouseout", function () {
    $(".sec3_open1").fadeOut();
  });

  $(".sec3_img2").on("click", function () {
    $(".sec3_open2").fadeIn();
  });

  $(".sec3_img2").on("mouseout", function () {
    $(".sec3_open2").fadeOut();
  });

  $(".sec3_img3").on("click", function () {
    $(".sec3_open3").fadeIn();
  });

  $(".sec3_img3").on("mouseout", function () {
    $(".sec3_open3").fadeOut();
  });

  $(".sec3_img4").on("click", function () {
    $(".sec3_open4").fadeIn();
  });

  $(".sec3_img4").on("mouseout", function () {
    $(".sec3_open4").fadeOut();
  });
});
//제이쿼리 사용
