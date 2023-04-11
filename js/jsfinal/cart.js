class CartComponent {
    tagName = 'CartComponent';
    items = [];

    constructor() {
        this.getCart()
        this.render();
    }

    getCart() {
        var cart = localStorage.getItem("cart");
        if (cart == null) {
            cart = [];
        } else {
            cart = JSON.parse(cart);
        }
        this.items = cart
    }

    render() {
        let html = `<div class="row">
            <div class="col-8">`;

        for (var i = 0; i < this.items.length; i++) {
            html +=`<div class="row">
                    <div class="col-2">
                        <img src="${this.items[i].thumbnail}" alt="" class="img-fluid">
                    </div>
                    <div class="col-4 d-flex flex-column">
                        <p><b>${this.items[i].title}</b></p>
                    </div>
                    <div class="col-4">
                        <div class="d-flex justify-content-between align-items-center py-3 px-4 rounded-5 me-3" style="width: 50%; float: right;">
                            <button class="me-3 border border-1 rounded-circle bg-white">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </button>
                            <span>1</span>
                            <button class="ms-3 border border-1 rounded-circle bg-white">
                                <i class="fa fa-plus" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-2 d-flex flex-column py-3">
                        <button class="btn-price">
                            $${this.items[i].price}
                        </button>

                        <button class="mt-5 btn" onclick="removeItem(${this.items[i].id})">Remove</button>
                    </div>
                </div>`;
        }
        html += `</div>
            <div class="col-4">
            </div>
        </div>`;

        let components = document.getElementsByTagName(this.tagName);

        for (var i = 0; i < components.length; i++) {
            components[i].innerHTML = html;
        }
    }
}
new CartComponent();

function removeItem(x) {
    var cart = localStorage.getItem("cart");
    if (cart == null) {
        cart = [];
    } else {
        cart = JSON.parse(cart);
    }
    var c = [];
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id != x) {
            c.push(cart[i]);
        }
    }
    localStorage.setItem("cart", JSON.stringify(c));
    window.location.reload();

    reloadHtml();
}