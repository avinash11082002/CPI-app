
const add = document.querySelector("#add");
const courseCode = document.querySelector("#course-code");
const credit = document.querySelector("#credit");
const grade = document.querySelector("#grade");
const tbody = document.querySelector("#tbody");
const tfoot = document.querySelector("#tfoot");
const table = document.querySelector("#table");
const calcGp = document.querySelector("#calc-gp");
const clear = document.querySelector("#clear");
let gpArry = [];

add.addEventListener("click", () => {
  if (
    courseCode.value === "" ||
    credit.value <= 0 ||
    grade.selectedIndex === 0
  ) {
    alert("Wrong input,check and try again");
  } else {
    const tr = document.createElement("tr");
    const tdCourseCode = document.createElement("td");
    tdCourseCode.innerHTML = courseCode.value;
    const tdcredit = document.createElement("td");
    tdcredit.innerHTML = credit.value;
    const tdGrade = document.createElement("td");
    tdGrade.innerHTML = grade.options[grade.selectedIndex].text;
    tr.appendChild(tdCourseCode);
    tr.appendChild(tdcredit);
    tr.appendChild(tdGrade);
    tbody.appendChild(tr);
    table.classList.remove("display-none");
    calcGp.classList.remove("display-none");
    clear.classList.remove("display-none");
    gpArry.push({
      credit: credit.value,
      grade: grade.options[grade.selectedIndex].value,
    });
    console.log(gpArry);
    courseCode.value = "";
    credit.value = "";
    grade.selectedIndex = "0";
  }
});

calcGp.addEventListener("click", () => {
  let credit = 0,
    productOfUnitLoadsAndGrades = 0,
    sumOfProductOfUnitLoadsAndGrades = 0;

  gpArry.forEach((result) => {
    credit += parseInt(result.credit);
    productOfUnitLoadsAndGrades =
      parseInt(result.credit) * parseInt(result.grade);
    sumOfProductOfUnitLoadsAndGrades += productOfUnitLoadsAndGrades;
  });
  const tr = document.createElement("tr");

  tdTotalUnitLoad = document.createElement("td");
  tdTotalUnitLoad.innerHTML = `your total credit is ${credit}`;

  tdGpa = document.createElement("td");
  tdGpa.setAttribute("colspan", "2");
  tdGpa.innerHTML = `your CPI is ${(
    sumOfProductOfUnitLoadsAndGrades / credit
  ).toFixed(2)} `;

  tr.appendChild(tdTotalUnitLoad);
  tr.appendChild(tdGpa);
    if (tfoot.querySelector("tr") !== null) {
        tfoot.querySelector("tr").remove();
    }
  tfoot.appendChild(tr);
});

clear.addEventListener("click", () => {
  gpArry = [];
  tbody.querySelectorAll("*").forEach((child) => child.remove());
  if (tfoot.querySelector("tr") !== null) {
    tfoot.querySelector("tr").remove();
  }

  table.classList.add("display-none");
  calcGp.classList.add("display-none");
  clear.classList.add("display-none");
});