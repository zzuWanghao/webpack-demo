import  x from './x.js'
import  jpg from './assets/baby.jpg'
console.log(x);
console.log(jpg);

const  div = document.querySelector('#app')

div.innerHTML=`
<img src= "${jpg}" height="400px">
`
const  button1  = document.createElement('button')
button1.innerText = '懒加载啊啊啊啊'
div.appendChild(button1)

button1.onclick=()=>{
    const promise = import('./lazy.js')
    promise.then((module)=>{
        const fn = module.default
        fn()

    },()=>{
        console.log('1111111')
    })
}