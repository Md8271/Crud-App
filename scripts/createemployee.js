const formData = document.getElementById("employee-form");
console.log(formData);

const fname = document.getElementById("fname");
const mname = document.getElementById("mname");
const lname = document.getElementById("lname");

const maritalstatus = document.getElementById("maritalstatus");
const dob = document.getElementById("dob");

const email = document.getElementById("email");

const mobileno = document.getElementById("mobileno");

const homeaddress = document.getElementById("homeaddress");
const city = document.getElementById("city");
const state = document.getElementById("state");

const country = document.getElementById("country");
const zipcode = document.getElementById("zipcode");

formData.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("form submit");

  const EmployeeData = {
    firstName: fname.value.trim(),
    middleName: mname.value.trim(),
    lastName: lname.value.trim(),
    Marital: maritalstatus.value.trim(),
    Dob: dob.value.trim(),
    Email: email.value.trim(),
    Mobile: mobileno.value.trim(),
    Address: {
      Home: homeaddress.value.trim(),
      City: city.value.trim(),
      State: state.value.trim(),
      country: country.value.trim(),
      Zip: zipcode.value.trim(),
    },
  };

  try {
    let resp = await fetch("http://localhost:5000/employees", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(EmployeeData),
    });
    console.log(resp);
    window.location.href = "http://127.0.0.1:5500/pages/allemployee.html";
  } catch (err) {
    console.log(err);
    alert("Something went wrong ❌");
  }
});

console.log(window);

//!ye maine khud try kiya hai
// const api_url = "http://localhost:5000/employees";

// async function getData(url) {
//   let res = await fetch(url);
//   let data = await res.json();
//   displayData(data);
// }
// getData(api_url);

// function displayData(employeeData) {
//   employeeData.forEach((ele) => {
//     let {
//       firstName,
//       lastName,
//       Address: { City },
//     } = ele;
//     document.writeln(`Name is ${firstName}${lastName} and city is${City}`);
//   });
// }

// function setData(data) {
//   let Data = JSON.stringify(data);
//   localStorage.setItem("UserData", Data);
// }
