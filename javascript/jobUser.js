"use strict";

let jb = document.getElementById("post-job");

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
              <span class="time_tag"
              ><ion-icon name="time-outline"></ion-icon>${data.worktime}</span
              >
              <span class="country_tag"
              ><ion-icon name="location-outline"></ion-icon>${data.country}</span
              >
              </div>
              </div>
              <div class="buttons">
              <a href="apply.html" class="btn">Apply Now</a>
              <a href="javascript:void()" class="btn btn-descreption">View Descreption</a>
              </div>
        </div>
        <div class="job_descrption">
        <p>${data.description}</p>
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
