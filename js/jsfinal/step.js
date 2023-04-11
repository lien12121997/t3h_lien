class StepComponent {
    tagName = 'StepComponent';

    dataStep = [
        {
            id: 1,
            name: 'Step 1',
            title: 'Filter & Discover',
            desc: 'Smart filtering and suggestions make it easy to find',
            img: '../images/icon1.png'
        },
        {
            id: 2,
            name: 'Step 2',
            title: 'Add to bag',
            desc: 'Easily select the correct items and add them to the cart',
            img: '../images/icon2.png'
        },
        {
            id: 3,
            name: 'Step 3',
            title: 'Fast shipping',
            desc: 'The carrier will confirm and ship quickly to you',
            img: '../images/icon3.png'
        },
        {
            id: 4,
            name: 'Step 4',
            title: 'Enjoy the product',
            desc: 'Have fun and enjoy your 5-star quality products',
            img: '../images/icon4.png'
        }
    ]

    constructor() {
        this.render();
    }

    render() {
        let html = `<div class="row py-5 mt-5">`;

        for (var i = 0; i < this.dataStep.length; i++) {
            html += `<div class="col-3 d-flex flex-column justify-content-center">
                <div class="d-flex justify-content-center">
                    <img src="${this.dataStep[i].img}" alt="" width="140" class="img-fluid">
                </div>
                <div class=" text-center">
                    <p class="step${this.dataStep[i].id} rounded-pill px-2.5 py-1 text-center m-0">${this.dataStep[i].name}</p>
                </div>
                <p class="fw-semibold text-center my-3">${this.dataStep[i].title}</p>
                <p class="fs-6 text-center text-light-emphasis">${this.dataStep[i].desc}</p>
            </div>`;
        }

        html += `</div>`;

        let components = document.getElementsByTagName(this.tagName);

        for (var i = 0; i < components.length; i++) {
            components[i].innerHTML = html;
        }
    }
}
new StepComponent();