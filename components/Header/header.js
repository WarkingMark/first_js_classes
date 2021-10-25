class Header {
    constructor() {
        this.headerElem = this.headerElem;
    }
    headerElem = [
        {name : 'Главная', url : `/`},
        {name : 'Новости', url : `/news`},
        {name : 'Каталог', url : `/catalog`},
        {name : 'Галерея', url : `/gallery`},
    ];
    createLogo (src) {
        let parentLogo = document.createElement('div');
        parentLogo.classList.add('logo');

        let logo = `<img src = ${src}></img>`

        parentLogo.innerHTML = logo;

        return parentLogo;
    }
    createNav(array) {
        let html = '';
        let nav = document.createElement('nav');
        nav.classList.add('header__items');
        array.forEach(({name, url}) => {

            html += `<div class="items__item">
                        <a href="${url}">${name}</a>
                    </div>`
            });
            nav.innerHTML = html;
        return nav;
    }
    render() {
        let logo = header.createLogo('https://sun9-17.userapi.com/impg/8jQNUMrlYoSWvzUb_cmkifJy70bxesQnXC1yIA/3zanUezfSsM.jpg?size=1112x1516&quality=96&sign=7792b1007647e364d210d729f379b85e&type=album');
        let nav = header.createNav(this.headerElem);
        ROOT_HEADER.appendChild(logo);
        ROOT_HEADER.appendChild(nav);

    }
}
let header = new Header;

header.render();
