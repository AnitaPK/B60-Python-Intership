
result = document.querySelector('#greetWithName')

function getNameFromInput(){
    name1 = document.querySelector('#nameInput').value 
    console.log(name1);
    alert(`Hello ${name1}`)
    result.innerHTML = `Good Morning ${name1}`
    result.style.fontSize = '40px'
    result.style.color = 'blue'
}

age =10
if(age>18){
    console.log("Can VOTE");
}else{
    console.log("Cant vote")
}


// 0<35 fail
//  35-60 pass 
//  60-75 first class 
//  75>   Disti 

// if(){

// }else if(){

// }else if(){

// }else{

// }

const date1 = new Date()
day = date1.getDay()
document.getElementById('showDate').textContent = day



switch(day){
    case 3:
        console.log("Working day");
        break;
    default:
        console.log("Invalid")
}

for(let i=1; i<=10; i++){
    console.log(17 * i)
   }

//  document.querySelector('#table18').innerHTML = 
//  for(i=1;i<=10;i++){`
//                                                    <li> ${18 * i}</li>
// `}

// initialization
// while(condition){


//     inc /dec 
// }
// ini 
// do{

//     inc / dec
// }while(cond)

// array obj 

// html css/bootstrap javascript
