var img = document.querySelectorAll(".product_imgm");
console.log(img)
function clearImgClass () {
    for (i = 0; i < img.length; i++ ) {
      img[i].classList.remove('activeimg')
    }
  }
  function handleImg1() {
    var heroBlock = document.querySelector('.product_imgboxl');
    heroBlock.style.backgroundImage = "url(img/product/card1.jpg)";
    clearImgClass ();
  img[0].classList.add('activeimg');
  }
  function handleImg2() {
    var heroBlock = document.querySelector('.product_imgboxl');
    heroBlock.style.backgroundImage = "url(img/product/card2.jpg)";
    clearImgClass ();
  img[1].classList.add('activeimg');
  }
  function handleImg3() {
    var heroBlock = document.querySelector('.product_imgboxl');
    heroBlock.style.backgroundImage = "url(img/product/card3.jpg)";
    clearImgClass ();
  img[2].classList.add('activeimg');
  }
  function handleImg4() {
    var heroBlock = document.querySelector('.product_imgboxl');
    heroBlock.style.backgroundImage = "url(img/product/card4.jpg)";
    clearImgClass ();
  img[3].classList.add('activeimg');
  }