// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "trix"
import "@rails/actiontext"


document.addEventListener('turbolinks:load', () => {
    document.addEventListener('click', () => {
      let element = Event.target.closest('.paragraph-content')
      if (!element) return;
  
      element.classList.add('d-none')
      element.nextElementSibling.classList.remove('d-none')
    })
  
    document.addEventListener('click', () => {
      if (!Event.target.matches('.cancel')) return;
  
      Event.preventDefault();
  
      let element = Event.target.closest('.paragraph-form')
  
      element.classList.add('d-none')
      element.previousElementSibling.classList.remove('d-none')
    })
  })