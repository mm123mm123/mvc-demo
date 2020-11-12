import './app3.css'
import $ from 'jquery'
let active
let bindEvents = () => {
  $('.square').on('click', () => {
    $('.square').toggleClass('active')
  })
}
bindEvents()