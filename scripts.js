'use strict'

class Posts {
    constructor() {
        this.url = 'https://jsonplaceholder.typicode.com/photos';
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

    randArr() {
        let arr = [];
        for (let i = 1; i <= 5; i++) {
            arr.push(Math.floor(Math.random() * 5000));
        }
        return arr;
    }

    createWrap(data) {
        this.randArr().forEach(item => {
            let posts = `
                <div class="col-12 col-md-6">
                    <div class="wrap">
                        <img src="${data[item].url}" alt="">
                    </div>
                </div>
            `;

            document.querySelector('.row').insertAdjacentHTML('beforeend', posts);
        });
    }

    init() {
        this.sendPost();
    }
}
const posts = new Posts();
posts.init();