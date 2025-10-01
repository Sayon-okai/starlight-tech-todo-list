// TODO: getting element to js


// input
let inputEntryValue = document.getElementById("input-entry-value");
// Status Btns
let activeBtn = document.querySelector(".active-btn");
let pendingBtn = document.querySelector(".pending-btn");
let closedBtn = document.querySelector(".closed-btn");
let addBtn = document.querySelector(".add-btn");
// Select delivery date
let deliveryDateValue = document.querySelector("#select-delivery-date");
// Date supported 
const maxDate = new Date("2027-12-31").toLocaleDateString("en-US");

// get the active task container
const activeTask = document.getElementById("active-task");
// Get pending task container
const pendingTask = document.getElementById("pending-task");
// Getting closed task container
const closedTask = document.getElementById("closed-task")
// clear tasks from local storage 
let clearTaskBtn = document.querySelector("#clear-task");
// Getting icons

const pencilIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FDBF46" class="bi bi-pencil-square"
    viewBox="0 0 16 16">
    <path
        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
    <path fill-rule="evenodd"
        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
</svg>`;


const circleIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#5B6097" class="bi bi-circle"
                        viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    </svg>`;


const trashIcon = ` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F06A6D" class="bi bi-trash3"
                        viewBox="0 0 16 16">
                        <path
                            d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                    </svg>`;


activeBtn.addEventListener('click', addActiveTaskToList);
pendingBtn.addEventListener('click', addPendingTaskToList);



// Create active task
function addActiveTaskToList() {

        // current date
    let currentDate = new Date().toLocaleDateString("en-US");
    let deliveryDate = new Date(deliveryDateValue.value).toLocaleDateString("en-US");
      
    // check if inputEntryValue field is empty && if delivery date is not less then task creation date
    // validation
if (
   inputEntryValue.value.length > 3 ||       // task name at least 3 chars
   deliveryDate instanceof Date &&  // valid date
   deliveryDate >= currentDate  &&           // not before today
   deliveryDate <= maxDate // not after 2027
) {
          const task = { 
         name: inputEntryValue.value,
         creationDate: currentDate,
         deliveryDate: deliveryDate,
         status: "active",
         taskCircleIcon: circleIcon,
         taskPencilIcon: pencilIcon,
         taskTrashIcon: trashIcon,
         
       
         }
          // Save it
         saveTaskToLocalStorage(task, "activeTask");

         // Render UI
         renderActiveTask(task);

        
    } else {
        alert(`Please enter task in the box and make sure delivery's date is greater then or equal to today's date`)

        console.log("User didn't input the correct data");
        
    }

    location.reload();
   
}

// render active task
function renderActiveTask(task) {
  // build DOM elements here (same as you did before)
    // but instead of inputEntryValue.value, use task.name, task.creationDate, task.deliveryDate


        // create current date element 
        let currentDateDiv = document.createElement("div");
        currentDateDiv.className = 'creation-date'
        currentDateDiv.textContent = task.creationDate;

        let creationDateText = "creation date";
        let createDateElement = document.createElement("h6")
        createDateElement.textContent = creationDateText;

        // create delivery date section
        let creationDateSec = document.createElement('div');
        creationDateSec.className = 'creation-date-sec';


        // Create delivery date element
        let deliveryDateText = "delivery date";
        let deliveryDateElement = document.createElement("h6")
        deliveryDateElement.textContent = deliveryDateText;
    
        let deliveryDateDiv = document.createElement("div");
        deliveryDateDiv.className = 'delivery-date';
        deliveryDateDiv.textContent = new Date(task.deliveryDate).toLocaleDateString("en-US");
    
    
        //  task name div
        let taskNameDiv = document.createElement("div");
        taskNameDiv.className = "task-name";
        taskNameDiv.textContent = task.name;
    
       // check if date is invalid  
    if (task.deliveryDate === "Invalid Date") {
        deliveryDateDiv.textContent = task.deliveryDate + "!";
        deliveryDateDiv.style.color = "red";
        deliveryDateDiv.style.fontWeight = "bold";
        taskNameDiv.style.textDecoration = "line-through"
    }
        // create delivery date section
        let deliveryDateSec = document.createElement('div');
        deliveryDateSec.className = 'delivery-date-sec';

        let createStatusElement = document.createElement("h6")
        createStatusElement.textContent = task.status;
          
        // create status button
        let activeTaskBtn = document.createElement("button");
        activeTaskBtn.className = ("active-task-btn");
        activeTaskBtn.textContent = task.status;

        // Create status div
        let taskStatusDiv = document.createElement('div');
        taskStatusDiv.className = "task-status";
    
        // Create elements
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        li.className = "task";
 
        // create circle icon div
        let circleDiv = document.createElement("div");
        circleDiv.className = "circle-icon";
        circleDiv.innerHTML = task.taskCircleIcon;
 
        // create pencil icon div
        let pencilDiv = document.createElement("button");
        pencilDiv.className = "pencil-icon";
        pencilDiv.innerHTML = task.taskPencilIcon;
 
        // create trash icon div
        let trashDiv = document.createElement("button");
        trashDiv.className = "trash-icon";
        trashDiv.innerHTML = task.taskTrashIcon;
    
    // Delete a single task 
    trashDiv.addEventListener("click", function () {
     li.remove(); // remove from DOM
        deleteTaskFromLocalStorage(task.name, "activeTask"); 

           location.reload();  //Update the UI
});

     // edit a single task 
    pencilDiv.addEventListener("click", function () {
        inputEntryValue.value = task.name; // get task name to input task name 
        deleteTaskFromLocalStorage(task.name, "activeTask"); 
        // location.reload();  //Update the UI
      
     
});
        // create control-btn
        let controlBtn = document.createElement("div");
        controlBtn.className = "control-btn";
    



        activeTask.appendChild(ul);
        ul.appendChild(circleDiv);
        ul.appendChild(li);
        li.appendChild(taskNameDiv);
        li.appendChild(creationDateSec);
        creationDateSec.appendChild(createDateElement);
        creationDateSec.appendChild(currentDateDiv);
        li.appendChild(deliveryDateSec);
        deliveryDateSec.appendChild(deliveryDateElement);
        deliveryDateSec.appendChild(deliveryDateDiv)
        li.appendChild(taskStatusDiv);
        taskStatusDiv.appendChild(createStatusElement);
        taskStatusDiv.appendChild(activeTaskBtn);
        li.appendChild(controlBtn);
        controlBtn.appendChild(pencilDiv) && controlBtn.appendChild(trashDiv);
        
     
    
    
        inputEntryValue.value = "";   // clear text input
        deliveryDateValue.value = ""; // clear date input
    
    

}


// Create pending task
function addPendingTaskToList() {


    // current date
    let currentDate = new Date().toLocaleDateString("en-US");
    let deliveryDate = new Date(deliveryDateValue.value).toLocaleDateString("en-US");

    // check if inputEntryValue field is empty && if delivery date is not less then task creation date
    if (
   inputEntryValue.value.length > 3 ||       // task name at least 3 chars
   deliveryDate instanceof Date &&  // valid date
   deliveryDate >= currentDate  &&           // not before today
   deliveryDate <= maxDate // not after 2027
) {

        const task = {
            name: inputEntryValue.value,
            creationDate: currentDate,
            deliveryDate: deliveryDate,
            status: "pending",
            taskCircleIcon: circleIcon,
            taskPencilIcon: pencilIcon,
            taskTrashIcon: trashIcon,       
       
        }

           // Render UI
        renderPendingTask(task);
        // Save it
        saveTaskToLocalStorage(task, "pendingTask");
       
    } else {
        alert(`Please enter task in the box and make sure delivery's date is greater then or equal to today's date`)

        console.log("User didn't input the correct data");
        
    }
    location.reload();
}

// render pending task
function renderPendingTask(task) {
    // build DOM elements here (same as you did before)
    // but instead of inputEntryValue.value, use task.name, task.creationDate, task.deliveryDate


    // create current date element 
    let currentDateDiv = document.createElement("div");
    currentDateDiv.className = 'creation-date'
    currentDateDiv.textContent = task.creationDate;

    let creationDateText = "creation date";
    let createDateElement = document.createElement("h6")
    createDateElement.textContent = creationDateText;

    // create delivery date section
    let creationDateSec = document.createElement('div');
    creationDateSec.className = 'creation-date-sec';


    // Create delivery date element
    let deliveryDateText = "delivery date";
    let deliveryDateElement = document.createElement("h6")
    deliveryDateElement.textContent = deliveryDateText;
    
    let deliveryDateDiv = document.createElement("div");
    deliveryDateDiv.className = 'delivery-date';
    deliveryDateDiv.textContent = new Date(task.deliveryDate).toLocaleDateString("en-US");

        //  task name div
    let taskNameDiv = document.createElement("div");
    taskNameDiv.className = "task-name";
    taskNameDiv.textContent = task.name;

   
    // check if date is invalid  
    if (task.deliveryDate === "Invalid Date") {
        deliveryDateDiv.textContent = task.deliveryDate +  "!" ;
        deliveryDateDiv.style.color = "red";
        deliveryDateDiv.style.fontWeight = "bold";
        taskNameDiv.style.textDecoration = "line-through"
    }
    // create delivery date section
    let deliveryDateSec = document.createElement('div');
    deliveryDateSec.className = 'delivery-date-sec';

       
    let createStatusElement = document.createElement("h6")
    createStatusElement.textContent = task.status;
          
    // create status button
    let pendingTaskBtn = document.createElement("button");
    pendingTaskBtn.className = ("pending-task-btn");
    pendingTaskBtn.textContent = task.status;

    // Create status div
    let taskStatusDiv = document.createElement('div');
    taskStatusDiv.className = "task-status";
    
    // Create elements
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    li.className = "task";
 
    // create circle icon div
    let circleDiv = document.createElement("div");
    circleDiv.className = "circle-icon";
    circleDiv.innerHTML = task.taskCircleIcon;
 
    // create pencil icon div
    let pencilDiv = document.createElement("button");
    pencilDiv.className = "pencil-icon";
    pencilDiv.innerHTML = task.taskPencilIcon;
 
    // create trash icon div
    let trashDiv = document.createElement("button");
    trashDiv.className = "trash-icon";
    trashDiv.innerHTML = task.taskTrashIcon;
    
    // Delete a single task 
    trashDiv.addEventListener("click", function () {
        li.remove(); // remove from DOM
        deleteTaskFromLocalStorage(task.name, "pendingTask");

        location.reload();  //Update the UI
    });

     // edit a single task 
    pencilDiv.addEventListener("click", function () {
        inputEntryValue.value = task.name; // get task name to input task name 
        deleteTaskFromLocalStorage(task.name, "pendingTask"); 
        // location.reload();  //Update the UI
      
     
});

    // create control-btn
    let controlBtn = document.createElement("div");
    controlBtn.className = "control-btn";
    

    pendingTask.appendChild(ul);
    ul.appendChild(circleDiv);
    ul.appendChild(li);
    li.appendChild(taskNameDiv);
    li.appendChild(creationDateSec);
    creationDateSec.appendChild(createDateElement);
    creationDateSec.appendChild(currentDateDiv);
    li.appendChild(deliveryDateSec);
    deliveryDateSec.appendChild(deliveryDateElement);
    deliveryDateSec.appendChild(deliveryDateDiv)
    li.appendChild(taskStatusDiv);
    taskStatusDiv.appendChild(createStatusElement);
    taskStatusDiv.appendChild(pendingTaskBtn);
    li.appendChild(controlBtn);
    controlBtn.appendChild(pencilDiv) && controlBtn.appendChild(trashDiv);
        
     
    
    
    inputEntryValue.value = "";   // clear text input
    deliveryDateValue.value = ""; // clear date input

}

// Save a new task

 function saveTaskToLocalStorage(task, key) {
        let tasks = JSON.parse(localStorage.getItem(key)) || [];
        tasks.push(task);
        localStorage.setItem(key, JSON.stringify(tasks));
}

// clear all tasks
function clearTasksFromLocalStorage(key) {
  localStorage.removeItem(activeTask); // delete only that category
//   localStorage.removeItem(activeTask);  delete only that category
}

window.onload = function () {
  let activeTasks = JSON.parse(localStorage.getItem("activeTask")) || [];
  activeTasks.forEach(task => renderActiveTask(task));

  let pendingTasks = JSON.parse(localStorage.getItem("pendingTask")) || [];
    pendingTasks.forEach(task => renderPendingTask(task));
    
  let closedTasks = JSON.parse(localStorage.getItem("closedTask")) || [];
  closedTasks.forEach(task => renderClosedTask(task));
};


function deleteTaskFromLocalStorage(taskName, key) {
  let tasks = JSON.parse(localStorage.getItem(key)) || [];

  // filter out the task by name
  tasks = tasks.filter(task => task.name !== taskName);

  // save back to localStorage
  localStorage.setItem(key, JSON.stringify(tasks));
}



// Get the element from the array and update it in the input field
function editTaskFromLocalStorage(taskName, key) {
    let tasks = JSON.parse(localStorage.getItem(key))
   
  // filter out the task by name
  tasks = tasks.filter(task => task.name !== taskName);

     inputEntryValue.value = tasks;
  // save back to localStorage
  localStorage.setItem(key, JSON.stringify(tasks));
}