class Person{
  constructor(name,age){
    console.log("person class constructor")
    this.name=name;
    this.age=age;

  }
  talk(){
    console.log(`hi,I am ${this.name}`)
  }
}

class Student extends Person{
  constructor(name,age,marks){
    super(name,age)//parent class constructor is being called
    this.marks=marks
  }
}
class Teacher extends Person{
  constructor(name,age,subject){
    super(name,age)//parent class constructor is being called
    this.subject=subject;
  }
}