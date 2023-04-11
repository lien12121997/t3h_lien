class ProductComponent {
    tagName = 'ProductComponent';
    products = [];

    constructor() {
        this.allProduct();
        this.render();
    }

    allProduct() {
        var xhttp = new XMLHttpRequest();
        var items = [];
        var url;
        var search = localStorage.getItem("search");
        if(search) {
            url = `https://dummyjson.com/products/search?q=${search}&limit=12`;
        } else {
            url = 'https://dummyjson.com/products';
        }
        console.log(url, search)
        xhttp.onload = function () {
            var res = this.responseText;
            var data = JSON.parse(res);
            items = data.products;
        }
        xhttp.open("GET", url, false);
        xhttp.send();
        this.products = items
        console.log(this.products, 'aaa')
    }

    render() {
        let html = `<div class="row py-4">`;
        for (var i = 0; i < this.products.length; i++) {
            html += `<div class="col-3 mb-4">
                <div class="card">
                    <img height="190" src="${this.products[i].thumbnail}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${this.products[i].title}</h5>
                        <p class="card-text">${this.products[i].description}</p>
                    </div>
                  </div>
            </div>`;
        }
        html += `</div>`;

        let components = document.getElementsByTagName(this.tagName);

        for (var i = 0; i < components.length; i++) {
            components[i].innerHTML = html;
        }
    }
}
new ProductComponent();