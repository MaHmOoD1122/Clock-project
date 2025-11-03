const clock = document.querySelector(".clock");
const day = document.querySelector(".day");
const date = document.querySelector(".date");
const btn = document.querySelector(".btn");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

const body = document.querySelector("body");

const updateTime = function () {
  const now = new Date();
  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const time = new Intl.DateTimeFormat("en-US", options).format(now);
  clock.textContent = time;
};

setInterval(updateTime, 1000);
updateTime();

btn.addEventListener("click", function () {
  body.classList.toggle("light-mode");
  clock.classList.toggle("black-shadow");
  btn.classList.toggle("btn-light-mode");
  sun.classList.toggle("hidden");
  moon.classList.toggle("hidden");
});

///////Updating day/////////
const updateDay = new Date();
const options = {
  weekday: "long",
};
const Day = new Intl.DateTimeFormat("en-US", options).format(updateDay);
day.textContent = Day;

///////Updating date/////////
const updateDate = new Date();
const options2 = {
  day: "numeric",
  month: "long",
  year: "numeric",
};
const Date2 = new Intl.DateTimeFormat("en-US", options2).format(updateDate);

date.textContent = Date2;
