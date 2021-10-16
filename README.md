# Lottery

A small lottery desktop program built by electron for pupils.

## Prerequisities

* nodejs
* npm(npm install -g npm)
* cnpm(npm install cnpm -g --registry=http://registry.npm.taobao.org)

## Run

```
npm start
```

## Building

```
cnpm install --save-dev electron-packager
cnpm install --save-dev electron
npx electron-packager . lottery --platform=win32 --arch=x64
```

## Reference

* https://www.electronjs.org/zh/docs/latest/