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

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function getEditEmployee() {
  try {
    let resp = await fetch(`https://crud-app-83gv.onrender.com/employees/${id}`);
    let data = await resp.json();
    console.log(data);

    //pre fill input fields
    fname.value = data.firstName;
    mname.value = data.middleName;
    lname.value = data.lastName;
    maritalstatus.value = data.Marital;
    dob.value = data.Dob;
    email.value = data.Email;
    mobileno.value = data.Mobile;
    homeaddress.value = data.Address.Home;
    city.value = data.Address.City;
    state.value = data.Address.State;
    country.value = data.Address.country;
    zipcode.value = data.Address.Zip;
  } catch (err) {
    console.log(err);
    alert("something went wrong!");
  }
}
window.addEventListener("DOMContentLoaded", () => {
  getEditEmployee();
});

formData.addEventListener("submit", async (e) => {
  e.preventDefault();

  //create new updated emp data

  const updateEmployeeData = {
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
    let resp = await fetch(
      `https://crud-app-83gv.onrender.com/employees/${id}`,
      {
        method: "PUT",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(updateEmployeeData),
      },
    );
    console.log(resp);
  } catch (err) {
    console.log(err);
  }
});
