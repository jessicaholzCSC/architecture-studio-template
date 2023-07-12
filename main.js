
// Navigation ----------------------------------------------

// First we define our js variables
const burgerButton = document.querySelector('.burger-button')
const burgerMenu = document.querySelector('.burger-menu')
// then we start righting our new function
function toggleBurgerMenu() {
// log the click just to check its working. feel free to remove after you are done
  console.log('click')
  // here we check to see if the burger button has the class of active
  if (burgerButton.classList.contains("active")){
  // more consle.log for testing
    console.log('has active')
    // remove the class of active
    burgerButton.classList.remove("active")
    // gsap to close the email
    gsap.to(burgerMenu, {
    // width to shrink it
        width: 0,
        height: 0,
     //padding to minimilistic so it wont overflow
        right: '1.5rem',
        top: '1.5rem',
        // padding: '0',
    })
} else {
	// console for more testing
    console.log('no has active')
    // re-adds the class for tracking
    burgerButton.classList.add("active")
    // opens up the burger menu and does the opsite of the close
    gsap.to(burgerMenu, {
        width: "auto",
        height: "auto",
        right: 0,
        top: 0,
        // padding: '1.5rem'
    })
  }
}
// finally link it to the click action of the burger button
burgerButton?.addEventListener('click', toggleBurgerMenu)



// Hover Pulsing Ball on an image -----------------------------------------

//  first we are finding all of the elements that have a class of scroll-in-from-bottom
const navPoints = document.querySelectorAll(".navpoint")


// for each of them we are going to attach a gsap animation ( like a jekyll for loop just in js :D )
navPoints.forEach(object => {

    // First we define our js variables
const subPoints = object.querySelector('.sub-points')
// then we start righting our new function
function toggleSubPoints() {
// log the click just to check its working. feel free to remove after you are done
  console.log('click')
  // here we check to see if the burger button has the class of active
  if (object.classList.contains("active")){
  // more consle.log for testing
    console.log('has active')
    // remove the class of active
    object.classList.remove("active")
    // gsap to close the email
    gsap.to(subPoints, {
    // width to shrink it
        width: 0,
        // height: 0,
     //padding to minimilistic so it wont overflow
        // right: '1.5rem',
        // top: '1.5rem',
        // // padding: '0',
    })
} else {
	// console for more testing
    console.log('no has active')
    // re-adds the class for tracking
    object.classList.add("active")
    // opens up the burger menu and does the opsite of the close
    gsap.to(subPoints, {
        width: "auto",
        opacity: 1,
        // padding: '1.5rem'
    })
  }
}
// finally link it to the click action of the burger button
object.addEventListener('mouseenter', toggleSubPoints)
object.addEventListener('mouseleave', toggleSubPoints)

})


// Gallery Animation -----------------------------------

let animatedImages = document.querySelectorAll('.gallery-scroll')
animatedImages.forEach(img => {
  let tl = gsap.timeline({
    // duration: "2",
    scrollTrigger: {
        trigger: img,
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play none none none",
        scrub: true,
        markers: false,
    },
    marker: false,
  })
  // in the next line you are telling which animation the images should do
  .to(img, {scale: '1',})
  .to(img, {scale: '1', })
  .to(img, {scale: '.5',})
})
