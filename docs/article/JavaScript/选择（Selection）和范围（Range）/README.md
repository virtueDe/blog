## 前言

最近一段时间做了个 TTS 的文本编辑器，主要基于`contenteditable`。

其中主要核心的知识点就是 `Selection` && `Range` 的运用。

## 范围（Range）

> <https://developer.mozilla.org/zh-CN/docs/Web/API/Range>

`Range` 接口表示一个包含节点与文本节点的一部分的文档片段。

可以使用 `Document.createRange` 方法创建 `Range`。也可以用 `Selection` 对象的 `getRangeAt()` 方法或者 `Document` 对象的 `caretRangeFromPoint()` 方法获取 `Range` 对象。

还可以用 `new Range()`构造函数。

`Range` 对象上的属性和方法可以直接参照 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Range)

## 选择（Selection）

`Selection` 对象表示用户选择的文本范围或插入符号的当前位置。

它代表页面中的文本选区，可能横跨多个元素。文本选区由用户拖拽鼠标经过文字而产生。要获取用于检查或修改的 `Selection` 对象，请调用 `window.getSelection()`。

- 获取选中的文本

  ```ts
  getSelection()?.toString();
  ```

未完成

参考： <https://zh.javascript.info/selection-range>

<https://juejin.cn/post/7140078451205079054>

<https://juejin.cn/post/7068232010304585741#heading-2>

<https://developer.mozilla.org/zh-CN/docs/Web/API/Range>

<https://developer.mozilla.org/zh-CN/docs/Web/API/Selection>
