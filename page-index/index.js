// index.js
log('index.js')

const header_Onload = function ({incId, incFrom, incClass, docEl, externEl, externUrl}) {
  externEl.querySelector("#url").innerHTML = externUrl
}

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

  // IncludHtml.init("./common", true, includ_Finish);
  IncludHtml.init("./common", true, () => { 
    document.querySelector("body").style.display = ''; 
  });
});
