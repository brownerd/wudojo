let say = 'Hell yeahz'

console.log(`${say} this is awesome!`)

console.log('what up!')

var h1 = document.createElement('h1')
var msg = document.createTextNode('What up!')

h1.appendChild(msg)
h1.style.fontSize = '10rem'
h1.style.color = 'hsl(80,100%,40%)'

document.body.appendChild(h1)

document.body.style.backgroundColor = 'hsl(80, 100%,50%)'
