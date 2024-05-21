let show = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('btn'));

buttons.map((btn) => {
    btn.addEventListener('click', value);
})

function value(e) {
    let key = e.target.innerText;

    if (key === 'AC') {
        show.innerText = '';
    } else if (key === '=') {
        show.innerText = eval(show.innerText);
    } else if (key === 'del') {
        show.innerHTML = show.innerText.slice(0, -1);

    }
    else if (key == "Sqrt") {
        show.innerText = Math.sqrt(parseFloat(show.innerText));
    }
    else if (key === "pi") {
        show.innerText = Math.sqrt(parseFloat(show.innerText)); 
    } else if (key === "1/x") {
        show.innerText = 1 / parseFloat(show.innerText);
    }
    else if (key === "Sin") {
        show.innerText = Math.sin(parseFloat(show.innerText));
    } else if (key === "Cos") {
        show.innerText = Math.cos(parseFloat(show.innerText));
    } else if (key === "Tan") {
        show.innerText = Math.tan(parseFloat(show.innerText));
    } else {
        show.innerText += key;
    }
    
    
}



// let formTag = document.querySelector("form");
// let tableTag = document.querySelector("table");
// let tbodyTag = document.querySelector("tbody");

// function Add(details) {
//     details.preventDefault(); // prevents page reloading

//     let name = document.querySelector(".name").value;
//     let email = document.querySelector(".email").value;
//     let number = document.querySelector(".number").value;

//     tbodyTag.innerHTML += `
//         <tr>
//           <td>${name}</td>
//           <td>${email}</td>
//           <td>${number}</td>
//           <td><button class="removeBtn">Remove</button></td>
//         </tr>
//         `;
// }
// formTag.addEventListener("submit", Add);

// function Remove(details) {
//     if (details.target.classList.contains("removeBtn")) {
//         details.target.parentElement.parentElement.remove();
//     }
// }