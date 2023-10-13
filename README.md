
### используем плагины для vscode
- 'git Graph'
- 'Live Sass Compiler '
- 'Live Server'
- 'настройками live sass см. info.txt'

https://github.com/illicchpv/band-Tenloc
  репозиторий

https://illicchpv.github.io/band-Tenloc/
  опубликовано - сайт ветка master


кусок из setting.json связанный с настройками live sass  
  \file->Prefer..->Settings \ ткнуть на значек справа сверху \open settings\

"liveSassCompile.settings.showOutputWindowOn": "Error",
  "liveSassCompile.settings.formats": [
    {
        "format": "expanded",
        "extensionName": ".css",
        "savePath": "~/../css"
    }
    // ,
    // {
    //     "extensionName": ".min.css",
    //     "format": "compressed",
    //     "savePath": "~/../css/"
    // }
  ],
  // // исключения
  // "liveSassCompile.settings.excludeList": [
  //     "**/node_modules/**",
  //     ".vscode/**"
  // ],
  // отключение .map файлов
  "liveSassCompile.settings.generateMap": false,
  //автопрефиксы, -webkit- -moz-..
  "liveSassCompile.settings.autoprefix": [
      "> 1%",
      "last 2 versions"
  ],


используемые фонты
  Montserrat Regular    400
  Montserrat Medium     500
  Montserrat SemiBold   600
  Montserrat Bold       700
  Montserrat ExtraBold  800
  Montserrat Black      900
  Candal Regular
  Roboto Regular


