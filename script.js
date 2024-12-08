
$(function(){

    $('a[href^="#"]').click(function() {
 
       
       var speed = 500;
       var offset = -0;
 
       
       var anchor = $(this).attr("href");
 
      
       var target = $(anchor == "#" || anchor == "" ? 'html' : anchor);
       var position = target.offset().top + offset;
 
      
       $('body,html').animate({scrollTop:position}, speed, 'swing');
 
       return false;
 
    });
 
 })
 const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const modalClose = document.getElementById("modal-close");
const images = document.querySelectorAll(".gallery-image");

// 画像をクリックしたときにモーダルを表示
images.forEach((image) => {
  image.addEventListener("click", () => {
    modal.style.display = "flex"; // モーダルを表示
    modalImage.src = image.src; // クリックした画像のソースをモーダルに設定
  });
});

// モーダルを閉じる処理
modalClose.addEventListener("click", () => {
  modal.style.display = "none"; // モーダルを非表示
});

// モーダル外をクリックした場合も閉じる
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none"; // モーダルを非表示
  }
});