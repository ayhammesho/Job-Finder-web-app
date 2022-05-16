"use strict";

let jb = document.getElementById("post-job");
const countryFilter = document.getElementById("country");
const workTimeFilter = document.getElementById("time");
let search = document.getElementById("search");

// FOR DISPLAYING THE JOB CARD
const addJob = function (data) {
  let content = `
  <div class="job_card container">
  <div class="card">
  <ion-icon class="company_img" name="code-slash-outline"></ion-icon>

  <div class="job_info">
  <h2 id="job_name" class="heading_terneray">${data.jobName}</h2>
  <div>
  <h3 class="company_name">${data.companyName}</h3>
  </div>
  <div class="tags">
              <span class="time_tag" value=${data.worktime}
              ><ion-icon name="time-outline"></ion-icon>${data.worktime}</span
              >
              <span class="country_tag" value=${data.country}
              ><ion-icon name="location-outline"></ion-icon>${
                data.country
              }</span
              >
              </div>
              </div>
              <div class="buttons">
              <a href="apply.html" class="btn">Apply Now</a>
              <a href="javascript:void()" class="btn btn-descreption">View Descreption</a>
              </div>
        </div>
        <div class="job_descrption">
        <p class="desc_text">${
          data.description.includes("\n")
            ? data.description.replaceAll("\n", "<br>")
            : data.description
        }</p>
        </div>
        </div>`;

  jb.innerHTML += content;
};

const jon = function () {
  let jobs = localStorage.getItem("jobs");
  if (jobs != null) {
    jobs = JSON.parse(jobs);
    for (let j = 0; j < jobs["jobs"].length; j++) {
      addJob(jobs["jobs"][j]);
    }
  }
};
jon();

// FOR SHOWING THE DESCRIPTION OF THE JOB
const showDescription = document.querySelectorAll(".btn-descreption");
let descText = document.querySelectorAll(".job_descrption");

for (let i = 0; i < showDescription.length; i++) {
  showDescription[i].addEventListener("click", function () {
    if (showDescription[i].textContent == "View descreption") {
      descText[i].style.display = "block";
      showDescription[i].textContent = "Hide descreption";
    } else {
      showDescription[i].textContent = "View descreption";
      descText[i].style.display = "none";
    }
  });
}

const jobCards = document.querySelectorAll(".job_card");
const countryTag = document.querySelectorAll(".country_tag");
const timeTag = document.querySelectorAll(".time_tag");

// FILTER
const dd = function () {
  const selectedCountry = countryFilter.value;
  const selectedTime = workTimeFilter.value;
  for (let v = 0; v < jobCards.length; v++) {
    if (
      selectedCountry == countryTag[v].textContent &&
      selectedTime == timeTag[v].textContent
    ) {
      jobCards[v].style.display = "block";
    } else if (
      selectedCountry == "" &&
      selectedTime == timeTag[v].textContent
    ) {
      jobCards[v].style.display = "block";
    } else if (
      selectedTime == "" &&
      selectedCountry == countryTag[v].textContent
    ) {
      jobCards[v].style.display = "block";
    } else if (selectedTime == "" && selectedCountry == "") {
      jobCards[v].style.display = "block";
    } else jobCards[v].style.display = "none";
  }
};

// SEARCH BAR
search.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  jobCards.forEach((jobCard) => {
    const jobTitleSearch = jobCard
      .querySelector("#job_name")
      .textContent.toLowerCase();
    const jobDescSearch = jobCard
      .querySelector(".desc_text")
      .textContent.toLowerCase();
    const isVisible =
      jobTitleSearch.includes(value) || jobDescSearch.includes(value);
    if (isVisible) {
      return (jobCard.style.display = "block");
    } else return (jobCard.style.display = "none");
  });
});
