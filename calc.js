"use strict";
let btn = document.querySelectorAll("button");
let display = document.querySelector(".display");
let result = "";
btn.forEach((item) => {
  item.addEventListener("click", function (e) {
    console.log(item.innerHTML);
    /* this is button for clear all input. */
    if (e.target.innerHTML == "AC") {
      result = "";
      display.value = result;

      console.log(result);
    } else if (e.target.innerHTML == "C" && display.value != "") {
      /* this  for backspace while input is not empty!*/
      result = result.substring(0, result.length - 1);
      display.value = result;
      console.log(display.value);
    } /* this is for  giving result after press = */ else if (
      e.target.innerHTML == "=" &&
      display.value != ""
    ) {
      result = String(eval(result));
      display.value = result;
      console.log(typeof result);
    } else {
      /* this for taking rest of input from user */
      result += e.target.innerHTML;
      display.value = result;
      console.log(display.value);
    }
  });
});
