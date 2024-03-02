function addTask() {
    var InputTask = document.getElementById("InputTask");
    var taskList = document.getElementById("taskList");
  
    if (InputTask.value === '') {
      alert("Please enter a task!");
      return;
    }
  
    var li = document.createElement("li");
    li.textContent = InputTask.value;
    taskList.appendChild(li);
  
    InputTask.value = '';
  
    li.onclick = function() {
      this.parentNode.removeChild(this);
    };
  }
  