// // #1
// const firstArray = [1,3,5,8,10]
//
// const printNumsWithDelay = () => firstArray.forEach((number) => {
//     setTimeout(() => {
//         console.log(number)
//     }, number * 1000)
// })
//
// printNumsWithDelay()

// #2
const secondArray = [32, 16, 8, 4, 2, 1]
const empty = document.querySelector('.empty')

const createCircles = () => {
    secondArray.forEach((number) => {
        const newCircle = document.createElement('div')
        newCircle.classList.add('circle')
        newCircle.style.width = `${number}px`
        newCircle.style.height = `${number}px`

        if (!empty.hasChildNodes()) {
            empty.appendChild(newCircle)
            return
        }
        const circles = empty.querySelectorAll('.circle')
        const lastCircle = circles[circles.length - 1]
        lastCircle.appendChild(newCircle)
    })
}

// const traverse = element => {
//     if (element.hasChildNodes()) {
//         return traverse(element.firstChild)
//     }
//     return element
// }
//
createCircles()

// #3

const namesArray = [
    {name: 'Jacek'},
    {name: 'Kamil'},
    {name: 'Robert'},
    {name: 'Piotr'},
    {name: 'Krzysztof'}
]

const generateNames = () => {
    const namesContainer = document.querySelector('.names')
    namesArray.forEach(name => {
        const newName = document.createElement('div')
        const nameText = document.createElement('h2')
        newName.classList.add('name')
        namesContainer.appendChild(newName)
        newName.appendChild(nameText)
        nameText.textContent = `${name.name}`
    })
}

generateNames()

// #4

const callbacks = () => console.log('triggered!')
const timeoutIds = [
    setTimeout(callbacks, 1000),
    setTimeout(callbacks, 2000),
    setTimeout(callbacks, 3000),
    setTimeout(callbacks, 4000),
    setTimeout(callbacks, 5000)
]

const stopsTimeouts = () => timeoutIds.forEach((timeout) => clearTimeout(timeout))

stopsTimeouts()

// #5

const links = [
    {label: 'Home', url: '/', color: '#000000'},
    {label: 'Shop', url: '/https://google.pl/?q=shop', color: '#000000'},
    {label: 'Dashboard', url: '/https://google.pl/?q=dashboard', color: '#000000'},
    {label: 'Settings', url: '/https://google.pl/?q=settings', color: '#000000'},
    {label: 'Sign out', url: '/https://google.pl/?q=sign%20out', color: '#e84118'}
]

const displayMenu = () => {
    const menu = document.querySelector('.menu')
    links.forEach(link => {
        const newRow = document.createElement('div')

    })
}