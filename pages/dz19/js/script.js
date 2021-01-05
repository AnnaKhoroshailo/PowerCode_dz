function openModal() {
	document.getElementById("todoTask").value="";
	let modal=document.getElementById("todo__modal");
	modal.classList.add("todo__modal--active");
}

function closeModal() {
	let modal=document.getElementById("todo__modal");
	modal.classList.remove("todo__modal--active");
}

function addTask() {
	let taskName=document.getElementById("todoTask").value;
	if(taskName) {
		let modal=document.getElementById("todo__modal");
		modal.classList.remove("todo__modal--active");
		let tasks=document.getElementById("todo__tasks-list");
		let taskItem=document.createElement("li");
		taskItem.classList.add("todo__task-item");
		let task=document.createElement("label");
		task.innerText=taskName;
		let check=document.createElement("input");
		check.type = "checkbox";
		check.name = "completed";
		check.classList.add("todo__form-check");
		task.appendChild(check);
		taskItem.appendChild(task);
		tasks.appendChild(taskItem);
		let listTasks=document.getElementById("todo__tasks");
		listTasks.appendChild(tasks);
		check.addEventListener("change", completed);
	}
}

function completed(e) {
	if(e.target.checked == true) {
		let taskItem=e.target.parentNode.parentNode;
		taskItem.classList.add("todo__completed-task");
		taskItem.remove();
        e.target.classList.add("todo__completed-check");
        let completedTasks=document.getElementById("todo__completed-list");
        completedTasks.appendChild(taskItem);
        let deleteBut=document.createElement("button");
        deleteBut.innerText="Удалить";
        deleteBut.type="button";
        deleteBut.classList.add("todo__button");
        deleteBut.classList.add("todo__button--m0");
        taskItem.appendChild(deleteBut);
        deleteBut.addEventListener("click", deleteTask);
    }
}

function deleteTask(e) {
	let taskItem=e.target.parentNode;
	taskItem.remove();
	console.log(e);
}