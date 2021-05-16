const readMoreBtn = document.getElementById('read-more-btn')
const contents = document.querySelector('.contents')

readMoreBtn.addEventListener('click', (e => {
  contents.classList.toggle('turned-into-more-project')
  console.log(e)
  if (readMoreBtn.innerText === 'Read More') {
    readMoreBtn.innerText = 'Read Less'
  } else {
    readMoreBtn.innerText = 'Read More'
  }
}))