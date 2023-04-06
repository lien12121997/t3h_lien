

// function sidebar() {
//     let html = `<div class="border-end">
//     <ul class="list-group list-group-flush">
//     <li class="list-group-item">An item</li>
//     <li class="list-group-item">A second item</li>
//     <li class="list-group-item">A third item</li>
//     <li class="list-group-item">A fourth item</li>
//     <li class="list-group-item">And a fifth one</li>
//   </ul>
//     </div>`;

//     let components = document.getElementsByTagName('SidebarComponent');

//     for (var i = 0; i < components.length; i++) {
//         components[i].innerHTML = html;
//     }
// }

class SidebarComponent {
    tagName = 'SidebarComponent';

    list = [];

    constructor() {
        // tự động chạy khi có 1 đối tượng của lớp này tạo ra
        this.category();
        this.render();
    }

    category() {
        let xhttp = new XMLHttpRequest();
        var cat = [];
        xhttp.onload = function () {
            let res = this.responseText;
            cat = JSON.parse(res);
        }
        xhttp.open("GET", `https://dummyjson.com/products/categories`, false);
        xhttp.send();
        this.list = cat;
    }

    render() {
        let html = `<div class="border-end border-bottom"><ul class="list-group list-group-flush">`;
        for (let i = 0; i < this.list.length; i++) {
            html += `<li class="list-group-item">${this.list[i]}</li>`;
        }
        html += `</ul></div>`;

        let components = document.getElementsByTagName(this.tagName);

        for (var i = 0; i < components.length; i++) {
            components[i].innerHTML = html;
        }
    }
}
new SidebarComponent();

// let sidebar = new SidebarComponent();
// sidebar.render(); khi có constructor thì ko cần