console.log("Calling app.js");

let userDetails = {
  name: "Gaurav-Sutar",
  age: 22,
  designation: "Software Developer",
  printDetails: function () {
    console.log(this);
  },
};
userDetails.printDetails();

let userDetails2 = {
  name: "Tushar-Manker",
  age: 22,
  exprience: 1,
  designation: "Software Developer",
  printDetails: function () {
    console.log(this);
  },
};

userDetails.printDetails.call(userDetails2);
