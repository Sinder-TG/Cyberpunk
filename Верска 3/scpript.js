const image = document.querySelector(".login-img");
const input = document.querySelector(".login-a1");
const div = document.querySelector(".login-a");
console.log(image);
input.addEventListener("change", function () {
  image.src = URL.createObjectURL(input.files[0]);
});
