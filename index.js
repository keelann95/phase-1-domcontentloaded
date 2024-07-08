// // Your code goes here


// document.addEventListener("DOMContentLoaded", function() {
//     console.log("The DOM has loaded");
//     let newParagraph= document.querySelector('p').textContent("JavaScript is so cool. It lets me add text to my page programmatically." )
// newParagraph = document.getElementById('text').innerHTML('This is really cool!')
//   });

// function  event() {
    


// const LoadEvent = document.createEvent('Event')
// LoadEvent.initEvent('DOMContentLoaded', true, true)
// window.document.dispatchEvent(LoadEvent)

// // const newParagraph= document.querySelector('p')
// // newParagraph=document.getElementById('text').innerContent('This is really cool!')
// }
// event()
document.addEventListener('DOMContentLoaded', () =>{
  
document.querySelector('p').textContent = "JavaScript is so cool. It lets me add text to my page programmatically."

const event = document.createEvent('Event')
event.initEvent('DOMContentLoaded', true, true)
window.document.dispatchEvent(event)

document.querySelector('p').textContent = "This is really cool!"
})
