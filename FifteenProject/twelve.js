const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.format');
const items = document.querySelectorAll('.deadline h4');

const futureDate = new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000); 

function format(item) {
  return item < 10 ? `0${item}` : item;
}

function updateCountdown() {
  const today = new Date();
  const t = futureDate - today;

  if (t <= 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired!</h4>`;
    return;
  }

  const days = Math.floor(t / (24 * 60 * 60 * 1000));
  const hours = Math.floor((t % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const minutes = Math.floor((t % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((t % (60 * 1000)) / 1000);

  items[0].textContent = format(days);
  items[1].textContent = format(hours);
  items[2].textContent = format(minutes);
  items[3].textContent = format(seconds);
}

updateCountdown();

const countdown = setInterval(updateCountdown, 1000);
