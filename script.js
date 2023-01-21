const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)

  if (nlwSetup.dayExists(today)) {
    alert('dia existente')
    return
  } else nlwSetup.addDay(today)
  return
}

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) ?? {}
nlwSetup.setData(data)
nlwSetup.load()
