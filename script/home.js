(function () {
  const mockupBannerSlider = [
    {
      img: "",
      title: "",
      description: "",
    },
    {
      img: "",
      title: "",
      description: "",
    },
    {
      img: "",
      title: "",
      description: "",
    },
  ];
  function initCarouselInner() {

    // loop forEach
    const list = renderListItemUsingForLoop();
    // loop Reduce
    // const list = renderListItemUsingReduce();
  }

  function renderListItemUsingForLoop() {
    let template = '';
    mockupBannerSlider.forEach((item, index) => {
      template += renderDetail(item, index);
    });
    return template
  }

  function renderListItemUsingReduce() {
    return mockupBannerSlider.reduce((init, item, index) => {
      init += renderDetail(item, index);
      return init;
    }, '');
  }

  function renderDetail(item, index) {
    return `
    <div class="carousel-item ${index === 0 ? 'active' : ''}">
        <img src="${item.img}" class="d-block w-100 rounded " alt="...">
        <div class="carousel-caption d-none d-md-block">
            <h5>${item.title}</h5>
            <p>${item.description}</p>
        </div>
    </div>
    `
  }
})();
