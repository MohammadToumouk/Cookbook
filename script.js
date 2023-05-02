const optionList = document.querySelector("#recipiesId");
const iframe = document.querySelector("#iframe-Container");

iframe.src = optionList.value;

addEventListener("change", function () {
  const selectedValue = optionList.value;
  iframe.src = selectedValue;
});
