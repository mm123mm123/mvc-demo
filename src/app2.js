import './app2.css'
import $ from 'jquery'
let index
let bindEvents = () => {
  $('.tab-bar').on('click', 'li', (e) => {
    index=$(e.currentTarget).index()
    localStorage.setItem('index',index)
    $('.tab-bar')
      .children()
      .eq(index)
      .addClass('selected')
      .siblings()
      .removeClass('selected')
    $('.tab-content')
      .children()
      .eq(index)
      .addClass('active')
      .siblings()
      .removeClass('active')
  })
}
bindEvents()
$('.tab-bar')
  .children()
  .eq(localStorage.getItem('index'))
  .trigger('click')