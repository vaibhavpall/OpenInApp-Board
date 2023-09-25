// Bar Chartt
var ctx = document.getElementById("myChart").getContext('2d');
var barChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [{
      label: 'User',
      data: [500, 350, 200, 400],
      backgroundColor: "#98D89E",
      pointStyle: "circle"
    }, {
      label: 'Guest',
      data: [400, 350, 300, 350],
      backgroundColor: "#EE8484",
      pointStyle: "circle"
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 100,
          min: 0,
          max: 500,
          callback: function(value, index, values) {
            return [0, 100, 200, 300, 400, 500][index];
          }
        }
      },
      x: {
        grid: {
          display: false // Remove the vertical grid lines
        }
      }
    },
    plugins: {
      legend: {
        position: 'right',
        align: 'start', 
        labels: {
          boxWidth: 10, 
        }
      }
    }
  }
});



// Donut Chart
const chartData = {
  labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
  data: [55, 31, 14],
};

const myChart = document.querySelector(".my-chart");
const ul = document.querySelector(".programming-stats .details ul");

new Chart(myChart, {
  type: "doughnut",
  data: {
    labels: chartData.labels,
    datasets: [
      {
        label: "Language Popularity",
        data: chartData.data,
      },
    ],
  },
  options: {
    borderWidth: 10,
    borderRadius: 2,
    hoverBorderWidth: 0,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

const populateUl = () => {
  chartData.labels.forEach((l, i) => {
    let li = document.createElement("li");
    li.innerHTML = `${l}: <span class='percentage'>${chartData.data[i]}%</span>`;
    ul.appendChild(li);
  });
};

populateUl();



//Profile

 //JavaScript for validation before proceeding
const profileScreen = document.querySelector(".profile-screen");
const columnBasic = document.getElementById("column-basic");
const columnContact = document.getElementById("column-contact");

function showContactColumn() {
  // Checking inputs if they are filled or not before proceeding furher
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  
  if (!name || !email || !phone) {
    alert("Please fill in all Basic details.");
    return;
  }

  columnBasic.style.display = "none";
  columnContact.style.display = "block";
}

function saveProfile() {
  // Check if all contact inputs are filled before saving
  const instagram = document.getElementById("instagram").value;
  const linkedin = document.getElementById("linkedin").value;
  const twitter = document.getElementById("twitter").value;

  if (!instagram || !linkedin || !twitter) {
    alert("Please fill in all Contact details.");
    return;
  }

  // Close the profile screen
  profileScreen.style.display = "none";

  // Reset input fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("instagram").value = "";
  document.getElementById("linkedin").value = "";
  document.getElementById("twitter").value = "";
}

// Optionally, add an event listener to open the profile screen on + icon click
const addProfileButton = document.querySelector(".add-profile");

addProfileButton.addEventListener("click", () => {
  columnBasic.style.display = "block";
  columnContact.style.display = "none";
  profileScreen.style.display = "flex";
});



// JavaScript function to close the profile screen
function closeProfile() {
  profileScreen.style.display = "none";
}


document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');

  hamburger.addEventListener('click', function() {
    navbar.classList.toggle('open');
  });
});


