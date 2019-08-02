const submit = document.querySelector(".query__submit");

submit.addEventListener("click", e => {
  const queryInput = document.querySelector(".query__input");
  if (queryInput.value === "") {
    e.preventDefault();
    alert("Please submit a search term.");
    queryInput.focus();
  } else {
    e.preventDefault();
    backendCall(queryInput.value);
  }
});
const renderArticle = e => {
  const article = document.createElement("article");
  article.classList.add("article");
  createImageElement(e.urlToImage, "article__image", article);
  const headline = document.createElement("h2");
  headline.classList.add("article__headline");
  createLinkElement(e.title, e.url, "article__link", headline);
  article.appendChild(headline);
  createParagraphElement(e.description, "article__description", article);
  createParagraphElement(e.content, "article__content", article);
  return article;
};
const createImageElement = (src, className, parent) => {
  const img = document.createElement("img");
  img.classList.add(className);
  img.src = src;
  img.alt = "image from external source";
  parent.appendChild(img);
};

const createLinkElement = (text, href, className, parent) => {
  const link = document.createElement("a");
  link.href = href;
  link.textContent = text;
  link.classList.add(className);
  link.target = "_blank";
  parent.appendChild(link);
};

const createParagraphElement = (text, className, parent) => {
  let el = document.createElement("p");
  el.classList.add(className);
  el.textContent = text;
  parent.appendChild(el);
};
const clearElement = el => {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
};
const RenderArticles = apiObject => {
  const section = document.querySelector(".article__section");
  clearElement(section);
  const articles = apiObject.articles;
  articles.map(renderArticle).forEach(a => section.appendChild(a));
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
