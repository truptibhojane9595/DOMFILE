if ("Notification" in window) {
    Notification.requestPermission().then(function (permission) {
        if (permission !== "granted") {
            alert("Please allow notification access!");
            location.reload();
        }
    });
}

var reminders = [];

function scheduleReminder() {
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var dateTime = document.getElementById("dateTime").value;

    if (!title || !description || !dateTime) {
        alert("Please fill in all fields.");
        return;
    }

    var scheduleTime = new Date(dateTime);
    var currentTime = new Date();
    var timeDifference = scheduleTime - currentTime;

    if (timeDifference > 0) {
        addReminder(title, description, scheduleTime);
        var timeoutId = setTimeout(function () {
            var notification = new Notification(title, {
                body: description,
                requireInteraction: true,
            });
            document.getElementById("sound").play();
        }, timeDifference);

        reminders.push({ timeoutId: timeoutId, scheduleTime: scheduleTime });
        updateCountdowns();
    } else {
        alert("The scheduled time is in the past.");
    }
}

function addReminder(title, description, scheduleTime) {
    var tableBody = document.getElementById("reminderList");
    var row = tableBody.insertRow();
    var titleCell = row.insertCell(0);
    var descriptionCell = row.insertCell(1);
    var dateTimeCell = row.insertCell(2);
    var countdownCell = row.insertCell(3);
    var actionCell = row.insertCell(4);

    titleCell.innerHTML = title;
    descriptionCell.innerHTML = description;
    dateTimeCell.innerHTML = scheduleTime.toLocaleString();
    countdownCell.innerHTML = '<span class="countdown"></span>';
    actionCell.innerHTML = '<button onclick="deleteReminder(this)">Delete</button>';
}

function deleteReminder(button) {
    var row = button.closest("tr");
    var index = row.rowIndex - 1;

    clearTimeout(reminders[index].timeoutId);
    reminders.splice(index, 1);
    row.remove();
}

function updateCountdowns() {
    var countdownElements = document.getElementsByClassName("countdown");

    for (var i = 0; i < reminders.length; i++) {
        var timeDifference = reminders[i].scheduleTime - new Date();

        if (timeDifference < 0) {
            countdownElements[i].innerHTML = "Time's up!";
        } else {
            var hours = Math.floor(timeDifference / (1000 * 60 * 60));
            var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            countdownElements[i].innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
        }
    }

    setTimeout(updateCountdowns, 1000);
}

updateCountdowns();
