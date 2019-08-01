console.log("INIT");

let xml = new XMLHttpRequest();
let APIResponse;

const backendCall = queryInput => {
  let url = `/everything?q=${queryInput}`;
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

console.log(APIResponse);
