// Sample student data
const students = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    gender: "Male",
    class: 10,
    marks: 85,
    passing: true,
    email: "john@example.com"
  },
  // Add more student data here
];

// Function to render the table with student data
function renderTable(studentData) {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = ""; // Clear existing table rows
  
  studentData.forEach((student, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${student.id}</td>
      <td><img src="image_url_here" alt="${student.firstName} ${student.lastName}" width="30"> ${student.firstName} ${student.lastName}</td>
      <td>${student.gender}</td>
      <td>${student.class}</td>
      <td>${student.marks}</td>
      <td>${student.passing ? "Passing" : "Failed"}</td>
      <td>${student.email}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Function to sort students A-Z by full name
function sortAZ() {
  const sortedStudents = [...students].sort((a, b) => {
    const nameA = a.firstName + " " + a.lastName;
    const nameB = b.firstName + " " + b.lastName;
    return nameA.localeCompare(nameB);
  });
  renderTable(sortedStudents);
}

// Function to sort students Z-A by full name
function sortZA() {
  const sortedStudents = [...students].sort((a, b) => {
    const nameA = a.firstName + " " + a.lastName;
    const nameB = b.firstName + " " + b.lastName;
    return nameB.localeCompare(nameA);
  });
  renderTable(sortedStudents);
}

// Function to sort students by marks
function sortByMarks() {
  const sortedStudents = [...students].sort((a, b) => a.marks - b.marks);
  renderTable(sortedStudents);
}

// Function to sort students by passing status
function sortByPassing() {
  const passingStudents = students.filter(student => student.passing);
  renderTable(passingStudents);
}

// Function to sort students by class
function sortByClass() {
  const sortedStudents = [...students].sort((a, b) => a.class - b.class);
  renderTable(sortedStudents);
}

// Function to sort students by gender
function sortByGender() {
  const femaleStudents = students.filter(student => student.gender === "Female");
  const maleStudents = students.filter(student => student.gender === "Male");
  
  renderTable(femaleStudents);
  renderTable(maleStudents);
}

// Event listeners for sorting buttons
document.getElementById("sortAZButton").addEventListener("click", sortAZ);
document.getElementById("sortZAButton").addEventListener("click", sortZA);
document.getElementById("sortByMarksButton").addEventListener("click", sortByMarks);
document.getElementById("sortByPassingButton").addEventListener("click", sortByPassing);
document.getElementById("sortByClassButton").addEventListener("click", sortByClass);
document.getElementById("sortByGenderButton").addEventListener("click", sortByGender);

// Initial rendering of the table with default data
renderTable(students);
