async function getAllEmployee() {
  try {
    let resp = await fetch("http://localhost:5000/employees");
    let data = await resp.json();
    displayAllData(data);
  } catch (err) {
    console.log(err);
    alert("Something went wrong ❌");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  getAllEmployee();
});

const employeesNameData = document.getElementById("employees-container");
function displayAllData(allData) {
  allData.map((emp) => {
    const empCard = document.createElement("artical");
    empCard.className = "emp-card";
    empCard.innerHTML = `
       <header class="emp-header">
       <h3 class="emp-name">
       ${emp.firstName} ${emp.middleName} ${emp.lastName}
       </h3>
       <span class="emp-id">ID: ${emp.id}</span>
       </header>

    <section class="emp-info">
    <p><strong>Date of Birth:</strong>${emp.Dob}</p>
    <p><strong>Marital Status:</strong>${emp.Marital}</p>
    </section>

    <section class="emp-contact">
    <p><strong>Email:</strong>${emp.Email}</p>
    <p><strong>Phone:</strong>${emp.Mobile}</p>
    </section>


    <section class="emp-address">
    <p><strong>Address:</strong>${emp.Address.Home} ${emp.Address.City}
     ${emp.Address.State} ${emp.Address.country}-${emp.Address.Zip}</p>
    </section>

    <footer class="emp-actions">
    <button class="btn edit-btn" data-id="${emp.id}">Edit</button>
    <button class="btn delete-btn" data-id="${emp.id}">Delete</button>
    </footer>


        `;
    //aplly click event in deletbtn
    const deleteBtn = empCard.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      handleDelete(emp.id);
    });

    const editbtn = empCard.querySelector(".edit-btn");
    editbtn.addEventListener("click", () => {
      handleEdit(emp.id);
    });
    employeesNameData.append(empCard);
  });
}

async function handleDelete(id) {
  console.log(id);
  try {
    let resp = await fetch(`http://localhost:5000/employees/${id}`, {
      method: "DELETE",
    });
    console.log(resp);
  } catch (err) {
    console.log(err);
    alert("unable to delete ❌");
  }
}

function handleEdit(id) {
  window.location.href = `editEmployee.html?id=${id}`;
}
