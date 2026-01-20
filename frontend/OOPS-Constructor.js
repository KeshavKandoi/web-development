
//  constructor does not return anything and  start with capital letter

function Person (name,age){
this.age=age;
this.name=name;

}
person_prototype.talk=function(){
  console.log(`hi my name is ${this.name}`);
};

let p1=new person("Adam",25);
let p2=new person("Eve",35);