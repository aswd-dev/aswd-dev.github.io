fetch("https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/G2/Class07/students.json")
.then(response => response.json())
.then(students => {
    console.log(students);
    /* {
    "id": 1,
    "firstName": "Frasquito",
    "lastName": "Koop",
    "email": "fkoop0@ow.ly",
    "gender": "Male",
    "city": "Benzilan",
    "averageGrade": 4,
    "age": 33
  },
  */
  // All students with an average grade higher than 3
  const studentsWithAvgHigherThan3 = students.filter(student => student.averageGrade > 3);
  console.log(studentsWithAvgHigherThan3);
  

  // All female student names with an average grade of 5
  const femaleStudentsNames = students.filter(student => student.averageGrade === 5 && student.gender === "Female").map(student => `${student.firstName} ${student.lastName}`)
  console.log(femaleStudentsNames);
   

  // All male student full names who live in Skopje and are over 18 years old

  const maleStudentsNames = students.filter(student => student.city === "Skopje" && student.gender === "Male" && student.age > 18).map(student => `${student.firstName} ${student.lastName}`)
  console.log(maleStudentsNames);

  // The average grades of all female students over the age of 24
  const femaleStudents = students.filter(student => student.gender === "Female" && student.age > 24).map(student => student.averageGrade);
  console.log(femaleStudents);
  

  // All male students with a name starting with B and average grade over 2
  const maleStudents = students.filter(student => student.gender === "Male" && student.firstName.startsWith("B") && student.averageGrade > 2);
  console.log(maleStudents);
  

  // Student emails of all female students with age between 20 and 30 years, ordered ascending
  const femaleAge = students.filter(student => student.gender === "Female" && student.age >= 20 && student.age <= 30).map(student => student.email);
  console.log(femaleAge);
   

  // Students full names of students above 40, ordered descending
  const filteredSortedStudents = students
    .filter(student => student.age > 40)
    .sort((a, b) => b.age - a.age)
    .map(student => `${student.firstName} ${student.lastName}`);
    console.log(filteredSortedStudents);
    

  // Count of students using google mail
  

  // The average age of female students living in Skopje


});

