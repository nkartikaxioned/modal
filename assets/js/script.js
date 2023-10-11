const article = document.querySelectorAll('.content-container'),
  button = document.querySelectorAll('.button'),
  modal = document.querySelector('.modal'),
  closebtn = document.querySelector('.btn'),
  display = document.querySelector('.content'),
  html = document.querySelector('html');
 


article.forEach((art, index) => {
  art.addEventListener('click', () => {
   display.innerHTML=art.innerHTML
    removeHidden()
    html.classList.add('html-scroll')
  })
})

function removeHidden() {
  modal.classList.remove('hidden')
}

closebtn.addEventListener('click', () => {
  modal.classList.add('hidden')
  html.classList.remove('html-scroll')
})

display.addEventListener('click', () => {
  modal.classList.add('hidden')
  html.classList.remove('html-scroll')
})











