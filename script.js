function toggleStatus(button) {
	if (button.innerText === "Ada") {
	  button.innerText = "Tidak Ada";
	  button.classList.remove("ada");
	  button.classList.add("tidak-ada");
	} else {
	  button.innerText = "Ada";
	  button.classList.remove("tidak-ada");
	  button.classList.add("ada");
	}
  }
  