'use strict'

class Posts {
    constructor() {
        this.url = 'https://jsonplaceholder.typicode.com/photos';
    }

    sendPost() {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();

            request.addEventListener('readystatechange', () => {
                if (request.readyState !== 4) return;

                if (request.status === 200) {
                    const data = JSON.parse(request.responseText);

                    resolve(data);
                } else {
                    reject('Ошибка');
                }
            });

            request.open('GET', this.url);
            request.setRequestHeader('Content-Type', 'application/json');
            request.send();
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
        this.sendPost()
            .then(data => {
                this.createWrap(data);
            })
            .catch(error => {
                console.error(error);
            });
    }
}
const posts = new Posts();
posts.init();