console.log('document', [document])
// document.bgColor = 'blue'
var pizzaArray = [
  {
    type: 'cheese',
    user: 'juanrod',
    time: '93839u4tbjcla',
    location: '2503 east oltorf st'
  },
  {
    type: 'margherita',
    user: 'juanrod',
    time: '93839u4tbjcla',
    location: '2503 east oltorf st'
  },
  {
    type: 'pepperoni',
    user: 'juanrod',
    time: '93839u4tbjcla',
    location: '2503 east oltorf st'
  },
  {
    type: 'sausage',
    user: 'juanrod',
    time: '93839u4tbjcla',
    location: '2503 east oltorf st'
  }
]
// var pizzaName = pizzaArray.type
// var pizzaTypeName = 'pinapple'

// var div = document.createElement('div')

// div.innerText = 'my favorite pizza is ' + pizzaName + '. Thank you, '
// document.body.appendChild(div);

// var div2 = document.createElement('div')
// console.log('div2', [div2])
// div2.innerText = "you ordered " + pizzaNumber(pizzaArray) + ' pizzas'
// document.body.appendChild(div2);
// function pizzaNumber (x) {
//   return x.length
// }
// let pizzaHTML = `<div class="pizza"> 
// My favorite pizza is ${pizzaTypeName}.
//  </div>`
// div2.innerHTML = pizzaHTML
let getPizzaDiv = document.querySelector('#red')
console.log('getPizzaDiv', getPizzaDiv)

getPizzaDiv.style.height= 300+ 'px'
getPizzaDiv.style.background= 'pink'
getPizzaDiv.innerText = 'hey!'