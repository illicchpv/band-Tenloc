// tempmenu.js
document.addEventListener('DOMContentLoaded', function () {

  // если стр. запущене не локально, ничего не добавляем
  if (location.hostname !== '127.0.0.1')
    return;

  document.querySelector("body").insertAdjacentHTML('afterbegin', 
  `
  <!-- верхнее техническое меню. ну может протестировать что-то понадобиться -->
  <div class="testMenu">
    <div class="testMenu__pages">
      <div class="testMenu__page">
        <a href="/">main</a>
      </div>
      <div class="testMenu__page">
        <a href="./testpage1.html"><i>test</i> page1</a>
      </div>
      <div class="testMenu__page">
        <a href="./testpage2.html"><i>test</i> page2</a>
      </div>
      <div class="testMenu__page">
        <a href="./testpage3.html"><i>test</i> page3</a>
      </div>
    </div>
  </div>
  `);

  // // если стр. запущене не локально, убираем верхнее техническое меню
  // if (location.hostname !== '127.0.0.1')
  //   document.querySelector(".testMenu").remove()
});
