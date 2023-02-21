const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
require("console.table");

function init() {
  const logoText = logo({ name: "Employee Manager" }).render();
  console.log(logoText);
  loadMainPrompts();
}

function loadMainPrompts() {
  prompt([
    {
      type: "list",
      name: "choices",
      message: "What would you like to do?",
      choices: [
        {
          name: "View All Employees",
          value: "VIEWEMPLOYEES",
        },
        {
          name: "Add Employee",
          value: "ADDEMPLOYEE",
        },
        {
          name: "View All Roles",
          value: "VIEWROLES",
        },
        {
          name: "Add Role",
          value: "ADDROLE",
        },
        {
          name: "View All Departments",
          value: "VIEWDEPARTMENTS",
        },
        {
          name: "Add Department",
          value: "ADDDEPARTMENT",
        },
        {
          name: "Quit",
          value: "QUIT",
        },
      ],
    },
  ]).then((res) => {
    switch (res.choices) {
      case "VIEWEMPLOYEES":
        viewAllEmployees();
        break;
      case "ADDEMPLOYEE":
        addEmployee();
        break;
      case "VIEWDEPARTMENTS":
        viewAllDepartments();
        break;
      case "ADDDEPARTMENT":
        addDepartment();
        break;
      case "VIEWROLES":
        viewAllRoles();
        break;
      case "ADDROLE":
        addRole();
        break;
      default:
        quit();
    }
  });
}

// VIEW FUNCTIONS
function viewAllEmployees() {
  const logoText = logo({ name: "View All Employees" }).render();
  console.log(logoText);
  db.query("SELECT * FROM employee", function (res, err) {
    if (err) throw err;
    console.table(res);
  });
}

function viewAllRoles() {
  const logoText = logo({ name: "View All Roles" }).render();
  console.log(logoText);
  db.query("SELECT * FROM roles", function (res, err) {
    if (err) throw err;
    console.table(res);
  });
}

function viewAllDepartments() {
  const logoText = logo({ name: "View All Departments" }).render();
  console.log(logoText);
  db.query("SELECT * FROM department", function (res, err) {
    if (err) throw err;
    console.table(res);
  });
}

init();
