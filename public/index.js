let xml = new XMLHttpRequest();
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
      let APIResponse = JSON.parse(xml.responseText);
      console.log(APIResponse);
    }
  };
  xml.open("GET", url);
  xml.send();
};
