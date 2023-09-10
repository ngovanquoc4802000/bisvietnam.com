(function () {
    initTopHeader();

    function initTopHeader() {
        renderContainer();
    }

    function renderContainer() {
        const divFirst = renderFistTopHeader();
        const divSecond = renderSecondTopHeader();
        const template = `
            <div class="container">
                <div class="row">
                    ${divFirst}
                    ${divSecond}
                </div>
            </div>
        `;
        const topHeader = document.querySelector('.top-header');
        // false first
        if (!topHeader) return;

        // insertAdjacentHTML
        topHeader.insertAdjacentHTML('beforeend', template);
        // innerHTML
        // topHeader.innerHTML = template;
    }

    function renderFistTopHeader() {
        const phone = '84-909 988 041';
        const email = 'sales@bisvn.net';
        return `
            <div class="col-12 col-md-6 d-flex d-sm-flex left-top-header">
                <div class="telephone-header">
                    <span>${phone}</span>
                </div>
                <div class="messenger-header">${email}</div>
            </div>
        `;
    }

    function renderSecondTopHeader() {
        return `
            <div class="col-12 col-md-6 d-md-flex flex-md-row-reverse ">
                <a href="" class="mg-header text-decoration-none">
                    <img src="assets/general/logo USA.png" alt="logo USA">
                </a>
                <a href="">
                    <img src="assets/general/logo vietnam.png" alt="logo VN">
                </a>
            </div>
        `;
    }

    function templateTopHeader() {
        return ``;
    }

    function initNavbar() { }

    function initNavbarMobile() { }

    function initNavbarDesktop() { }
})();