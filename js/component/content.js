// function content() {
//     let html = `<div class="">
//     write somthing....
//     </div>`;

//     let components = document.getElementsByTagName('ContentComponent');

//     for (var i = 0; i < components.length; i++) {
//         components[i].innerHTML = html;
//     }
// }

class ContentComponent {
    tagName = 'ContentComponent';

    constructor() {
        this.render();
    }

    render() {
        let html = `<div class="row"> write somthing.... </div>`;

        let components = document.getElementsByTagName(this.tagName);

        for (var i = 0; i < components.length; i++) {
            components[i].innerHTML = html;
        }
    }
}
new ContentComponent();

// let content = new ContentComponent();
// content.render();