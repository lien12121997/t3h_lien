// function navbar() {
//     let html = `<div class="container">
//         <ul class="nav bg-body-secondary">
//             <li class="nav-item">
//                 <a class="nav-link active" aria-current="page" href="#">Active</a>
//             </li>
//             <li class="nav-item">
//                 <a class="nav-link" href="#">Link</a>
//             </li>
//             <li class="nav-item">
//                 <a class="nav-link" href="#">Link</a>
//             </li>
//             <li class="nav-item">
//                 <a class="nav-link disabled">Disabled</a>
//             </li>
//         </ul>
//     </div>`;

//     let components = document.getElementsByTagName('NavBarComponent');

//     for (var i = 0; i < components.length; i++) {
//         components[i].innerHTML = html;
//     }
// }

class NavBarComponent {
    tagName = 'NavBarComponent';

    list = [
        'Home', 'Blog', 'About Us', 'Contact'
    ]

    constructor() {
        this.render();
    }

    render() {
        let html = `<div class="">
        <ul class="nav bg-body-secondary">`;
        for (let i = 0; i < this.list.length; i++) {
            html += `<li class="nav-link">${this.list[i]}</li>`; 
        }
        html += `</ul>
        </div>`;

        let components = document.getElementsByTagName(this.tagName);

        for (var i = 0; i < components.length; i++) {
            components[i].innerHTML = html;
        }
    }
}
new NavBarComponent();

// let navbar = new NavBarComponent();
// navbar.render();