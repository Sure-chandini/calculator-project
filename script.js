let screen = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let data = "";

// start message (unique touch)
screen.value = "Start Calculation";

buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    let value = btn.innerText;

    if (value === "C") {
      data = "";
      screen.value = "";
    }

    else if (value === "⌫") {
      data = data.slice(0, -1);
      screen.value = data;
    }

    else if (value === "=") {
      try {
        data = Function("return " + data)();
        screen.value = data;
      } catch {
        screen.value = "Error";
        data = "";
      }
    }

    else {
      data += value;
      screen.value = data;
    }

  });
});