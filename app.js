const txtisim=document.querySelector(".txtisim")
const isim=document.querySelector(".isim")
const cardno=document.querySelector(".cardno")
const cardno1=document.querySelector(".cardno1")
const cardno2=document.querySelector(".cardno2")
const cardno3=document.querySelector(".cardno3")
const cardno4=document.querySelector(".cardno4")
const tarih=document.querySelector(".tarih")
const date=document.querySelector(".date")
const cvv=document.querySelector(".cvv")
const cvvv=document.querySelector(".cvvv")
txtisim.addEventListener("keyup",function(){

    isim.textContent=txtisim.value
    
})
cardno1.addEventListener("keyup",function(){

    cardno.innerHTML=` <h1>${cardno1.value}&nbsp;${cardno2.value}&nbsp;${cardno3.value}&nbsp;${cardno4.value}</h1>`
})
cardno2.addEventListener("keyup",function(){
    cardno.innerHTML=` <h1>${cardno1.value}&nbsp;${cardno2.value}&nbsp;${cardno3.value}&nbsp;${cardno4.value}</h1>`
})
cardno3.addEventListener("keyup",function(){
    cardno.innerHTML=` <h1>${cardno1.value}&nbsp;${cardno2.value}&nbsp;${cardno3.value}&nbsp;${cardno4.value}</h1>`
})
cardno4.addEventListener("keyup",function(){
    cardno.innerHTML=` <h1>${cardno1.value}&nbsp;${cardno2.value}&nbsp;${cardno3.value}&nbsp;${cardno4.value}</h1>`
})
date.addEventListener("change",()=>{
    let sene=new Date(date.value)
    let yil=sene.getFullYear()
    let ay=sene.getMonth()
    let newyıl=yil.toString().slice(2,4)
    tarih.textContent=`${ay}/${newyıl}`
})
cvv.addEventListener("keyup",function(){
    cvvv.textContent=cvv.value
})