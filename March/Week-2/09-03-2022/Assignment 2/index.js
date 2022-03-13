let todos = [];
let todos_description = [];


// this function will loop on the todos array and make the list.

const render = function () {
    const parent_container = document.getElementById("list_container");
    parent_container.innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
        const single_todo_item = todos[i];
        const new_li = document.createElement("li");
        new_li.innerText = single_todo_item;
        new_li.style.fontWeight = "bold";
        new_li.style.fontSize = "30px";
        parent_container.appendChild(new_li);

        const single_todo_item_description = todos_description[i];
        const new_li_dis = document.createElement("li");
        new_li_dis.innerText = single_todo_item_description;
        parent_container.appendChild(new_li_dis);
        const hr = document.createElement("hr");
        parent_container.appendChild(hr);
    }
}

// this function will add items into todos array from input FileSystemDirectoryHandle.

const add_item = function () {
    const ip = document.getElementById("todo_input");
    const ip_description = document.getElementById("todo_input_description");
    const new_todo = ip.value;
    const new_todo_description = ip_description.value;
    if (ip.value == "" || ip_description.value == "") {
        ip.style.color = "red";
        ip.placeholder = "please first type something here";
        ip_description.style.color = "red";
        ip_description.placeholder = "please first type something here";
    } else {
        ip.style.color = "#5E67E0"
        ip.placeholder = "Type your note";
        ip_description.style.color = "#5E67E0"
        ip_description.placeholder = "Type description";
        todos.push(new_todo);
        todos_description.push(new_todo_description);
        ip.value = "";
        ip_description.value = "";
        render();
    }
}

const btn = document.getElementById("btn");
btn.addEventListener("click", add_item);