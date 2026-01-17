const todoList=[{name:'make dinner',
date:'2025-2-2'},
{name:'wash dishes',
date:'2025-3-3'}];

renderTodoList();

function renderTodoList(){

let todoListHTML='';

for(i=0;i<todoList.length;i++){
const todo=todoList[i];
const name=todo.name;
const date=todo.date;

const html=`<p>${name} ${date}
 <button onclick="todoList.splice(${i},1);
 renderTodoList();
 "> Delete</button>
 </p>`;
todoListHTML+=html;

}
console.log(todoListHTML);

document.querySelector('.js-todo-list').innerHTML=todoListHTML;

}
function list(){
 const inputElement =  document.querySelector('.js-list')
text = inputElement.value

const dateInputElement=document.querySelector('.js-date')
date=dateInputElement.value;

todoList.push({
  name: text,
  date: date
})

console.log(todoList);

inputElement.value='';
renderTodoList();

}