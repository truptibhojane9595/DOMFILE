let formTag = document.querySelector("form");
let tableTag = document.querySelector("table");
let tbodyTag = document.querySelector("tbody");

function Add(details) {
    details.preventDefault();

    let name = document.querySelector(".name").value.trim();
    let email = document.querySelector(".email").value.trim();
    let number = document.querySelector(".number").value.trim();

    if (name === "" || email === "" || number === "") {
        alert("All fields are required!");
        return;
    }

    if (number.length !== 10 || isNaN(number)) {
        alert("Phone number must be exactly 10 digits.");
        return;
    }

    let isDuplicate = false;
    let rows = tbodyTag.querySelectorAll("tr");

    rows.forEach(row => {
        let rowEmail = row.cells[1].textContent;
        let rowNumber = row.cells[2].textContent;

        if (email === rowEmail || number === rowNumber) {
            isDuplicate = true;
        }
    });

    if (isDuplicate) {
        alert("Email or phone number already exists.");
        return;
    }

    tbodyTag.innerHTML += `
        <tr>
          <td>${name}</td>
          <td>${email}</td>
          <td>${number}</td>
          <td><button class="removeBtn">Remove</button></td>
        </tr>
    `;

    formTag.reset();
}

formTag.addEventListener("submit", Add);

function Remove(details) {
    if (details.target.classList.contains("removeBtn")) {
        details.target.parentElement.parentElement.remove();
    }
}

tableTag.addEventListener("click", Remove);
