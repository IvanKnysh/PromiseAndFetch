'use strict'

class Posts {
    constructor() {
        this.url = 'https://jsonplaceholder.typicode.com/posts';
    }

    sendPost() {
        fetch(this.url)
            .then(response => {
                if (response.status !== 200) {
                    throw new Error('Response status is not 200');
                }
                return response.json();
            })
            .then(data => {
                this.createWrap(data);
            })
            .catch(error => {
                console.error(error);
            });
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