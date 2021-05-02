document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    addLiTag(event)
  })
});
function addLiTag(event) {
  const span = document.createElement('span')
  const newLi = document.createElement('li')
  const delbut = document.createElement('button')
  delbut.textContent = 'Delete'
  const ul = document.getElementById('tasks')
  newLi.textContent = event.target['new-task-description'].value+' '
  ul.appendChild(span)
  span.appendChild(newLi)
  newLi.appendChild(delbut)
  delbut.addEventListener('click', function (event) {
    delbut.parentNode.parentNode.remove()
  })
}