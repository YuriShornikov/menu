const dropdown__value = document.querySelector('.dropdown__value')
const dropdown__list = document.querySelector('.dropdown__list')
const dropdown__item = document.querySelectorAll('.dropdown__item')


dropdown__value.addEventListener('click',() => {
    dropdown__list.classList.add('dropdown__list_active')
})
dropdown__item.forEach((element) => {
    element.target.addEventListener('click',() => {

        dropdown__value.textContent = element.target.textContent

    })
})
