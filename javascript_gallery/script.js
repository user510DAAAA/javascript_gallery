// JavaScript
//console.log('Hello world!');
const main = document.querySelector('#main-image');
const thumbs = document.querySelectorAll('.thumb');

// 確認
//console.log(main);
//console.log(thumbs);
const text = document.querySelector('#caption');
thumbs.forEach(function(item, index) {
    item.onmouseover = function() {
      //console.log(this.dataset.image);
      main.src = this.dataset.image;
      text.textContent = this.title;
    }
  });
  