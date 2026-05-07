//1

const filterEvenNumbers=(num:number[]):number[]=>{
  return num.filter((elem) => (elem%2==0))   
}

// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]))

//2

const reverseString=(str:string):string=>{

    return str.split("").reverse().join("");
}

// console.log(reverseString("typescript"));

//3

type StringOrNumber=number|string

const checkType=(input:StringOrNumber)=>{ 

    if(typeof input==='string') 
      return 'String'
    if(typeof input==='number')
      return 'Number'
    
}

// console.log(checkType("Hello"))
// console.log(checkType(42))

//4

const user = { 
  id: 1, 
  name: "John Doe", 
  age: 21 
};

const getProperty=<X,Y extends keyof X>(obj:X,key:Y):X[Y]=>{
  return obj[key];
}
// console.log(getProperty(user, "name"))

//5

interface Book{
  title:string,
  author:string,
  publishedYear:number
}

interface IRead extends Book{
  isRead:boolean
}

const toggleReadStatus=(obj:Book):IRead=>{
    return {
      ...obj,
      isRead:true
    }
}

// const myBook:Book = { 
//   title: "TypeScript Guide", 
//   author: "Jane Doe", 
//   publishedYear: 2024 };

// console.log(toggleReadStatus(myBook))

//6
class Person{
  name:string;
  age:number

  constructor(name:string,age:number){
    this.name=name;
    this.age=age
  }
}

class Student extends Person{
  grade:string;
  constructor(name:string,age:number,grade:string){
    super(name,age)
    this.grade=grade;
   
  }
  getDetails(){
    return `Name:${this.name}, Age:${this.age}, Grade:${this.grade}`
  }
}

// const student = new Student("Alice", 20, "A");
// console.log(student.getDetails())


//7
const getIntersection=(arr1:number[],arr2:number[])=>{
  
  return arr1.filter(a1=>arr2.includes(a1))
   
}
// console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]))