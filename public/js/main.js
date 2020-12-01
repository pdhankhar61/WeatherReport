const temp_data = document.getElementById("temp_val");
const sumbitBtn = document.getElementById("submit_btn");
const cityNameSearch = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_icon = document.getElementById("temp_icon");
const hide = document.getElementsByClassName("middle_layer");
const today_date = document.getElementById("today_date");
const curDay = document.getElementById("day");
const getInfo = async (event) => {
  event.preventDefault();
  if (!cityNameSearch.value) {
    hide[0].classList.add("data_hide");
    city_name.innerText = "Please enter CITY name";
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameSearch.value}&appid=b56da6ddc5e30cdefadc70961ffcc7f5`;
      const data = await fetch(url);
      const finalData = await data.json();
      const array = [finalData];

      city_name.innerText = array[0].name.toString();
      temp_data.innerText = Math.round(array[0].main.temp - 273.15);
      if (array[0].weather[0].main.toString() === "Haze"||array[0].weather[0].main.toString()==="Smoke") {
        temp_icon.classList.remove(temp_icon.classList.item(1));
        temp_icon.classList.add("fa-smog");
      } else if (array[0].weather[0].main.toString() === "Clear") {
        temp_icon.classList.remove(temp_icon.classList.item(1));
        temp_icon.classList.add("fa-moon");
      } else if (array[0].weather[0].main.toString() === "Clouds") {
        temp_icon.classList.remove(temp_icon.classList.item(1));
        temp_icon.classList.add("fa-cloud");
      }
      hide[0].classList.remove("data_hide");
    } catch {
      hide[0].classList.add("data_hide");
      city_name.innerText = "No city exists for this name";
    }
  }
};

const getcurrentDay = () => {
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  let currentTime = new Date();
  today_date.innerText =
    currentTime.getDate() +
    " / " +
    (currentTime.getMonth()+1) +
    " / " +
    currentTime.getFullYear();
  return weekday[currentTime.getDay()];
};
curDay.innerHTML = getcurrentDay();
sumbitBtn.addEventListener("click", getInfo);
