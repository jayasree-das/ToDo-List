const inputBox = document.getElementById("input-box");

const listContainer  = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === ''){
        alert('You must write something!!!');
    }
    else{
        let li = document.createElement("li"); //creates a new element with li tag
        li.innerHTML = inputBox.value; //the text in the inputbox is the content of the li tag
        listContainer.appendChild(li); //in the listcontainer div li is added
        let span = document.createElement('span');
        span.innerHTML = '\u00d7'; //cross key
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData(); //whenever we add any new task we will save the updated task
}

//we are adding one click function to our task list
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked"); //if we will click on the li tag that is the check box then it will toggle and make it unchecked
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();//if we will click on the span tag that is the cross key we will remove the parentelement which is that listed task with li tag
        saveData();
    }
},false)

//we wil save the data so that it does not get removed while refreshing
//all the contents of the class listcontainer will de saved in browser as data
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}


//showing the saved data
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();