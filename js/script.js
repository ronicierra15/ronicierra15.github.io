const checkbox = document.getElementById("flexSwitchCheckDefault");

checkbox.addEventListener("click", function () {
  if (checkbox.checked) {
    location.href = "./en/indice.html";
  } else {
    location.href = "../index.html";
  }
});
