var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var product_id = urlParams.get('product_id')

var cart = localStorage.getItem("cart");
if (cart == null) {
    cart = [];
} else {
    cart = JSON.parse(cart);
}
function addToCart(x) {
    for (var i = 0; i < cart.length; i++) {
        if (x == cart[i].id) {
            cart[i].buy_qty = cart[i].buy_qty + 1;
            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Đã thêm vào cart");
            return;
        }
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        var rs = this.responseText;
        var data = JSON.parse(rs);
        data.buy_qty = 1;
        cart.push(data);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Đã thêm vào cart");
    }
    xhttp.open("GET", `https://dummyjson.com/products/${x}`);
    xhttp.send();
}

class DetailComponent {
    tagName = 'DetailComponent';
    product = '';

    constructor() {
        this.getProduct()
        this.render();
    }

    getProduct() {
        var xhttp = new XMLHttpRequest();
        var item;
        var url = `https://dummyjson.com/products/${product_id}`;
        xhttp.onload = function () {
            var res = this.responseText;
            var data = JSON.parse(res);
            item = data;
        }
        xhttp.open("GET", url, false);
        xhttp.send();
        this.product = item
    }

    render() {
        let html = `
        <div class="row">
            <div class="col-6">
                <img src="${this.product.thumbnail}" alt="" class="img-fluid">
            </div>
            <div class="col-6 px-4">
                <h3>${this.product.title}</h3>
                <div class="d-flex justify-content-start align-items-center">
                    <button class="btn-price me-5">
                        $${this.product.price}
                    </button>
                    <span><i class="fa fa-star" aria-hidden="true"></i>${this.product.rating} (142 Reviews)</span>
                </div>
                <div class="d-flex justify-content-between align-items-center mt-4 mb-3">
                    <div class="bg-gray d-flex justify-content-between align-items-center py-3 px-4 rounded-5 me-3">
                        <button class="me-3 border border-1 rounded-circle bg-white">
                            <i class="fa fa-minus" aria-hidden="true"></i>
                        </button>
                        <span>1</span>
                        <button class="ms-3 border border-1 rounded-circle bg-white">
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </button>
                    </div>
                    <button class="btn-add-cart" onclick="addToCart(${this.product.id})">
                        Add to cart
                    </button>
                </div>
                <div class="bg-gray d-flex justify-content-between align-items-center px-3 py-2 my-3">
                    <p class="fw-semibold m-0">Description</p>
                </div>
                <div>
                    ${this.product.description}
                </div>
            </div>
        </div>`;

        let components = document.getElementsByTagName(this.tagName);

        for (var i = 0; i < components.length; i++) {
            components[i].innerHTML = html;
        }
    }
}
new DetailComponent();