const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const formDataObject = {};

  formData.forEach((value, name) => {
    formDataObject[name] = value;
  });

  if (!formDataObject.email.trim() || !formDataObject.password.trim()) {
    alert("All fields must be filled");
    return;
  }

  console.log(formDataObject);
  loginForm.reset();
}
