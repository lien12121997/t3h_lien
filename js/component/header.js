// function header() {
//     let html = `<div class="container py-3">
//         Logo
//     </div>`;

//     let components = document.getElementsByTagName('HeaderComponent');

//     for (var i = 0; i < components.length; i++) {
//         components[i].innerHTML = html;
//     }
// }

class HeaderComponent {
    tagName = 'HeaderComponent';

    constructor() {
        this.render();
    }

    render() {
        let html = `<div class="p-3">
            Logo
        </div>`;

        let components = document.getElementsByTagName(this.tagName);

        for (var i = 0; i < components.length; i++) {
            components[i].innerHTML = html;
        }
    }
}
new HeaderComponent();

// let header = new HeaderComponent();
// header.render();