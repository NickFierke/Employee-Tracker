const departments = [];
const roles = [];
const employees = [];

const addDepartment = (department) => {
  departments.push(department);
};

const addRole = (role) => {
  roles.push(role);
};

const addEmployee = (employee) => {
  employees.push(employee);
};

const updateEmployeeRole = (employeeId, newRole) => {
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === employeeId) {
      employees[i].role = newRole;
      break;
    }
  }
};

const viewDepartments = () => {
  console.log("Departments:");
  for (let i = 0; i < departments.length; i++) {
    console.log(`- ${departments[i]}`);
  }
};

const viewRoles = () => {
  console.log("Roles:");
  for (let i = 0; i < roles.length; i++) {
    console.log(`- ${roles[i].title} (${roles[i].salary})`);
  }
};

const viewEmployees = () => {
  console.log("Employees:");
  for (let i = 0; i < employees.length; i++) {
    console.log(`- ${employees[i].name} (${employees[i].role})`);
  }
};

// Example usage
addDepartment("Sales");
addDepartment("Marketing");

addRole({ title: "Sales Manager", salary: 80000 });
addRole({ title: "Marketing Manager", salary: 90000 });

addEmployee({ id: 1, name: "John Doe", role: "Sales Manager" });
addEmployee({ id: 2, name: "Jane Doe", role: "Marketing Manager" });

updateEmployeeRole(1, "Marketing Manager");

viewDepartments();
viewRoles();
viewEmployees();
