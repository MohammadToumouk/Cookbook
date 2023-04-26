const optionList = document.querySelector("#recipiesId");
const iframe = document.querySelector("#iframe-Container");

addEventListener("change", function () {
  const selectedValue = optionList.value;
  iframe.src = selectedValue;
});
