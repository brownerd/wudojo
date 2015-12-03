let say = 'If you see this in your console'

console.log(`${say}, then ES6 is working`)


var h1 = document.createElement('h1')
var msg = document.createTextNode('Wudojo is running with ES6 and ESLINT ready to go!')

h1.appendChild(msg)
h1.style.fontSize = '5rem'
h1.style.color = 'hsl(340,100%,40%)'
h1.style.fontFamily = 'helvetica'

document.body.appendChild(h1)

document.body.style.backgroundColor = 'hsl(340, 100%,50%)'
