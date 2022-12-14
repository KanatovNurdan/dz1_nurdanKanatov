// 1 задача 
const gmailInput = document.querySelector('.gmailInput')
const checkResult = document.querySelector('.checkResult')
const resultSpan = document.querySelector('.resultSpan')

const checkAll = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{3,4}$/i


checkResult.addEventListener('click', ()=>{
    if(checkAll.test(gmailInput.value)){
        resultSpan.innerText = 'validation succes'
        resultSpan.style.color = 'green'
    }else {
        resultSpan.innerText = 'validation is error'
        resultSpan.style.color = 'red'
    }
})

//2 задача 
const big = document.querySelector('.big')
const small = document.querySelector('.small')

function stylize() {
    big.style.height = '500px'
    big.style.width = '500px'
    big.style.background = 'red'
    big.style.position = 'relative'

    small.style.height = '50px'
    small.style.width = '50px'
    small.style.background = 'blue'
    small.style.position = 'absolute'
}
stylize()

let n = 0
const moveRight = ()=> {
    if (n<450){
        n+=10
        small.style.left =`${n}px`
    }
    setTimeout(moveRight,100)
}
moveRight()
