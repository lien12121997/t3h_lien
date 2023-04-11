class BannerComponent {
    tagName = 'BannerComponent';

    constructor() {
        this.render();
    }

    render() {
        let html = `<div class="d-flex justify-content-end align-items-center banner position-relative">
            <img src="../images/banner.png" alt="" class="img-fluid">
            <div class="content-banner position-absolute">
                <p class="fs-5 fw-semibold mb-3">In this season, find the best 🔥</p>
                <h2 class="fw-bold title mb-3">Sports equipment <br> collection.</h2>
                <button class="btn btn-search px-4 py-3 mt-5 d-flex justify-content-center align-items-center rounded-pill">
                    Start your search
                </button>
            </div>
        </div>`;

        let components = document.getElementsByTagName(this.tagName);

        for (var i = 0; i < components.length; i++) {
            components[i].innerHTML = html;
        }
    }
}
new BannerComponent();