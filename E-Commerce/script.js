let thumbnailImg=document.getElementById("carousel");
let crossMark=document.getElementsByClassName("fa-xmark")[0];
crossMark.addEventListener('click',function(){
    thumbnailImg.style.display="none";
});

let mainthumbImg=document.getElementsByClassName("card")[0];
mainthumbImg.addEventListener('click',function(){
    console.log()
    thumbnailImg.style.display="flex";
});


let sub=document.getElementsByClassName("sub")[0];
let add=document.getElementsByClassName("add")[0];
let para=document.getElementsByClassName("qty-number")[0];
sub.addEventListener('click',()=>{
    let currValue = parseInt(para.textContent);
    if (currValue > 0) {
        para.textContent = currValue - 1;
    }
});
add.addEventListener('click',()=>{
    let currValue = parseInt(para.textContent);
    para.textContent = currValue + 1;
})


// ---------------
new Swiper('.card-wrapper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    spaceBetween:30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        0:{
            slidesPerView:1
        },
        
    }
});



// ---cart
let countpara=document.getElementById('count');

let cartdisplay=document.getElementsByClassName('cart-items')[0];
let cartItems=document.getElementsByClassName('fa-cart-shopping')[0];
// cartItems.addEventListener('click',()=>{
//     cartdisplay.style.display="inline";
// });


cartItems.addEventListener('click', () => {
    if (cartdisplay.style.display == "none") {
        cartdisplay.style.display = "inline"; 
    } else {
        cartdisplay.style.display = "none"; 
    }
});



let deleteItems=document.getElementsByClassName('fa-trash-can')[0];








let cartempty=document.getElementsByClassName('items')[0];
let paracartempty=document.getElementsByClassName('empty-cart')[0];
if (parseInt(countpara.textContent) === 0) {
    countpara.style.display = "none";
    cartempty.style.display="none";
    paracartempty.style.display="flex";
} else {
    console.log(countpara.textContent);
    countpara.style.display = "inline"; 
    cartempty.style.display="inline";
    paracartempty.style.display="none";
}
deleteItems.addEventListener('click',()=>{
    cartempty.style.display="none";
    paracartempty.style.display="flex";
});

let cartCount=document.getElementById('count');

deleteItems.addEventListener('click',()=>{
    cartdisplay.style.display="none";
    cartCount.textContent=0;
});


let noofitems=document.getElementById('noofitems');
let totalcost=document.getElementById('totalCost');
let btnadd=document.getElementById('addtocart');
btnadd.addEventListener('click',()=>{
    let qty=para.textContent;
    noofitems.textContent=`$125.00 x ${qty} `;
    let val=qty*125.00;
    // console.log(totalcost,val);
    totalcost.textContent=`$ ${val.toFixed(2)}`;
    let countpara=document.getElementById('count');
// ----------
let currentCount = parseInt(countpara.textContent) || 0; 
currentCount = parseInt(para.textContent);
countpara.textContent = currentCount; 

if (parseInt(countpara.textContent) === 0) {
    countpara.style.display = "none";
    cartempty.style.display="none";
    paracartempty.style.display="flex";
} else {
    console.log(countpara.textContent);
    countpara.style.display = "inline"; 
    cartempty.style.display="inline";
    paracartempty.style.display="none";
}
});



let crossRespNav=document.getElementById('resp-nav-cross');
let entireNav=document.getElementsByClassName('lists')[0];
crossRespNav.addEventListener('click',()=>{
    entireNav.style.display="none";
});

let barRespNav=document.getElementsByClassName('fa-bars')[0];
barRespNav.addEventListener('click',()=>{
    entireNav.style.display="flex";
});



const track = document.querySelector('.images');
    const nextButton = document.querySelector('.next-btn');
    const prevButton = document.querySelector('.prev-btn');
    
    let currentSlide = 0;
    const totalSlides = document.querySelectorAll('.images img').length;

    // Move to the next image
    nextButton.addEventListener('click', () => {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
        } else {
            currentSlide = 0; // Loop back to the first slide
        }
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
    });

    // Move to the previous image
    prevButton.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = totalSlides - 1; // Loop back to the last slide
        }
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
    });




