// Basic Functions


// 1. STring Concatenation
function concatenateStrings(s1, s2) {
    return s1 + s2;
  }

// 2. Calculating area of rectangle

async function calculateRectangleAreaAsync(length, breadth) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(length * breadth);
      }, 1000);
    });
  }

// 3. Fetching Data from external api

async function fetchDataFromAPI() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data fetched from API');
      }, 1000);
    });
  }



