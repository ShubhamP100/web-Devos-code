const API_KEY="ecb3bd358de241cabfe9fa25194a2a79";

const url="https://newsapi.org/v2/everything?q=";

window.addEventListener("load",() => fetchNews("India"));

// below function is use to fetch the news from api and then put it into the data packet
function reload(){
    window.location.reload();
}
async function fetchNews(query){
    const res=await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data= await res.json();
    
    bindData(data.articles);
    
}

// next one is to bind the data
function bindData(articles){
    const cardsContainer=document.getElementById("cards-container");
    const newsTemplate=document.getElementById("news-card");

    cardsContainer.innerHTML = "";
    articles.forEach((article) => {
        if(!article.urlToImage) return;
        // below line is use for to clone the items from the card-header div
        const clone=newsTemplate.content.cloneNode(true);
        filldata(clone,article);
       cardsContainer.appendChild(clone);
    });

}

function filldata(clone,article){
    const newsImg= clone.querySelector("#news-img");
    const newstitle= clone.querySelector("#title");
    const newssource= clone.querySelector("#news-source");
    const newsdesc= clone.querySelector("#news-desc");

    newsImg.src=article.urlToImage;
    newstitle.innerHTML=article.title;
    newsdesc.innerHTML=article.description;

    const date=new Date(article.publishedAt).toLocaleString("en-US",{
        timeZone:"Asia/Jakarta",
    });
    newssource.innerHTML=`${article.source.name} : ${date} `;
     clone.firstElementChild.addEventListener('click',()=>{
        window.open(article.url,"_blank");
     })
}
function onNavItemClick(id){
    fetchNews(id);
}

const searchinfo=document.getElementById("search-info");
  const searchText=document.getElementById("search-text");
 
  searchinfo.addEventListener("click",()=>{
     const query =searchText.value;
     if(!query) return;
     fetchNews(query);
     curSelectedNav?.classList.remove("active");
     curSelectedNav=null;
  })
