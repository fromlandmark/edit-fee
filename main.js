import ArticlesDB from './_db/index.js'

const articleTemplate = (el) => {
	return `<a href="${el.href}" target="_blank" class="article_card" data-type="${el.category}">
					<span class="article_card__title">${el.label}</span> 
                    <span class="article_card__category">${el.category}</span> 
				</a>`;
};

class Chapter { 
    show = false
    data = this.data
    populateData = (anchor, template) => {
        const anchorElement = document.getElementById(anchor)
        console.log(this.data)
        this.data.forEach(el => {
			if (!el.hidden) {
				anchorElement.innerHTML += template(el);
			}
		})  
    }
}


const Articles = new Chapter();
Articles.data = ArticlesDB.ArticlesDB;
Articles.populateData("articles", articleTemplate); 

