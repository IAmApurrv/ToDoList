const inputBox = document.getElementById("myInput");
const listContainer = document.getElementById("myUL");

// Create a new list item when clicking on the "Add" button
function newElement() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        var li = document.createElement("li");  // Create a new <li> element
        li.innerHTML = inputBox.value;  // Set the innerHTML of the <li> to the value of the input box
        listContainer.appendChild(li);  // Append the <li> to the list container
        // document.getElementById("myUL").appendChild(li);

        let span = document.createElement("span");  // Create a <span> element
        span.innerHTML = "\u00d7";  // Set the innerHTML of the <span> to '×' (multiplication sign)
        span.className = "close";
        li.appendChild(span);   // Append the <span> to the <li>
    }
    inputBox.value = '';    // Clear the input box after adding a task

    saveData(); // Save the updated data to local storage
}

// Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     myNodelist[i].appendChild(span);
// }

// Click on a close button to hide the current list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.classList.contains('close')) {
        var listItem = ev.target.parentElement;
        listItem.remove();
        saveData(); // Update local storage after removing a task
    }
}, false);

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        saveData(); // Update local storage after checking/unchecking a task
    }
}, false);


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();


