//--------typing my name-----------
var i=0, text="";
text = "TEERAMET PINTUPAISITWONG"


function typing() {
  if(i<text.length){
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing,80);
  }
}



//loop function of typing my name
var timer;
startTimer();
function startTimer(){
    timer = setInterval(function() {
        i=0;
        document.getElementById("text").innerHTML ="";
        typing();
        text = "TEERAMET PINTUPAISITWONG"
    }, 10000);
}

//

var pictures = []; //Initialise an empty array


var URLs = [
    '1.jpg', '2.jpg', '3.jpg', '4.jpg',
    '5.jpg', '6.jpg', '7.jpg', '8.jpg',
    '9.jpg', '10.jpg', '11.jpg', '12.jpg',
    '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg'
];


//loop pics

var img = document.createDocumentFragment();
newDiv = document.createElement('div');
document.getElementById('imageShow').appendChild(newDiv);

for(var i=1; i < 18; i++){
  var newDiv = document.createElement('div');
//    newDiv.id = 'r'+i;
  var img = new Image();
    newDiv.className = 'child-container';
    newDiv.id = "id"+i;
    img.src = 'image/'+i+'.jpg';
    img.alt = 'a';
    img.setAttribute("attribute", "abc");
    document.getElementById('imageShow').appendChild(newDiv);
    document.getElementById('id'+i).appendChild(img);
}


// scroll when on page

const animation_element = document.querySelectorAll('.animateonscroll');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    if (entry.isIntersecting){
      entry.target.classList.add('animate');
    } else{
      entry.target.classList.remove('animate');
    }
  })
}, {
  threshold: 0.5
});

for (let i=0; i < animation_element.length; i++){
  const el = animation_element[i];

  observer.observe(el);
}


// swiper cards

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  slidesPerGroup: 3,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  // loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    0:{
      slidesPerView: 1,
    },
    900:{
      slidesPerView: 2,
    },
    1200:{
      slidesPerView: 3,
    },
  },

});