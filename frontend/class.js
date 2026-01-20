
class Person{
  constructor(name,age){
    this.age=age;
    this.name=name;
  }

talk(){
  console.log(`hi my name is ${this.name}`);
}
}

let p1=new person("Adam",25);
let p2=new person("Eve",35);