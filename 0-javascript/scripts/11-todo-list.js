const todoList=['make dinner','wash dishes'];
renderTodoList();

function renderTodoList(){

let todoListHTML='';

for(i=0;i<todoList.length;i++){
const todo=todoList[i];
const html=`<p>${todo}</p>`;
todoListHTML+=html;

}
console.log(todoListHTML);

document.querySelector('.js-todo-list').innerHTML=todoListHTML;

}
function list(){
 const inputElement =  document.querySelector('.js-list')
text = inputElement.value

todoList.push(text);
console.log(todoList);

inputElement.value='';
renderTodoList();

}