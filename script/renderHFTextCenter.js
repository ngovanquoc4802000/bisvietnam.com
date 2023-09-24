(function () {
    //Top-Header
    initTopHeader();
    function initTopHeader() {
      templateTopHeader();
      toggle();
    }
    function templateTopHeader() {
    const headerOne = firstTemplate();
    const headerTwo = secondTemplate();
    const headerThree = threeHeader();
    const headerFour = fourHeader();
    const templateHeader = `
        <div class="top-header">
          <div class="container">
              <div class="wrap-in-header">
                 <div class="row">
                   ${headerOne}
                   ${headerTwo}
              </div>
           </div>
           ${headerThree}
          </div>
          ${headerFour}
         </div>
       `;
    const topHeader = document.querySelector(".header");
    topHeader.innerHTML = templateHeader;
    if (!topHeader) return;
    }
    function firstTemplate() {
      const telephone = "84-909 988 041";
      const messenger = "sales@bisvn.net";
      return `
          <div class="col-lg-6 col-12 col-md-6 d-sm-grid">
              <div class="left-top-header">
                 <div class="telephone-header">${telephone}</div>
                  <div class="messenger-header">${messenger}</div>
              </div>
          </div>
          `;
    }
    function secondTemplate() {
      const rightImgFirst = "../../assets/general/logo USA.png";
      const rightImgSecond = "../../assets/general/logo vietnam.png";
      return `
      <div class="col-lg-6 col-md-6 d-flex  justify-content-lg-end justify-content-md-end">
           <div class="right-top-header">
              <ul class="right-icon">
                  <li class="icon-logo--USA"><a href=""><img src="${rightImgFirst}" alt="logo USA"></a></li>
                  <li class="icon-logo--VN"><a href=""><img src="${rightImgSecond}" alt="logo VN"></a></li></ul>
           </div>
       </div>
      `;
    }
    function threeHeader() {
      return `
       <div class="header-content">
       <div class="row">
           <div class="col-lg-2">
               <div class="img-header" style="width: 16rem;">
                   <a href="">
                       <img src="../../assets/general/logo.png" class="img" title="logo" alt="logo">
                   </a>
               </div>
           </div>
           <div class="col-lg-10">
               <div class="product-header">
                   <ul class="product-list">
                       <li class="product-header">
                           <a href="../../../home.html" class="product-link">
                               HOME
                           </a>
                       </li>
                       <li class="product-header">
                           <a href="../../../about-us.html" class="product-link">
                               ABOUTS US
                           </a>
                       </li>
                       <li class="product-header">
                           <a href="../../../product.html" class="product-link active">
                               PRODUCTS
                               <i class="fas fa-chevron-down"></i>
                           </a>
                           <!-- thêm position -->
                           <div class="product-position ps-0">
                               <ul class="product-list-position p-0">
                                   <li class="product-item-position">
                                       <a href="../general/general-industry.html"
                                           class="product-link-position">GENERAL INDUSTRY
                                           <ul class="product-device p-0">
                                               <li class="product-item-device">
                                                   <a href="../general/equiment.html"
                                                       class="product-link-device">EQUIMENT</a>
                                               </li>
                                               <li class="product-item-device">
                                                   <a class="product-link-device"
                                                       href="../general/machine.html">MACHINES</a>
                                               </li>
                                           </ul>
                                       </a>
                                   </li>
                                   <li class="product-item-position">
                                       <a class="product-link-position" href="textile&Grament.html">TEXTILE
                                           & GARMENT
                                           <ul class="product-garment p-0">
                                               <li class="product-item-device">
                                                   <a class="product-link-device"
                                                       href="lightbooths.html">LIGHT
                                                       BOOTHS</a>
                                               </li>
                                               <li class="product-item-device">
                                                   <a class="product-link-device"
                                                       href="colorReaders.html">COLOR
                                                       READERS</a>
                                               </li>
                                               <li class="product-item-device">
                                                   <a class="product-link-device"
                                                       href="texting-instrument.html">TEXTING
                                                       INSTRUMENTS</a>
                                               </li>
                                               <li class="product-item-device">
                                                   <a class="product-link-device"
                                                       href="text-marterial.html">TEXT
                                                       MATERIALS</a>
                                               </li>
                                               <li class="product-item-device">
                                                   <a class="product-link-device"
                                                       href="light.html">LIGHT</a>
                                               </li>
                                               <li class="product-item-device">
                                                   <a class="product-link-device"
                                                       href="others.html">OTHERS</a>
                                               </li>
                                           </ul>
                                       </a>
                                   </li>
                               </ul>
                           </div>
                           <!-- thêm position -->
                       </li>
                       <li class="product-header">
                           <a href="../../../service.html" class="product-link">
                               SERVICES
                           </a>
                       </li>
                       <li class="product-header">
                           <a href="../../../News.html" class="product-link">
                               NEWS
                           </a>
                       </li>
                       <li class="product-header">
                           <a href="../../../contact-us.html" class="product-link">
                               CONTACTS
                           </a>
                       </li>
                   </ul>
                   <div class="form">
                       <form action="" class="form-header">
                           <input type="text" placeholder="Search..." class="input-header">
                           <i class="fa fa-search"></i>
                       </form>
                   </div>
               </div>
           </div>
       </div></div>
       `;
    }
    function fourHeader() {
      return `
      <div class="header-tablet">
          <div class="menu"></div>
            <form action="">
                <input type="text" placeholder="Search...">
           </form>
          <div class="icon-header">
                <i class="fa fa-search"></i>
           </div>
          <div class="icon-menu">
               <i class="fas fa-bars"></i>
          </div>
      </div>
      `;
    }
    // header-toggle
    function toggle() {
      const toggleSpan = document.querySelector(".toggle-header span");
      const headerToggle = document.querySelector(".header-toggle");
      const menu = document.querySelector(".icon-menu");
      console.log(menu);
      console.log(headerToggle);
  
      menu.addEventListener("click", function () {
        headerToggle.classList.toggle("show-siderbar");
      });
  
      toggleSpan.addEventListener("click", function () {
        headerToggle.classList.remove("show-siderbar");
      });
    }
    //CustomerService
    initCustomerService();
    function initCustomerService() {
      cusTomerContainer();
    }
    function cusTomerContainer() {
      const divfist = customerfist();
      const divTwo = customerSeconde();
      const container = `
         <div class="container">
             ${divfist}
             ${divTwo}
         </div>
      `;
      const customer = document.querySelector(".customer-service");
      customer.innerHTML = container;
      if (!customer) return;
    }
    function customerfist() {
      const product = "product";
      return `
      <div class="col-md-12 d-flex align-content-center align-items-baseline">
        <div class="line-introduce bg-white"></div>
        <p class="ms-2 fw-bold font-weight-900 has-huge-font-size fs-3 text-white">
          ${product}
        </p>
      </div>
      `;
    }
    function customerSeconde() {
      const imgThubnail = "../../assets/general/img10.jpg";
      const customerPara = "Service";
      const button = "MORE INFO";
      return `
      <div class="row pb-md-5">
         <div class="col-12 col-md-12 col-lg-6 ">
            <img class="img-thumbnail h-100 object-fit-cover rounded" src="${imgThubnail}" alt="">
        </div>
        <div class="col-12 col-md-12 col-lg-6 bg-danger rounded">
          <div class="customer-red p-3 ">
              <div class="line-translating d-flex align-content-center align-items-baseline">
                  <div class="line-introduce bg-white"></div>
                  <p class="ms-2 fw-bold font-weight-900 has-huge-font-size fs-3 text-white">${customerPara}</p>
              </div>
              <h1 class="customer-heading text-white">HOW WE HELP OUR CLIENTS WORK WITH OUR PRODUCTS</h1>
              <p class="customer-expert text-white font-weight-bold" text>In addition to selling testing
                  instruments and consumables, we
                  offer a
                  range of services to support clients in the field of textile testing. Our skilled team
                  of
                  textile testing experts has the necessary experience and knowledge to provide invaluable
                  training and support, and we have a team of service engineers who will undertake service
                  and
                  calibration support.</p>
              <button class="btn btn-info p-3"><a href="service.html"
                      class="text-white text-decoration-none">${button}</a></button>
          </div>
        </div>
     </div>s
      `;
    }
    //Footer
    initfooter();
    function initfooter() {
      footer();
    }
    function footer() {
      const footerOne = fistFooter();
      const footerTwo = secondFooter();
      const templateFooter = `
         <div class="container">
            ${footerOne}
            ${footerTwo}
         </div>
       `;
       const footerfll = document.querySelector(".footerFll");
       footerfll.innerHTML = templateFooter;
       if(!footerfll) return;
    }
    function fistFooter() {
      const imglogo = "../assets/general/logo-footer.png";
      const telephone = [
        "+84-913 476379 (Mr. Hoàng)",
        "+84-909 988 041 (Ms. Duyên)",
        "Professional supplier of equipment supporting Textile & Garment industry and other industry solutions.",
      ];
      return`
       <div class="footer-top">
       <div class="row">
           <div class="col-md-6 col-lg-3 about-footer">
               <a href="">
                   <img class="logo-img ms-5" src="${imglogo}" alt="">
               </a>
               <ul>
                   <li><a href="tel:(010) 1234 4321"><i class="fas fa-phone fa-flip-horizontal"></i> ${telephone[0]}</a></li>
                   <li><a href="tel:(010) 1234 4321"><i class="fas fa-phone fa-flip-horizontal"></i>${telephone[1]}</a></li>
                   <li><i class="fas fa-map-marker-alt"></i>
                      ${telephone[2]}
                   </li>
               </ul>
           </div>
           <div class="col-md-6 col-lg-2 page-more-info">
               <div class="footer-title">
                   <h4>BIS</h4>
               </div>
               <ul>
                   <li><a href="home.html">Home</a></li>
                   <li><a href="about-us.html">About Us</a></li>
                   <li><a href="product.html">Products</a></li>
                   <li><a href="service.html">Services</a></li>
                   <li><a href="News.html">News</a></li>
                   <li><a href="contact-us.html">Contact Us</a></li>
               </ul>
           </div>
           <div class="col-md-6 col-lg-3 page-more-info">
               <div class="footer-title">
                   <h4>PRODUCTS</h4>
               </div>
               <ul>
                   <li><a href="products/2/general/general-industry.html">GENERAL INDUSTRY</a></li>
                   <li><a href="products/2/textile/textile&Grament.html">TEXTILE & GARMENT</a></li>
               </ul>
           </div>
           <div class="col-md-6 col-lg-4 page-more-info">
               <div class="footer-title">
                   <h4>CONTACT INFO</h4>
                   <ul class="footer-social">
                       <li><a href="products/2/brand.html" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                       <li><a href="products/2/brand.html" target="_blank"><i class="fab fa-instagram"></i></a></li>
                       <li><a href="products/2/brand.html" target="_blank"><i class="fab fa-google-plus"></i></a></li>
  
                   </ul>
               </div>
               <ul>
                   <li><a href="#">BIS Trading Service Co., Ltd.</a></li>
                   <li><a href="#">216 Dong Hung Thuan 2 Str., Quarter 4,</a></li>
                   <li><a href="#">Dong Hung Thuan W., Dist.12, HCMC</a></li>
                   <li><a href="#">Email: sales@bisvn.net</a></li>
               </ul>
           </div>
       </div>
   </div>
       `;
    }
    function secondFooter() {
      return `
      <div class="footer-bottom">
                  <div class="container">
                      <div class="row">
                          <div class="col-sm-7 col-md-8 col-11">
                              <p><a href="products/2/kao.html" class="text-danger text-decoration-none">BIS</a> © 2016 All Rights Reserved .
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
      `;
    }
})();
// RENDER HEADER FOOTER TEXTCENTER JAVASCRIPT
  