import './app4.css'
import $ from 'jQuery'
let bindEvents = () => {
  $('.circle').on('mouseenter', () => {
    $('.circle').addClass('color')
  })
  .on('mouseout', () => {
    $('.circle').removeClass('color')
  })
}
bindEvents()