const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputValid);

const ref = {
  type: "text",
  id: "validation-input",
  length: "6",
  placeholder: "Please enter 6 symbols",
};

function onInputValid(e) {
  if (Number(ref.length) === e.currentTarget.value.length) {
    input.classList = "valid";
  } else {
    input.classList = "invalid";
  }
}
