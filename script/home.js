(function () {
  var mockupBannerSlider = [
    {
      img: "assets/general/tu-soi-mau-x-rite-SpectraLight-QC-Light-Booth-800x500-768x480 (1).gif",
      title: "First slide label",
      description: "Some representative placeholder content for the first slide."
    },
    {
      img: "assets/general/hop-soi-mau-cac60-verivide.gif",
      title: "First slide label",
      description: "Some representative placeholder content for the first slide.",
    },
    {
      img: "assets/general/img10.jpg",
      title: "First slide label",
      description: "Some representative placeholder content for the first slide.",
    },
  ];

  initCarouselInner();
  function initCarouselInner() {
    // loop forEach
    const list = renderListItemUsingForLoop();
    // loop Reduce
    // const list = renderListItemUsingReduce();
  }

  function renderListItemUsingForLoop() {
    let template = "";
    mockupBannerSlider.forEach((item, index) => {
      template += renderDetail(item, index);
    });
    return template;
  }

  function renderListItemUsingReduce() {
    return mockupBannerSlider.reduce((init, item, index) => {
      init += renderDetail(item, index);
      return init;
    }, "");
  }

  function renderDetail(item, index) {
    return `
    <div class="carousel-inner">
    <div class="carousel-item ${index === 0 ? "active" : ""}">
        <img src="${item.img}" class="d-block w-100 rounded " alt="...">
        <div class="carousel-caption d-none d-md-block">
            <h5>${item.title}</h5>
            <p>${item.description}</p>
        </div>
    </div>
    </div>
    `;
  }

})();
