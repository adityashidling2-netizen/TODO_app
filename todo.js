let input = document.getElementById("inpbox");
let msg = document.getElementById("notask");
let btn_c = document.getElementById("button-container");
let container = document.getElementById("listtasks");


function taskinput() {
    if (input.value === "") {
        msg.innerHTML = "Enter the task first....";
        setTimeout(() => {
            msg.innerHTML = "";
        }, 1000);
        return;
    }

    let tasks = document.createElement("div");
    tasks.classList.add("taskname");
    let task_text = document.createElement("span");
    task_text.classList.add("task-text");


    let delete_btn = document.createElement("button");
    delete_btn.classList.add("delete-btn");
    delete_btn.innerHTML = "🗑️";

    let edit_btn = document.createElement("button");
    edit_btn.classList.add("edit-btn");
    edit_btn.innerHTML = "✏️";

    let new_tasks = input.value.toLowerCase();

    let duplicate = false;
    container.querySelectorAll(".taskname").forEach((tasks) => {
        if (tasks.querySelector(".task-text").textContent.toLowerCase() === new_tasks) {
            msg.innerHTML = "Task already exists!";
            setTimeout(() => {
                msg.innerHTML = "";
            }, 1000);
            duplicate = true;
        }
    })

    if (!duplicate) {
        task_text.innerHTML = new_tasks;
        tasks.appendChild(task_text);
        container.appendChild(tasks);
        msg.innerHTML = "Task added...";
        setTimeout(() => {
            msg.innerHTML = "";
        }, 1000);

    }
    let all_tasks = container.querySelectorAll(".taskname").length;
    let btn_holder = document.createElement("div")
    btn_holder.classList.add("btn-holder");
    for (let i = 0; i < all_tasks; i++) {
        let current_tasks = container.querySelectorAll(".taskname")[i];

        if (current_tasks.querySelector(".delete-btn") === null) {
            btn_holder.appendChild(delete_btn);
            current_tasks.appendChild(btn_holder);
        }
        if (current_tasks.querySelector(".edit-btn") === null) {
            btn_holder.appendChild(edit_btn);
            current_tasks.appendChild(btn_holder);
        }
    }
    
    delete_btn.addEventListener("click", () => {
        tasks.remove();
    });
    edit_btn.addEventListener("click", () => {
        let edit = prompt("Edit the task:", task_text.textContent);
        if (edit !== null && edit.trim() !== "") {
            task_text.textContent = edit;
        }

    });
    input.value = "";
}
input.focus();


container.style.display = "none";
function show_task() {
    let count = container.querySelectorAll(".taskname").length;
    if (count === 0) {
        msg.innerHTML = "No tasks to show!...";
        setTimeout(() => {
            msg.innerHTML = "";
        }, 1000);
        container.style.display = "none";
    }
    else {
        container.style.display = "block";
    }
}

let hidetask = document.getElementById("cancel-btn");
hidetask.addEventListener("click", () => {
    
    container.style.display = "none";
});

function enter_task(event) {
    if (event.key === "Enter") {
        taskinput();
    }
}
