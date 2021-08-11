//grab the news container
let newsAccordion = document.getElementById('newsAccordion');

//create a get request
const xhr = new XMLHttpRequest();

let apiKey = '7fa1329c955048fbbb2440d6e7b18b98'

xhr.open('GET', 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=7fa1329c955048fbbb2440d6e7b18b98', true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index){
            let news = `<div class="accordion-item">
                            <h2 class="accordion-header" id="heading${index}">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                    ${element.title}
                                </button>
                            </h2>
                            <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#newsAccordion">
                                <div class="accordion-body">
                                    ${element.content} ...<a href = ${element.url} target = _blank>Read more here</a>
                                </div>
                            </div>
                        </div>`
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log('Error');
    }
}

xhr.send();

