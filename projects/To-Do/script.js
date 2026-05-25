document.addEventListener("DOMContentLoaded", function (){
    var form = document.getElementById("task-form");
    var input = document.getElementById("task-input");
    var list = document.getElementById("task-list");
    var progress = document.getElementById("progress");
    var date = document.getElementById("date");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        var text = input.value;

        if (text === "") {
            return;
        }

        // create list item
        var li = document.createElement("li");
        li.className = "task";

        // task text
        var span = document.createElement("span");
        span.innerHTML = text;

        // date (if user selected)
        var small = document.createElement("small");

        if (date.value !== "") {
            small.innerHTML = "📅 " + date.value;
            
        } else {
            small.innerHTML = "📅 No date selected";
        }

        // delete button
        var btn = document.createElement("button");
        btn.innerHTML = "X";
        btn.className = "delete-btn";

        // add everything
        li.appendChild(span);
        li.appendChild(small);
        li.appendChild(btn);

        list.appendChild(li);

        input.value = "";

        // mark as completed instead of deleting

        btn.onclick = function () {
            li.classList.toggle("completed");
            update();
        };


        // mark complete
        span.onclick = function () {
            if (li.classList.contains("completed")) {
                li.classList.remove("completed");
            } else {
                li.classList.add("completed");
            }
            update();
        };

        update();
    });

    function update() {
        var all = document.querySelectorAll(".task");
        var done = document.querySelectorAll(".completed");

        progress.innerHTML = done.length + " / " + all.length;

        if (all.length > 0 && done.length === all.length) {
            alert("🎉 done!");
        }
    }
})