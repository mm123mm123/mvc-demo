import './app1.css'
import $ from 'jquery'

let n = localStorage.getItem('n')|| 100

function plus() {
  n += 1
}

function minus() {
  n -= 1
}

function multiply() {
  n *= 2
}

function divide() {
  n /= 2
}
function zero() {
  n = 0
}
let events = {
  'plus': plus,
  'minus': minus,
  'multiply': multiply,
  'divide': divide,
  'zero':zero,
}

let bindEvents = () => {
  $('.actions').on('click', 'button', (e) => {
    events[e.currentTarget.className]()
    localStorage.setItem('n',n)
    render()
  })
}

let render =()=>{
  $('#app1 .text').text(n)
}

render()
bindEvents()