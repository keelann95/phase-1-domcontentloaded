
document.addEventListener('DOMContentLoaded', () =>{
  
document.querySelector('p').textContent = "JavaScript is so cool. It lets me add text to my page programmatically."

const event = document.createEvent('Event')
event.initEvent('DOMContentLoaded', true, true)
window.document.dispatchEvent(event)

document.querySelector('p').textContent = "This is really cool!"
})
