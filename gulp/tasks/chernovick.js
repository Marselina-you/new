
export const images = () => {
    return app.gulp.src(app.path.src.images)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "IMAGES",
                message: "Error: <%= error.message %"
            }))
        )
        .pipe(app.plugins.newer(app.path.build.images))
        .pipe(webp())
        .pipe(app.gulp.dest(app.path.build.images))

        .pipe(app.gulp.src(app.path.src.images))
        .pipe(app.plugins.newer(app.path.build.images))
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }]
            interlaced: true,
            optimizationLevel: 3
        }))

        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.gulp.src(app.path.src.svg))
        .pipe(app.gulp.dest(app.path.build.images))
        
        .pipe(app.plugins.browsersync.stream());


}
npm install

> es5-ext@0.10.58 postinstall D:\OpenServer\domains\new\node_modules\es5-ext
> node -e "try{require('./_postinstall')}catch(e){}"


🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺                                    🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦

24 февраля Россия напала на Украину, что уже понесло за собой 3500-6000 жертв среди русских военных и примерно 2000-4000 - среди украинских, а также 549 убитых граждан, в том числе 26 детей.

Народ Украины полностью мобилизован и готов защищать свою страну от вражеского вторжения. 91% украинцев полностью поддерживает своего президента Владимира Зеленского и его ответные действия на нападение России.

Весь мир осудил необоснованное вторжение и решил ввести невиданные ранее санкции против России. С каждым новым днем они будут ощущаться все сильнее и сильнее среди мирных граждан.

В то же время, российское правительство ограничивает доступ граждан ко внешней информации, насаживая единоправильные формулировки и версии происходящего.

В качестве надежного источника информации загрузите безопасный браузер Tor:

https://www.torproject.org/

И посетите:

https://www.bbcweb3hytmzhn5d532owbu6oqadra5z3ar726vq5kgwwn6aucdccrad.onion/russian

🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺                                    🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦

Прекратите эту бессмысленную войну! Остановите Путина!

🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺                                    🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦


> cwebp-bin@5.1.0 postinstall D:\OpenServer\domains\new\node_modules\cwebp-bin
> node lib/install.js

  ‼ tunneling socket could not be established, cause=getaddrinfo ENOTFOUND 3128
  ‼ cwebp pre-build test failed
  i compiling from source
  × RequestError: tunneling socket could not be established, cause=getaddrinfo ENOTFOUND 3128
    at ClientRequest.<anonymous> (D:\OpenServer\domains\new\node_modules\got\index.js:111:21)
    at Object.onceWrapper (events.js:421:26)
    at ClientRequest.emit (events.js:314:20)
    at ClientRequest.onError (D:\OpenServer\domains\new\node_modules\tunnel-agent\index.js:179:21)
    at Object.onceWrapper (events.js:421:26)
    at ClientRequest.emit (events.js:314:20)
    at Socket.socketErrorListener (_http_client.js:427:9)
    at Socket.emit (events.js:314:20)
    at emitErrorNT (internal/streams/destroy.js:92:8)
    at emitErrorAndCloseNT (internal/streams/destroy.js:60:3)

> gifsicle@5.3.0 postinstall D:\OpenServer\domains\new\node_modules\gifsicle
> node lib/install.js

tunneling socket could not be established, cause=getaddrinfo ENOTFOUND 3128
gifsicle pre-build test failed
compiling from source
Error: Command failed: C:\Windows\system32\cmd.exe /s /c "autoreconf -ivf"
"autoreconf" �� ���� ����७��� ��� ���譥�
��������, �ᯮ��塞�� �ணࠬ��� ��� ������ 䠩���.


    at D:\OpenServer\domains\new\node_modules\bin-build\node_modules\execa\index.js:231:11
    at processTicksAndRejections (internal/process/task_queues.js:97:5)
    at async Promise.all (index 0)

> mozjpeg@6.0.1 postinstall D:\OpenServer\domains\new\node_modules\mozjpeg
> node lib/install.js

  ‼ tunneling socket could not be established, cause=getaddrinfo ENOTFOUND 3128
  ‼ mozjpeg pre-build test failed
  i compiling from source
  × RequestError: tunneling socket could not be established, cause=getaddrinfo ENOTFOUND 3128
    at ClientRequest.<anonymous> (D:\OpenServer\domains\new\node_modules\got\index.js:111:21)
    at Object.onceWrapper (events.js:421:26)
    at ClientRequest.emit (events.js:314:20)
    at ClientRequest.onError (D:\OpenServer\domains\new\node_modules\tunnel-agent\index.js:179:21)
    at Object.onceWrapper (events.js:421:26)
    at ClientRequest.emit (events.js:314:20)
    at Socket.socketErrorListener (_http_client.js:427:9)
    at Socket.emit (events.js:314:20)
    at emitErrorNT (internal/streams/destroy.js:92:8)
    at emitErrorAndCloseNT (internal/streams/destroy.js:60:3)

> optipng-bin@6.0.0 postinstall D:\OpenServer\domains\new\node_modules\optipng-bin
> node lib/install.js

  ‼ tunneling socket could not be established, cause=getaddrinfo ENOTFOUND 3128
  ‼ optipng pre-build test failed
  i compiling from source
  × Error: Command failed: C:\Windows\system32\cmd.exe /s /c "./configure --with-system-zlib --prefix="D:\OpenServer\domains\new\node_modules\optipng-bin\vendor" --bindir="D:\OpenServer\domains\new\node_modules\optipng-bin\vendor""
"." �� ���� ����७��� ��� ���譥�
��������, �ᯮ��塞�� �ணࠬ��� ��� ������ 䠩���.


    at D:\OpenServer\domains\new\node_modules\bin-build\node_modules\execa\index.js:231:11
    at processTicksAndRejections (internal/process/task_queues.js:97:5)
    at async Promise.all (index 0)

> swiper@8.0.7 postinstall D:\OpenServer\domains\new\node_modules\swiper
> node -e "try{require('./postinstall')}catch(e){}"

npm WARN new@1.0.0 No description
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules\sass\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules\browser-sync\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: gifsicle@5.3.0 (node_modules\gifsicle):
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: gifsicle@5.3.0 postinstall: `node lib/install.js`
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: Exit status 1
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: optipng-bin@6.0.0 (node_modules\optipng-bin):
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: optipng-bin@6.0.0 postinstall: `node lib/install.js`
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: Exit status 1

added 1061 packages from 639 contributors and audited 1083 packages in 146.986s

94 packages are looking for funding
  run `npm fund` for details

found 9 vulnerabilities (3 moderate, 4 high, 2 critical)
  run `npm audit fix` to fix them, or `npm audit` for details

User@DESKTOP-KU1MR1J MINGW64 /d/OpenServer/domains/new (main)