console.log("javascript is working")


//page scrolling// 
gsap.registerPlugin(ScrollTrigger)


//responsive menu//

const hamburgerBtn = document.querySelector('.hamburger-btn')
const primaryMenu = document.querySelector('.primary-menu')

hamburgerBtn.addEventListener('click', () => {
  primaryMenu.classList.toggle('show')
})

// home page // 
const hillIntroAni = gsap.from('.hill-1', {
  scrollTrigger: {
    trigger:'.hill-1', 
    toggleActions:"restart none none pause"}, 
  y: 100, 
  opacity: 0, 
  scale: 0.8, 
  duration: 2, 
  ease: 'power4', 
  delay: 0.5,
})

class Bee {
  constructor(size, x, y, aniDuration, aniDirection){
    this.size = size
    this.x = x
    this.y = y
    if(aniDuration) this.aniDuration = aniDuration
    if(aniDirection) this.aniDirection = aniDirection
    this.imgSrc = 'images/bee.png'
    this.create()
  }

  create(){
    const beeImg = document.createElement('img')
    beeImg.className = 'bee'
    beeImg.src = this.imgSrc
    
    // size width + height
    beeImg.style.width = this.size +'px'
    beeImg.style.height = this.size +'px'
    
    // set position
    beeImg.style.position = 'absolute'
    beeImg.style.left = this.x+'px'
    beeImg.style.top = this.y+'px'

    // set css animation
    if(this.aniDuration) beeImg.style.animationDuration = this.aniDuration+'s'
    if(this.aniDirection) beeImg.style.animationDirection = aniDirection

    document.body.append(beeImg)
  }
}


function generateBees1(){
  for(let i = 0; i < 50; i++){
    
    const size = Math.random()*50
    const x = Math.random()*document.body.clientWidth
    const y = Math.random()*document.body.clientHeight
    // create star
    const star = new Bee (size, x, y)
  }
}

function generateBees2(){
  for(let i = 0; i < 200; i++){
    
    // set size + position
    const size = Math.random()*50
    const x = Math.random()*document.body.clientWidth
    const y = Math.random()*document.body.clientHeight

    // randomise the animation settings
    let aniDuration = Math.random()*9
    if(aniDuration < 6){
      aniDuration += 3
    }


    // create star
    const star = new Bee (size, x, y, aniDuration)

  }
}

generateBees2()

gsap.timeline()
.to('.bee',{ opacity: 0, duration: 3, ease: "back", delay:5,})
.from('.logo-main', {y:700, duration: 1, ease:"back",})
.from('.topbar', {opacity:0, duration: 1, })
.from('.logo', {opacity:0, duration: 1, })



// how to help //
const cardsAni = gsap.from('.icon', {
  scrollTrigger: {
    trigger:'.icon', 
    toggleActions:"restart none reverse pause"},
  y: 200, 
  opacity: 0, 
  scale: 0.8,
  rotate: '20deg', 
  duration: 1, 
  ease: 'power4.out', 
  stagger: 0.3
})



const cards = document.querySelectorAll('.card')

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('is-flipped')
    })
})



// image gallery //

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// contacts // 

const social = document.querySelectorAll('#social path'); 

for(let i = 0; i < social.length; i++) {
    console.log(`${i} is ${social[i].getTotalLength()}`); 
}

  const dialog = document.querySelector('.dialog-width');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('sl-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());


