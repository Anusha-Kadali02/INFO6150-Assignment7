$(document).ready(function () {
    $("#name").text("Welcome " + localStorage.getItem("name") + " 🩵");

    $("#input1").on("input", function () {
      validateInput1();
    });

    $("#input2").on("input", function () {
      validateInput2();
    });

    $(".add, .subtract, .multiply, .divide").on("click", function () {
      var operation = $(this).text();
      var num1 = $("#input1").val();
      var num2 = $("#input2").val();

      if (validateInput1() && validateInput2()) {
        var result = calculate(num1, num2, operation);
        if(result === "Infinity"){
          showError($("#answererror"), "Infinity error");
        }
        else{
          hideError($("#answererror"));
          $("#answer").val(result);
        }
      }
    });

    $(".clear").on("click", function () {
      $("#input1").val("");
      $("#input2").val("");
      $("#answer").val("");
    });

    const validateInput1 = () => {
      var input1 = $("#input1").val();
      if(input1 === ""){
        showError($("#input1error"), "Input cant be empty");
        return false;
      }
      else if (!$.isNumeric(input1)) {
        showError($("#input1error"), "Input must be a number");
        return false;
      } else {
        hideError($("#input1error"));
        return true;
      }
    };

    const validateInput2 = () => {
        var input2 = $("#input2").val();
        if(input2 === ""){
          showError($("#input2error"), "Input cant must be empty");
          return false;
        }
        else if (!$.isNumeric(input2)) {
          showError($("#input2error"), "Input must be a number");
          return false;
        } else {
          hideError($("#input2error"));
          return true;
        }
    };

    const calculate = (num1, num2, operation) => {
      switch (operation) {
        case "+":
          return Number(num1) + Number(num2);
        case "-":
          return Number(num1) - Number(num2);
        case "*":
          return Number(num1) * Number(num2);
        case "/":
          if (Number(num2) !== 0) {
            return Number(num1) / Number(num2);
          } else {
            return "Infinity";
          }
      }
    };

    const showError = (feedbackElement, message) => {
      feedbackElement.text(message);
    };

    const hideError = (feedbackElement) => {
      feedbackElement.text("");
    };
  });