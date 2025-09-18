// TODO: getting element to js

// input
let inputEntryValue = document.getElementById("input-entry-value");
// Status Btns
let activeBtn = document.querySelector(".active-btn");
let pendingBtn = document.querySelector(".pending-btn");
let closedBtn = document.querySelector(".closed-btn");
let addBtn = document.querySelector(".add-btn");
// Select delivery date
let SelectDeliveryDate = document.getElementById("select-delivery-date").toLocaleDateString("en-US");

// get the active task container
const activeTask = document.getElementById("active-task");
const pendingTask = document.getElementById("pending-task");

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


function addActiveTaskToList() {


    // check if inputEntryValue field is empty && if delivery date is not less then task creation date

    if (inputEntryValue.value.length > 3 &&  SelectDeliveryDate >= new Date().toLocaleDateString("en-US"))  {

        // current date
    const currentDate = new Date().toLocaleDateString("en-US");
        const deliveryDate = SelectDeliveryDate.value;

        // create current date element 
        const currentDateDiv = document.createElement("div");
        currentDateDiv.className = 'creation-date'
        currentDateDiv.textContent = currentDate;

        const creationDate = "creation date";
        const createDateElement = document.createElement("h6")
        createDateElement.textContent = creationDate;

        // create delivery date section
        const creationDateSec = document.createElement('div');
        creationDateSec.className = 'creation-date-sec';


        // Create delivery date element
        const deliveryDateText = "delivery date";
        const deliveryDateElement = document.createElement("h6")
        deliveryDateElement.textContent = deliveryDateText;
    
        const deliveryDateDiv = document.createElement("div");
        deliveryDateDiv.className = 'delivery-date';
        deliveryDateDiv.textContent = deliveryDate;

        // create delivery date section
        const deliveryDateSec = document.createElement('div');
        deliveryDateSec.className = 'delivery-date-sec';

        const status = "status";
        const createStatusElement = document.createElement("h6")
        createStatusElement.textContent = status;
          
        // create status button
        const activeTaskBtn = document.createElement("button");
        activeTaskBtn.className = ("active-task-btn");
        activeTaskBtn.textContent = "active";

        // Create status div
        const taskStatusDiv = document.createElement('div');
        taskStatusDiv.className = "task-status";

        // Create elements
        const ul = document.createElement("ul");
        const li = document.createElement("li");
        li.className = "task";
 
        // create circle icon div
        const circleDiv = document.createElement("div");
        circleDiv.className = "circle-icon";
        circleDiv.innerHTML = circleIcon;
 
        // create pencil icon div
        const pencilDiv = document.createElement("div");
        pencilDiv.className = "pencil-icon";
        pencilDiv.innerHTML = pencilIcon;
 
        // create trash icon div
        const trashDiv = document.createElement("div");
        trashDiv.className = "trash-icon";
        trashDiv.innerHTML = trashIcon;

        // create control-btn
        const controlBtn = document.createElement("div");
        controlBtn.className = "control-btn";
    
        //  task name div
        const taskNameDiv = document.createElement("div");
        taskNameDiv.className = "task-name";
        taskNameDiv.textContent = inputEntryValue.value;



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
        pencilDiv.appendChild(pencilIcon) && trashDiv.appendChild(trashIcon);
     



        inputEntryValue.value = "";
        SelectDeliveryDate.value = "mm/dd/yyyy";
    } else {
        alert(`Please enter task in the box and make sure delivery is less greater the or equal to today's date`)

        console.log("User didn't input the correct data");
        
    }
   
}


function addPendingTaskToList() {
   


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
    taskStatusDiv.appendChild(activeTaskBtn);
    li.appendChild(controlBtn);
    controlBtn.appendChild(pencilDiv) && controlBtn.appendChild(trashDiv) ;
    pencilDiv.appendChild(pencilIcon) && trashDiv.appendChild(trashIcon);
     



    inputEntryValue.value = "";
    SelectDeliveryDate.value = "mm/dd/yyyy";

        createDefaultElement();

  
}



// Lets create another function that will keep all the default js for reusability 


function createDefaultElement() {
   

    return;
    
}