// index.js
// document.addEventListener('DOMContentLoaded', function () {
//   console.log('document is ready.', location.hostname);

//   document.querySelector("body").style.display = ''
// });

// index.js
log('index.js')

document.addEventListener('DOMContentLoaded', function () {
  console.log('document is ready.', location.hostname);

  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  if (darkThemeMq.matches) {
    //console.log(' Theme set to dark.')
    document.documentElement.classList.remove('themeLight')
    document.documentElement.classList.add('themeDark')
  } else {
    //console.log(' Theme set to light.')
    document.documentElement.classList.add('themeLight')
    document.documentElement.classList.remove('themeDark')
  }

  document.querySelector("body").style.display = ''
});