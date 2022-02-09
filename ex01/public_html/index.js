// ポップアップのセッティング処理


function popupSetting(){
  let popup = document.getElementById('popup');
  if(!popup) return;

  let bgBlack = document.getElementById('bg-black');
  let closeBtn = document.getElementById('close-btn');
  let showBtn = document.getElementById('show-btn');
  // ポップアップ
  popUp(bgBlack);
  popUp(closeBtn);
  popUp(showBtn);
  //bgTranslate(bgtranslate);
  // ポップアップ処理
  function popUp(elem){
    if(!elem) return;

    elem.addEventListener('click', function(){
      popup.classList.toggle('is-show');
    });
  }
}
/*
$(function() {
jQuery(".popup-inner").css("top","20%");
  $(".popup-inner").animate({
    top: "+=10%"},2000);
});
*/
// ポップアップのセッティング
popupSetting();


jQuery(".button").click(function() {
  $(".popup-inner").animate({
    top: "+=5%"},100);
});

jQuery(".close-btn").click(function() {
  $(".popup-inner").animate({
    top: "-=5%"},300);
});

jQuery(".bg-black").click(function() {
  $(".popup-inner").animate({
    top: "-=5%"},300);
  $(".popup-inner").css("top","30%");
});





/*
jQuery(".button").click(function(){
        jQuery(".popup-inner").css("transform","translate(-50%, -30%)");
        });
*/
