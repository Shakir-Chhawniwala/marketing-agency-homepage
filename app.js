const modal = document.querySelector(".modal"); //selects the modal
const btnOpenModal = document.querySelector(".show-modal"); //selects the button to show the modal
const overlay = document.querySelector(".overlay");

const toggleModal = function () {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

btnOpenModal.addEventListener("click", toggleModal);

overlay.addEventListener("click", toggleModal);

var form = document.getElementById("form-btn");
form.addEventListener("click", formSubmit);

function formSubmit(e) {
  e.preventDefault();

  const formData = new FormData();
  formData.append("name", document.querySelector('input[name="name"]').value);
  formData.append(
    "lastName",
    document.querySelector('input[name="lname"]').value
  );
  formData.append("email", document.querySelector('input[name="email"]').value);

    fetch("https://getform.io/f/abd93388-ee37-4b34-a8a2-9739304d23b4", {
      method: "POST",
      body: formData,
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

      document.getElementById("form").reset()
}
