'use strict'
const toggle=document.querySelector('.toggle');
const modeText=document.querySelector('.mode-text');
const btns=document.querySelectorAll('.btn');
const sectionAGrids=document.querySelectorAll('.section-grid');
const sectionBGrids=document.querySelectorAll('.section2-grid');
const mainP=document.querySelectorAll('.mainP')
const mainP2=document.querySelectorAll('.mainP2');
const btnLight=document.querySelector('.light')
const btnDark=document.querySelector('.dark')

btnLight.addEventListener('click',()=>{
btnLight.classList.remove('active');
btnDark.classList.add('active')
//btnLight.style.backgroundColor='white'
document.body.classList.remove('light');
sectionAGrids.forEach(grid=>grid.classList.remove('light'))
mainP.forEach(p=>p.classList.remove('light'))
sectionBGrids.forEach(grid=>grid.classList.remove('light'))
modeText.innerHTML='Dark Mode'
})
btnDark.addEventListener('click',()=>{
    btnLight.classList.add('active');
    //btnLight.style.backgroundColor='white'
    btnDark.classList.remove('active')
    document.body.classList.add('light');
    //toggle.classList.add('light')
    sectionAGrids.forEach(grid=>grid.classList.add('light'))
    mainP.forEach(p=>p.classList.add('light'))
    mainP2.forEach(p=>p.classList.add('light'))
    sectionBGrids.forEach(grid=>grid.classList.add('light'))
    modeText.innerHTML='Light Mode'
})
