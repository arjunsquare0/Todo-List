const arr=[];
const brr=[];
const crr=[];
const todoName=document.getElementById('js-Todo-name');
const todoName2=document.getElementById('js-Todo-name2');
function handleName(event){
    if(event.key==='Enter'){
        addName();
    } 
}

function addName(){
    arr.push(todoName.value);
    const html=`<p>${arr[0]}</p>`;
    document.querySelector('.js-container1').innerHTML=`${html}`;
    todoName.value='';
}

function handleName2(event){
    if(event.key==='Enter'){
        addName2();
    }
}

function addName2(){
    brr.push(todoName2.value);
    let todoListHtml2=``;
    for(let i=0; i<brr.length; i++){
        const html2=`<p>${brr[i]}</p>`;
        todoListHtml2 += html2;
    }
    document.querySelector('.js-container2').innerHTML=`${todoListHtml2}`;
    todoName2.value='';
}

document.querySelector('.js-Add-btn').addEventListener('click',()=>{
    addName3();
});

function addName3(){
    const todo=document.querySelector('.js-Todo-name3').value;
    const date=document.querySelector('.js-due-date').value;
    crr.push({
        name: todo,
        date
    });
    todo.value='';
    renderTodoList();
}

function renderTodoList(){
    let todoListHtml3=``;
    crr.forEach((todoobject, index)=>{
        const {name, date}=todoobject;
        const html3=`
        <div>${name}</div>
        <div>${date}</div>
        <button class="delete-btn js-delete-btn">Delete</button>`;
        todoListHtml3 += html3;
    });
    document.querySelector('.js-container3').innerHTML=`${todoListHtml3}`;

    document.querySelectorAll('.js-delete-btn').forEach((deleteButton,index)=>{ //index is closure here
        deleteButton.addEventListener('click',()=>{
            crr.splice(index,1);
            renderTodoList(); 
        });
    });
}