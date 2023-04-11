class HeaderComponent {
    tagName = 'HeaderComponent';

    constructor() {
        this.render();
    }

    render() {
        let html = `
        <div class="header d-flex justify-content-between py-4 align-items-center">
        <div class="d-flex flex-row align-items-center">
            <img src="../images/logo.svg" class="img-fluid">
            <div class="line-border border-end border-dark-subtle mx-3"></div>
            <div class="dropdown">
                <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Shops
                </a>
            </div>
        </div>
        <div class="d-flex flex-row align-items-center">
            <div class="dropdown">
                <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Template
                </a>
            </div>
            <div class="dropdown">
                <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Language
                </a>
            </div>
            <button class="btn">
                <i class="fa fa-search" aria-hidden="true"></i>
            </button>
            <button class="btn">
                <i class="fa fa-user" aria-hidden="true"></i>
            </button>
            <a href="./cart.html"><button class="btn">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </button></a>
        </div>
    </div>`;

        let components = document.getElementsByTagName(this.tagName);

        for (var i = 0; i < components.length; i++) {
            components[i].innerHTML = html;
        }
    }
}
new HeaderComponent();