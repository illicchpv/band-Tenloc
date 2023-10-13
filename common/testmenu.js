// testmenu.js
log('testmenu.js')
document.addEventListener('DOMContentLoaded', function () {

  // если стр. запущене не локально, ничего не добавляем
  if (location.hostname !== '127.0.0.1')
    return;

  const $body = document.querySelector("body")
  $body.insertAdjacentHTML('afterbegin',
    `
  <!-- верхнее техническое меню. ну может протестировать что-то понадобиться -->
  <div class="testMenu">
    <div class="testMenu__pages">
      <div class="testMenu__page" title="перейти на index.html">
        <a href="/">main</a>
      </div>
      <div class="testMenu__page" title="перейти на testpage1.html">
        <a href="./testpage1.html"><i>test</i> page1</a>
      </div>
      <div class="testMenu__page" title="перейти на testpage2.html">
        <a href="./testpage2.html"><i>test</i> page2</a>
      </div>
      <div class="testMenu__page" title="перейти на testpage3.html">
        <a href="./testpage3.html"><i>test</i> page3</a>
      </div>
      <div class="testMenu__page">
        <button onclick="themeChange()" title="сменить схему цветов"><span id="theme">light<span></button>
      </div>      
    </div>
  </div>
  `);

  themeChange(true)
});
function themeChange(displayOnly) {
  if (!displayOnly) {
    document.documentElement.classList.toggle('themeLight')
    document.documentElement.classList.toggle('themeDark')
  }
  if (document.documentElement.classList.contains('themeDark')) {
    document.getElementById('theme').innerText = 'dark->light'
  } else {
    document.getElementById('theme').innerText = 'light->dark'
  }
}