str1 = 'wisdom'
str2 = 'sprouts'
console.log(str1);
console.log(str1.length)

str3 = str1 +" "+ str2;
str4 = str1.concat(' ',str2)

str5 = `${str1} ${str2}`

console.log(str3,"str3");
console.log(str4, 'str4');
console.log(str5, 'str5');
console.log(str3.toUpperCase())

console.log(str3.charAt(3))

// .indexOf(),  .includes(),

x = str3.indexOf('FFF')
console.log(x)

y = str3.includes('sprouts')
console.log(y)

// .slice(), .substring() 

str6 = 'Every day is a new chance to do something good'

substr1 = str6.slice(15, 26)
console.log(substr1)

substr2 = str6.substring(5, 10)
console.log(substr2);


str7 = '       HELLO     '
console.log(str7.length);
console.log(str7.trim().toLowerCase())


// replace spit 

str8 = str6.replace('good', 'new')
console.log(str6);
console.log(str8);

str9 = str8.replaceAll('new', 'GOOD')

console.log(str9);



str10 = '123456789'

arr1 = str10.split('')
console.log(arr1)

arr1.forEach((element, index)=>{
    console.log(element, index)
})

arr2 = arr1.map((e)=> e*e)
console.log(arr2)
// pop() 
arr1.push('10')
console.log(arr1)
arr1.unshift('0')
console.log(arr1)
// shift( )

arr3 = arr1.splice(7,0, '6.5')
console.log(arr3)
console.log(arr1)


// arr3 = arr1.slice(6,9)
// console.log(arr3)


evenArr = arr1.filter((n)=>n%2 != 0)

console.log(evenArr);

userArr = ['Virat', 'Kohli', 37]

user = {
    fname:"Virat",
    lName:"Kohli",
    age:37,
    victory:["World Cup", "IPL","Test Match"],
    address:{
        streetNo:30,
        landmark:"Info Park",
        city:"Delhi",
        pincode:567878
    }
}

console.log(user["age"])
// user.city = 'Delhi'

console.log(user)
user.age = 38

