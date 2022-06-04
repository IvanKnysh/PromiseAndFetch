'use strict'

class Posts {
    constructor() {
        this.url = 'https://jsonplaceholder.typicode.com/posts';
    }

    sendPost() {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);

                this.createWrap(data);
            }
        });

        request.open('GET', this.url);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send();
    }

    createWrap(data) {
        data.forEach(item => {
            if (item.userId === 1) {
                let posts = `
                    <div class="col-12 col-md-6">
                        <div class="wrap">
                            <h2 class="title">${item.title}</h2>
                            <p>${item.body}</p>
                        </div>
                    </div>
                `;

                document.querySelector('.row').insertAdjacentHTML('beforeend', posts);
            }
        });
    }

    init() {
        this.sendPost();
    }
}
const posts = new Posts();
posts.init();