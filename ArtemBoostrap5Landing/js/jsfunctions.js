function validate1() {
  let element1 = document.getElementById("inputEmail");
  let el_value1 = document.getElementById("inputEmail").value;
    if (el_value1 === "") {
      element1.placeholder = "This field is required";
    } else {
      element1.placeholder = "";
    }
  }
function validate2() {
  let element2 = document.getElementById("inputFirstName");
  let el_value2 = document.getElementById("inputFirstName").value;
    if (el_value2 === "") {
      element2.placeholder = "This field is needed";
    } else {
      element2.placeholder = "";
    }
  }
function validate3() {
  let element3 = document.getElementById("inputLastName");
  let el_value3 = document.getElementById("inputLastName").value;
    if (el_value3 === "") {
      element3.placeholder = "This field is mandatory";
    } else {
      element3.placeholder = "";
    }
  }
function validateAll() {
  let el_value1 = document.getElementById("inputEmail").value;
  let el_value2 = document.getElementById("inputFirstName").value;
  let el_value3 = document.getElementById("inputLastName").value;
    if (el_value1 !== "" && el_value2 !== "" && el_value3 !== "") {
      alert("THANK YOU! WE WILL CONTACT YOU SOON");
      return false;
    }
  }