console.log("ab9");
let numPeople = document.querySelector(".people-input");
let bill = document.querySelector(".bill-input");
const allTip = document.querySelectorAll(".tip");
const amount = document.querySelector(".amount");
const total = document.querySelector(".total");
const customTip = [];
const chosenTip = [];
Array.from(allTip).map((elem) => {
  if (elem.classList.contains("active-input")) {
    elem.addEventListener("keyup", (e) => {
      customTip.push(elem.value);
    });
  } else {
    elem.addEventListener("click", (e) => {
      chosenTip.push(elem.textContent);
    });
  }
});

numPeople.addEventListener("keyup", (event) => {
  const numPeopleValue = Number(numPeople.value);
  const billValue = Number(bill.value);

  if (customTip.length > 0) {
    const ct = Number(customTip.at(-1)) / 100;
    const tipPerPerson = (billValue * ct) / numPeopleValue;
    const totalTPP = billValue / numPeopleValue + tipPerPerson;
    amount.textContent = tipPerPerson.toFixed(2);
    total.textContent = totalTPP.toFixed(2);
  } else if (chosenTip.length > 0) {
    const ctp = chosenTip
      .slice(-1)
      .join("")
      .split("")
      .filter((num) => num != "%")
      .join("");
    const ctd = Number(ctp) / 100;
    const tipPerPerson = (billValue * ctd) / numPeopleValue;
    const totalTPP = billValue / numPeopleValue + tipPerPerson;
    total.textContent = totalTPP.toFixed(2);
    amount.textContent = tipPerPerson.toFixed(2);
  }
});

document.querySelector("a").addEventListener("click", (e) => {
  total.textContent = "0.00";
  amount.textContent = "0.00";
  bill.value = "";
  numPeople.value = "";
  document.querySelector(".active-input").value = "";
});
