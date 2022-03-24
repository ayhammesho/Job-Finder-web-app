const country = document.querySelector("#country");
const worktime = document.querySelector("#worktime");
const jobName = document.querySelector("#jobname");
const description = document.querySelector("#descreption");
const postBtn = document.querySelector(".post");
let companyName = localStorage.getItem("login");
companyName = JSON.parse(companyName);

// FOR STORING THE JOB CARD IN LOCAL STORAGE
const postJob = function () {
  let storage = localStorage.getItem("jobs");
  if (storage == null) {
    let obj = { jobs: [] };
    obj["jobs"].push({
      country: country.value,
      worktime: worktime.value,
      jobName: jobName.value,
      description: description.value,
      companyName: companyName.full_name,
    });
    localStorage.setItem("jobs", JSON.stringify(obj));
    setTimeout(() => {
      location.replace("main_company.html");
    }, 500);
  } else {
    let obj = localStorage.getItem("jobs");
    obj = JSON.parse(obj);
    obj["jobs"].push({
      country: country.value,
      worktime: worktime.value,
      jobName: jobName.value,
      description: description.value,
      companyName: companyName.full_name,
    });
    localStorage.setItem("jobs", JSON.stringify(obj));
    setTimeout(() => {
      location.replace("main_company.html");
    }, 500);
  }
};

postBtn.addEventListener("click", (event) => {
  postJob();
});
