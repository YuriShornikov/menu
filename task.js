const dropdown__value = document.querySelector('.dropdown__value')
const dropdown__list = document.querySelector('.dropdown__list')
const dropdown__item = document.querySelectorAll('.dropdown__item')


dropdown__value.addEventListener('click',() => {
    dropdown__list.classList.add('dropdown__list_active')
})
dropdown__item.forEach((element) => {
    element.addEventListener('click',(event) => {
        event.preventDefault()
        dropdown__value.textContent = element.textContent
        dropdown__list.classList.remove('dropdown__list_active')
    })
})
