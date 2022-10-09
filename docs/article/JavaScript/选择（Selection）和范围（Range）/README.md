## 前言

最近一段时间做了个 TTS 的文本编辑器，主要基于`contenteditable`。

其中主要核心的知识点就是 `Selection` && `Range` 的运用。

## 范围（Range）

> <https://developer.mozilla.org/zh-CN/docs/Web/API/Range>

`Range` 接口表示一个包含节点与文本节点的一部分的文档片段。

可以使用 `Document.createRange` 方法创建 `Range`。也可以用 `Selection` 对象的 `getRangeAt()` 方法或者 `Document` 对象的 `caretRangeFromPoint()` 方法获取 `Range` 对象。

还可以用 `new Range()`构造函数。

### 选择范围

使用`setStart(node, offset)`和 `range.setEnd(node, offset)`来设置边界

需要注意的是如果 node 是一个文本节点，那么 offset 则必须是其文本中的位置。

```html
<p id="p">Hello</p>
```

```js
let range = new Range();
range.setStart(p.firstChild, 2);
range.setEnd(p.firstChild, 4);
```

或者，如果 node 是一个元素节点，那么 offset 则必须是子元素的编号。

```html
<p id="p">Example: <i>italic</i> and <b>bold</b></p>
```

```js
let range = new Range();
range.setStart(p, 0);
range.setEnd(p, 2);
```

除了`setStart` 和 `setEnd`, 选择范围还有许多比较便利的方法

设置范围的起点：

- setStart(node, offset) 将起点设置在：node 中的位置 offset

- setStartBefore(node) 将起点设置在：node 前面

- setStartAfter(node) 将起点设置在：node 后面

设置范围的终点（类似的方法）：

- setEnd(node, offset) 将终点设置为：node 中的位置 offset

- setEndBefore(node) 将终点设置为：node 前面

- setEndAfter(node) 将终点设置为：node 后面

在所有这些方法中，node 都可以是文本或者元素节点：对于文本节点，偏移量 offset 跨越的是很多字母，而对于元素节点则跨越的是很多子节点。

更多创建范围的方法：

- selectNode(node) 设置范围以选择整个 node
- selectNodeContents(node) 设置范围以选择整个 node 的内容
- collapse(toStart) 如果 toStart=true 则设置 end=start，否则设置 start=end，从而折叠范围
- cloneRange() 创建一个具有相同起点/终点的新范围

### 编辑范围

创建范围后，我们可以使用以下方法操作其内容：

- deleteContents() —— 从文档中删除范围中的内容

- extractContents() —— 从文档中删除范围中的内容，并将删除的内容作为 DocumentFragment 返回

- cloneContents() —— 复制范围中的内容，并将复制的内容作为 DocumentFragment 返回

- insertNode(node) —— 在范围的起始处将 node 插入文档

- surroundContents(node) —— 使用 node 将所选范围中的内容包裹起来。要使此操作有效，则该范围必须包含其中所有元素的开始和结束标签：不能像 `<i>abc` 这样的部分范围。

使用这些方法，我们基本上可以对选定的节点执行任何操作。

### 光标插入文本

```js
const textNode = document.createTextNode("hello");
range.insertNode(textNode);
```

### 获取选中文本的位置信息

通过创建 range 对象我们可以获得任何一个文本节点中的任何一段文本相对与整个页面的位置信息，然后再通过减去文本容器元素相对于整个页面的位置信息，我们就可以得到划词区域文本相对与文本容器的位置信息了。

```js
const {
  startContainer, // 起始节点
  startOffset, // 起始节点偏移量
  endContainer, // 终止节点
  endOffset, // 终止节点偏移量
} = document.getSelection().getRangeAt(0);

// 创建一个 range 对象
const range = document.createRange();
// 设置需要获取位置信息的文本节点以及偏移量
range.setStart(startContainer, startOffset);
range.setEnd(startContainer, startContainer.textContent.length);
// 通过 getBoundingClientRect 获取位置信息
const rect = range.getBoundingClientRect();
```

多行文本的话需要 `range.getClientRects()`

### 还原之前的选区

保存之前的选区存下来，然后后面复原就行了

```js
let lastRange = null;
txt.onkeyup = function (e) {
  var selection = document.getSelection();
  // 保存最后的range对象
  lastRange = selection.getRangeAt(0);
};
btn.onclick = () => {
  const selection = document.getSelection();
  selection.removeAllRanges();
  // 还原上次的选区
  selection.addRange(lastRange);
};
```

### 给指定选区包裹标签

来看一个比较常见的例子，在选中时将所选区域包裹一层标签。

这个是有官方 API 支持的，需要用到 range.surroundContents 方法，表示给选区包裹一层标签

```js
const mark = document.createElement("mark");
Range.surroundContents(mark);
```

<!-- `Range` 对象上的属性和方法可以直接参照 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Range) -->

### 属性

| 属性                          | 含义                                                             |
| ----------------------------- | ---------------------------------------------------------------- |
| Range.collapsed               | 返回一个表示 Range 的起始位置和终止位置是否相同的布尔            |
| Range.commonAncestorContainer | 返回完整包含 startContainer 和 endContainer 的、最深一级的节点。 |
| Range.endContainer            | 返回包含 Range 终点的节点。                                      |
| Range.endOffset               | 返回一个表示 Range 终点在 endContainer 中的位置的数字。          |
| Range.startContainer          | 返回包含 Range 开始的节点。                                      |
| Range.startOffset             | 返回一个数字，表示 Range 在 startContainer 中的起始位置。        |

### 方法

#### Range.collapsed

返回一个表示 Range 的起始位置和终止位置是否相同的布尔值

#### Range.compareBoundaryPoints()

返回一个常量，表示节点是否在 Range 的前、后、中、外。

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
