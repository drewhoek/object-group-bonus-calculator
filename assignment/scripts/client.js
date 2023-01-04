$(document).ready(onReady);

function onReady() {
  console.log('jQuery and JS loaded correctly')


  $('#pressMe').on('click', appendDOM);

  //appendDOM(allEmployeesInfo);
}


function appendDOM() {
  $('#tableBody').empty();

  for (let i = 0; i < allEmployeesInfo.length; i++) {
    const employeeElement = allEmployeesInfo[i];
    
    $( '#tableBody' ).append( `<tr>
    <td>${allEmployeesInfo[i].name}</td>
    <td>${allEmployeesInfo[i].bonusPercentage + '%'}</td>
    <td>${allEmployeesInfo[i].totalCompensation}</td>
    <td>${allEmployeesInfo[i].totalBonus}</td>
  </tr>` )
  }
}

// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
let allEmployeesInfo = [];

for(let i = 0; i < employees.length; i++){
  let employeeInfo = calculateIndividualEmployeeBonus(employees[i]);
  console.log(employeeInfo);
  allEmployeesInfo.push(employeeInfo);
  console.log(allEmployeesInfo);
}




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
  let bonusVar = 0;
  let compVar = 0;
  let totalVar = 0;
 
  // Calculating bonus percentage based on employee rating
  if (employee.reviewRating <= 2) {
    bonusVar = 0;
  } else if (employee.reviewRating === 3) {
    bonusVar = 4;
  } else if (employee.reviewRating === 4) {
    bonusVar = 6;
  } else if (employee.reviewRating === 5) {
    bonusVar = 10;
  }
  // Calculating bonus percentage based on employee number 
  if (employee.employeeNumber.length <= 4) {
    bonusVar += 5;
  }
  // Calculating bonus percentage based on salary
  if (employee.annualSalary > 65,000) {
    bonusVar -= 1;
  }

  // Define max and min bonus value
  if (bonusVar > 13) {
    bonusVar = 13;
  } else if (bonusVar < 0) {
    bonusVar = 0;
  }

  // Calculating bonus and rounding to the nearest whole number
  totalVar = Math.round((bonusVar * 0.01)*employee.annualSalary);
  // Calculating total compensation
  compVar = Number(totalVar) + Number(employee.annualSalary);
  //console.log(totalVar);
  //console.log(compVar);

  let newObject = {
    name: employee.name,
    bonusPercentage: bonusVar,
    totalCompensation: compVar,
    totalBonus: totalVar,
  }
  // return new object with bonus results
  return newObject;
}

