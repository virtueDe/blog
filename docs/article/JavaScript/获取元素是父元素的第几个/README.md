## 前言

日常开发在面临某些场景时需要知道当前元素是父元素的第几个元素，或者需要获取当前元素的上下相邻的兄弟元素；

从一个索引序号，很容易得到该索引对应的子节点或者子元素，直接用`parentNode.childNodes[index]` 或 `parentNode.children[index]` 就行。

但反过来，已知一个节点或元素对象，要知道它的索引序号则没有那么直接了。

这里有两种特殊的情况：

- 一是特殊的元素`DOM`有对应的属性表示其索引序号，主要是表格的`TD`和 `TR`元素，表格单元格 TD 元素有 `cellIndex` 属性，表格行 TR 元素有`rowIndex`属性。

- 二是有文本节点、元素节点、注释节点..., 处理的时候要考虑在内

## 实现

### 获取当前元素的上下相邻的兄弟节点

- `previousElementSibling` 是获取前一个兄弟元素节点

- `previousSibling` 是获取前一个兄弟节点

- `nextElementSibling` 是获取后一个兄弟元素节点

- `nextSibling` 是获取后一个兄弟节点

### 普通元素节点使用 `previousElementSibling`

> <https://developer.mozilla.org/zh-CN/docs/Web/API/Element/previousElementSibling>

`previousElementSibling` 返回当前元素在其父元素的子元素节点中的前一个元素节点，如果该元素已经是第一个元素节点，则返回 `null`, 该属性是只读的。

```js
function getChildrenIndex(ele) {
  var i = 0;
  while ((ele = ele.previousElementSibling)) {
    i++;
  }
  return i;
}
```

### 想要包含其他元素节点使用 `previousSibling`

`previousSibling` 返回当前节点的前一个兄弟节点，没有则返回 null.

```js
function getNodeIndex(node) {
  var i = 0;
  while ((ele = ele.previousSibling)) {
    i++;
  }
  return i;
}
```

## 最后

附上 `nodeType` 常量值

| 常量                             | 值  | 描述                                                                                    |
| -------------------------------- | --- | --------------------------------------------------------------------------------------- |
| Node.ELEMENT_NODE                | 1   | 一个 元素 节点，例如 `<p>` 和 `<div>`                                                   |
| Node.ATTRIBUTE_NODE              | 2   | 元素 的耦合 属性。                                                                      |
| Node.Node.TEXT_NODE              | 3   | `Element` 或者 `Attr` 中实际的 文字                                                         |
| Node.CDATA_SECTION_NODE          | 4   | 一个 `CDATASection`，例如 `<!CDATA[[…]]>`。                                                 |
| Node.PROCESSING_INSTRUCTION_NODE | 7   | 一个用于 `XML` 文档的 `ProcessingInstruction (en-US)` ，例如 `<?xml-stylesheet ... ?>` 声明。 |
| Node.COMMENT_NODE                | 8   | 一个 `Comment` 节点。                                                                     |
| Node.DOCUMENT_NODE               | 9   | 一个 `Document` 节点。                                                                    |
| Node.DOCUMENT_TYPE_NODE          | 10  | 描述文档类型的 `DocumentType` 节点。例如 `<!DOCTYPE html>` 就是用于 `HTML5` 的                |
| Node.DOCUMENT_FRAGMENT_NODE      | 11  | 一个 `DocumentFragment` 节点                                                              |
