var products_on_page = $('.products-on-page');
var next_url = products_on_page.data('next-url');
var load_more_btn = $('.load-more_btn');
var load_more_spinner = $('.load-more_spinner');
function getEqualHeightGrid() {
    $('.product-grid .grid__item').responsiveEqualHeightGrid();
    $('.product-grid .grid__item .card-wrapper').responsiveEqualHeightGrid();
     $('.product-grid .grid__item .card-wrapper .card').responsiveEqualHeightGrid();
     $('.product-grid .grid__item .card-wrapper .card__heading').responsiveEqualHeightGrid();
     $('.product-grid .grid__item .card-wrapper .card__inner').responsiveEqualHeightGrid();
     // $('.product-grid .grid__item .card-wrapper .card__inner .card__media').responsiveEqualHeightGrid();
    //  $('.product-grid .grid__item .card-wrapper .card__content').responsiveEqualHeightGrid();
   }
function loadMoreProducts() {
if(!products_on_page){
  var products_on_page = $('.products-on-page');
}
if(!load_more_btn){
var load_more_btn = $('.load-more_btn');
}
if(!load_more_spinner){
var load_more_spinner = $('.load-more_spinner');
}
if(!next_url){
  var next_url = $(".products-on-page").attr("data-next-url");
}
  $.ajax(
    {
      url: next_url,
      type: 'GET',
      dataType: 'html',
      beforeSend: function(){
      	load_more_btn.hide();
        load_more_spinner.show();
      }
    }
  ).done(function(next_page){
    load_more_spinner.hide();
    var new_products = $(next_page).find('.products-on-page');
    var new_url = new_products.data('next-url');
    if(new_url)
      load_more_btn.show();
    next_url = new_url;
    $(".products-on-page").attr("data-next-url", next_url);
    products_on_page.append(new_products.html());
    trustspot_init();
    getEqualHeightGrid();
  })
}
