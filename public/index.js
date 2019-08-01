let xml = new XMLHttpRequest();
let APIResponse;
let submit = document.querySelector(".query__submit");

submit.addEventListener("click", e => {
  e.preventDefault();
  let queryInput = document.querySelector(".query__input").value;
  backendCall(queryInput);
});

const backendCall = queryInput => {
  let url = `/everything?q=${queryInput}`;
  console.log(url);
  xml.onreadystatechange = () => {
    if (xml.readyState === 4 && xml.status === 200) {
      APIResponse = JSON.parse(xml.responseText);
    } else {
      console.error(xml.responseText);
    }
  };
  xml.open("GET", url);
  xml.send();
};

//console.log(APIResponse);
