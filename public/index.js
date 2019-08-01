const submit = document.querySelector(".query__submit");

submit.addEventListener("click", e => {
  e.preventDefault();
  const queryInput = document.querySelector(".query__input").value;
  backendCall(queryInput);
});

const RenderArticles = apiObject => {
  const section = document.querySelector(".article__section");
  section.innerHTML = "";
  const articles = apiObject.articles;
  articles.forEach(e => {
    const article = document.createElement("article");
    article.classList.add("article");
    const img = document.createElement("img");
    img.classList.add("article__image");
    img.src = e.urlToImage;
    img.alt = "image from external source";
    article.appendChild(img);
    const headline = document.createElement("h2");
    headline.classList.add("article__headline");
    const link = document.createElement("a");
    link.href = e.url;
    link.textContent = e.title;
    link.classList.add("article__link");
    link.target = "_blank";
    headline.appendChild(link);
    article.appendChild(headline);
    const description = document.createElement("p");
    description.classList.add("article__description");
    description.textContent = e.description;
    article.appendChild(description);
    const content = document.createElement("p");
    content.classList.add("article__content");
    content.textContent = e.content;
    article.appendChild(content);
    section.appendChild(article);
  });
};

const backendCall = queryInput => {
  const xml = new XMLHttpRequest();
  const url = `/everything?q=${queryInput}`;
  xml.onreadystatechange = () => {
    if (xml.readyState === 4 && xml.status === 200) {
      const APIResponse = JSON.parse(xml.responseText);
      RenderArticles(APIResponse);
    }
  };
  xml.open("GET", url);
  xml.send();
};
