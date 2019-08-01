//import { isMainThread } from "worker_threads";

let submit = document.querySelector(".query__submit");

submit.addEventListener("click", e => {
  e.preventDefault();
  let queryInput = document.querySelector(".query__input").value;
  backendCall(queryInput);
});

const RenderArticles = apiObject => {
  let section = document.querySelector(".article__section");
  section.innerHTML = "";
  let articles = apiObject.articles;
  console.log(articles);
  articles.forEach(e => {
    let article = document.createElement("article");
    article.classList.add("article");
    let img = document.createElement("img");
    img.classList.add("article__img");
    img.src = e.urlToImage;
    img.alt = "image from external source";
    article.appendChild(img);
    let headline = document.createElement("h2");
    headline.classList.add("article__headline");
    let link = document.createElement("a");
    link.href = e.url;
    link.textContent = e.title;
    link.classList.add("article__link");
    link.target = "_blank";
    headline.appendChild(link);
    article.appendChild(headline);
    let description = document.createElement("p");
    description.classList.add("article__description");
    description.textContent = e.description;
    article.appendChild(description);
    let content = document.createElement("p");
    content.classList.add("article__content");
    content.textContent = e.content;
    article.appendChild(content);
    section.appendChild(article);
  });
};

const backendCall = queryInput => {
  let xml = new XMLHttpRequest();
  let url = `/everything?q=${queryInput}`;
  console.log(url);
  xml.onreadystatechange = () => {
    if (xml.readyState === 4 && xml.status === 200) {
      let APIResponse = JSON.parse(xml.responseText);
      console.log(APIResponse);
      RenderArticles(APIResponse);
    }
  };
  xml.open("GET", url);
  xml.send();
};
