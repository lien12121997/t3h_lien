class ProductSliderComponent {
    tagName = 'ProductSliderComponent';
    products = [];

    constructor() {
        this.loadProduct();
        this.render();
    }

    loadProduct() {
        var xhttp = new XMLHttpRequest();
        var items = [];
        var url = `https://dummyjson.com/products/?limit=4`;
        xhttp.onload = function () {
            var res = this.responseText;
            var data = JSON.parse(res);
            items = data.products;
        }
        xhttp.open("GET", url, false);
        xhttp.send();
        this.products = items
    }

    render() {
        let html = `<h2 class="fw-semibold mb-5">New Arrivals. <span class="text-light-emphasis">New Sports equipment</span></h2>
            <div class="row">`;

        for (var i = 0; i < this.products.length; i++) {
            html += `<div class="col-3">
                <a href='./detail.html?product_id=${this.products[i].id}'><div class="card card-product">
                    <div class="card-img">
                        <img src="${this.products[i].thumbnail}" class="card-img-top" class="img-fluid">
                        <button class="btn-wishlist">
                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${this.products[i].title}</h5>
                        <p class="card-text">${this.products[i].category}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <button class="btn-price">
                                $${this.products[i].price}
                            </button>
                            <span><i class="fa fa-star" aria-hidden="true"></i> ${this.products[i].rating} (98 reviews)</span>
                        </div>
                    </div>
                </div></a>
            </div>`;
        }

        html += `</div>`;

        let components = document.getElementsByTagName(this.tagName);

        for (var i = 0; i < components.length; i++) {
            components[i].innerHTML = html;
        }
    }
}
new ProductSliderComponent();