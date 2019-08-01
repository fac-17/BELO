let submit = document.querySelector(".query__submit");

submit.addEventListener("click", e => {
  e.preventDefault();
  let queryInput = document.querySelector(".query__input").value;
  backendCall(queryInput);
});

const RenderArticles = apiObject => {
  let section = document.querySelector(".article__section");
  let articles = apiObject.articles;
  console.log(articles);
  articles.forEach(e => {
    let article = document.createElement("article");
    article.classList.add("article");
    let img = document.createElement("img");
    img.src = e.urlToImage;
    img.alt = "image from external source";
    article.appendChild(img);
    let title = document.createElement("h2");
    title.textContent = e.title;
    article.appendChild(title);
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
