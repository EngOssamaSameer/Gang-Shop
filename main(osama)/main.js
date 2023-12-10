var i=0;

var slideimage=["media/slide1.jpg","media/slide2.png","media/slide3.jpeg","media/slide4.png","media/slide5.jpg"];
var slideshow = function(){
  document.slideshow.src=slideimage[i];
  if(i<4){
    i++;
  }
  
  else{
    i=0;
  }
  setTimeout("slideshow()",1000);
}
slideshow();