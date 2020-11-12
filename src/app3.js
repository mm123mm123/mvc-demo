import './app3.css'
import $ from 'jquery'
let active
let bindEvents = () => {
  $('.square').on('click', () => {
    active=$('.square').toggleClass('active').hasClass('active')
    localStorage.setItem('app3.active',active)
    console.log(active)
  })
}
let init=()=>{
  $('.square').toggleClass('active',localStorage.getItem('app3.active')==='true')
}
init()
bindEvents()