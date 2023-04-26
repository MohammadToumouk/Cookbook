const optionList = document.querySelector("#recipiesId") 
const iframe = document.querySelector("#iframe-Container")

addEventListener('change', function() {
    const optionValue = optionList.value;
    iframe.src = optionValue;
});

console.log(optionList);