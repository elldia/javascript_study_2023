//for 0~4 반복문 
for(let i=0; i<=4; i++){
    console.log(i)
}
// 변수
const li = document.querySelectorAll('.test li')
console.log(li)
for(let i=0; i<li.length; i++){
    //li[i].style.backgroundColor = 'yellow'
    //홀수 li 노랑
    //짝수 li 아쿠아
    if(i%2==1){
        li[i].style.backgroundColor = 'yellow'
    }else{
        li[i].style.backgroundColor = 'aqua'
    }
}
/* li[0].style.backgroundColor = 'yellow'
li[1].style.backgroundColor = 'yellow'
li[2].style.backgroundColor = 'yellow'
li[3].style.backgroundColor = 'yellow' */
//다중 for
for(let i=0; i<2; i++){//0 > 1까지 2번 반복문
    console.log(i)
    for(let j=1; j<6; j++){//1~5까지 5번 반복문
        console.log(`j = ${j}`)
    }
}
console.log('------------------------')
//ul-li*3-span*2
let ulTag = document.createElement('ul')
let liTag = document.createElement('li')
const answer1 = document.querySelector('.answer1')
console.log(ulTag, answer1, liTag)
for(let i=0; i<3; i++){//1단 for li*3
    liTag = document.createElement('li')
    liTag.innerHTML += `li${i+1}`
    for(let j=0; j<2; j++){//2단 for span*2
        liTag.innerHTML += `<span>span${j+1}</span><br>`;
    }
    ulTag.appendChild(liTag)
}
answer1.appendChild(ulTag)
console.log(ulTag)
// innerHTML 작성은 가장 마지막에 속한 내용 = inline or img등