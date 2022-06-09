import{_ as i,o as e,c as n,d as l}from"./app.4bcef66a.js";const s={},r=l(`<h1 id="css-\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#css-\u53D8\u91CF" aria-hidden="true">#</a> CSS \u53D8\u91CF</h1><p>\u58F0\u660E\u4E00\u4E2A\u81EA\u5B9A\u4E49\u5C5E\u6027\uFF0C\u5C5E\u6027\u540D\u9700\u8981\u4EE5\u4E24\u4E2A\u51CF\u53F7\uFF08--\uFF09\u5F00\u59CB\uFF0C\u5C5E\u6027\u503C\u5219\u53EF\u4EE5\u662F\u4EFB\u4F55\u6709\u6548\u7684 CSS \u503C\u3002\u548C\u5176\u4ED6\u5C5E\u6027\u4E00\u6837\uFF0C\u81EA\u5B9A\u4E49\u5C5E\u6027\u4E5F\u662F\u5199\u5728\u89C4\u5219\u96C6\u4E4B\u5185\u7684\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-CSS ext-CSS line-numbers-mode"><pre class="language-CSS"><code>:root {
  --main-bg-color: brown;
}
element {
  background-color: var(--main-bg-color);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u81EA\u5B9A\u4E49\u6EDA\u52A8\u6761" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6EDA\u52A8\u6761" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u6EDA\u52A8\u6761</h1><p>\u4E3A\u5177\u6709\u53EF\u6EDA\u52A8\u6EA2\u51FA\u7684\u5143\u7D20\u81EA\u5B9A\u4E49\u6EDA\u52A8\u6761\u6837\u5F0F\u3002</p><ul><li><p>\u7528\u4E8E::-webkit-scrollbar \u8BBE\u7F6E\u6EDA\u52A8\u6761\u5143\u7D20\u7684\u6837\u5F0F\u3002</p></li><li><p>\u7528\u4E8E::-webkit-scrollbar-track \u8BBE\u7F6E\u6EDA\u52A8\u6761\u8F68\u9053\u7684\u6837\u5F0F\uFF08\u6EDA\u52A8\u6761\u7684\u80CC\u666F\uFF09\u3002</p></li><li><p>\u7528\u4E8E::-webkit-scrollbar-thumb \u8BBE\u7F6E\u6EDA\u52A8\u6761\u62C7\u6307\uFF08\u53EF\u62D6\u52A8\u5143\u7D20\uFF09\u7684\u6837\u5F0F\u3002</p></li></ul><div class="language-HTML ext-HTML line-numbers-mode"><pre class="language-HTML"><code>&lt;div class=&quot;custom-scrollbar&quot;&gt;
  &lt;p&gt;
    Lorem ipsum dolor sit amet consectetur adipisicing elit.&lt;br /&gt;
    Iure id exercitationem nulla qui repellat laborum vitae, &lt;br /&gt;
    molestias tempora velit natus. Quas, assumenda nisi. &lt;br /&gt;
    Quisquam enim qui iure, consequatur velit sit?
  &lt;/p&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-CSS ext-CSS line-numbers-mode"><pre class="language-CSS"><code>.custom-scrollbar {
  height: 70px;
  overflow-y: scroll;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #1E3F20;
  border-radius: 12px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #4A7856;
  border-radius: 12px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),d=[r];function a(c,v){return e(),n("div",null,d)}var t=i(s,[["render",a],["__file","index.html.vue"]]);export{t as default};
