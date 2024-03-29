## 参考地址

1. www.30secondsofcode.org （30 seconds of code）
2. 1loc.dev （Favorite JavaScript Utilities

## 去掉空格

```js
/**
 * @param { string } str 待处理字符串
 * @param  { number } type 去除空格类型 1-所有空格  2-前后空格  3-前空格 4-后空格 默认为1
 */
export function trim(str, type = 1) {
  if (type && type !== 1 && type !== 2 && type !== 3 && type !== 4) return;
  switch (type) {
    case 1:
      return str.replace(/\s/g, "");
    case 2:
      return str.replace(/(^\s)|(\s*$)/g, "");
    case 3:
      return str.replace(/(^\s)/g, "");
    case 4:
      return str.replace(/(\s$)/g, "");
    default:
      return str;
  }
}
```

## 大小写转换

```js
/**
 * @param { string } str 待转换的字符串
 * @param { number } type 1-全大写 2-全小写 3-首字母大写 其他-不转换
 */

export function turnCase(str, type) {
  switch (type) {
    case 1:
      return str.toUpperCase();
    case 2:
      return str.toLowerCase();
    case 3:
      return str[0].toUpperCase() + str.substr(1).toLowerCase();
    default:
      return str;
  }
}
```

## base64 转 file

```js
/**
 *  @param { base64 } base64
 *  @param { string } filename 转换后的文件名
 */
export const base64ToFile = (base64, filename) => {
  let arr = base64.split(",");
  let mime = arr[0].match(/:(.*?);/)[1];
  let suffix = mime.split("/")[1]; // 图片后缀
  let bstr = atob(arr[1]);
  let n = bstr.length;
  let u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], `${filename}.${suffix}`, { type: mime });
};
```

## base64 转 blob

```js
/**
 *  @param { base64 } base64
 */
export const base64ToBlob = (base64) => {
  let arr = base64.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
};
```

## blob 转 file

```js
/**
 *  @param { blob } blob
 *  @param { string } fileName
 */
export const blobToFile = (blob, fileName) => {
  blob.lastModifiedDate = new Date();
  blob.name = fileName;
  return blob;
};
```

## file 转 base64

```js
/**
 * @param { * } file 图片文件
 */
export const fileToBase64 = (file) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function (e) {
    return e.target.result;
  };
};
```

## 复制文本

```js
const handleCopyText = async (text: string) => {
  try {
    const clipboardObj = navigator.clipboard;
    if (!clipboardObj) return;
    await clipboardObj.writeText(text);
  } catch (error) {
    console.log(error);
  }
};
```

## 清除所有 cookie

```js
const clearCookies = document.cookie
  .split(";")
  .forEach(
    (cookie) =>
      (document.cookie = cookie
        .replace(/^ +/, "")
        .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`))
  );
```

## 获取选中的文本

```js
const getSelectedText = () => window.getSelection().toString();
getSelectedText();
```

## xhr 下载，可获取进度可取消

```ts
export const downloadResources = (options: {
  url: string;
  fileName: string;
  onProgress?: (progress: number) => void;
  onDownloadAfter?: () => void;
  onError?: () => void;
}) => {
  const { url, fileName, onProgress, onDownloadAfter, onError } = options;
  const xhr = new XMLHttpRequest();

  xhr.onprogress = (event) => {
    let progress = 0;
    if (event.loaded === event.total) {
      progress = 100;
    } else {
      progress = parseInt(
        String(((event.loaded / event.total) as any).toFixed(2) * 100)
      );
    }
    onProgress && onProgress(progress);
  };

  xhr.onload = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const a = document.createElement("a");
      const urls = window.URL.createObjectURL(xhr.response);
      a.href = urls;
      a.download = fileName;
      a.click();
      window.URL.revokeObjectURL(url);

      onDownloadAfter && onDownloadAfter();
    }
  };
  xhr.responseType = "blob";
  xhr.open("GET", url, true);
  xhr.send();
  if (onError) {
    xhr.onerror = onError;
  }
  return xhr;
  // xhr.abort();
};
```

## 可设置的超时 Promise 任务

```ts
// fn须为Promise
export const timeOutFn = (fn: any, ms = 15000) => {
  return Promise.race([
    fn,
    //超时任务
    new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("超时"));
      }, ms);
    }),
  ]);
};
```
