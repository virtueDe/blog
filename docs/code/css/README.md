## CSS 变量

声明一个自定义属性，属性名需要以两个减号（--）开始，属性值则可以是任何有效的 CSS 值。和其他属性一样，自定义属性也是写在规则集之内的，如下：

```css
:root {
  --main-bg-color: brown;
}
element {
  background-color: var(--main-bg-color);
}
```

## 自定义滚动条

为具有可滚动溢出的元素自定义滚动条样式。

- 用于::-webkit-scrollbar 设置滚动条元素的样式。

- 用于::-webkit-scrollbar-track 设置滚动条轨道的样式（滚动条的背景）。

- 用于::-webkit-scrollbar-thumb 设置滚动条拇指（可拖动元素）的样式。

```html
<div class="custom-scrollbar">
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
    Iure id exercitationem nulla qui repellat laborum vitae, <br />
    molestias tempora velit natus. Quas, assumenda nisi. <br />
    Quisquam enim qui iure, consequatur velit sit?
  </p>
</div>
```

```css
.custom-scrollbar {
  height: 70px;
  overflow-y: scroll;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #1e3f20;
  border-radius: 12px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #4a7856;
  border-radius: 12px;
}
```
