import{_ as n,o as s,c as a,d as t}from"./app.51ddf5fa.js";const e={},p=t(`<h2 id="css-\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#css-\u53D8\u91CF" aria-hidden="true">#</a> CSS \u53D8\u91CF</h2><p>\u58F0\u660E\u4E00\u4E2A\u81EA\u5B9A\u4E49\u5C5E\u6027\uFF0C\u5C5E\u6027\u540D\u9700\u8981\u4EE5\u4E24\u4E2A\u51CF\u53F7\uFF08--\uFF09\u5F00\u59CB\uFF0C\u5C5E\u6027\u503C\u5219\u53EF\u4EE5\u662F\u4EFB\u4F55\u6709\u6548\u7684 CSS \u503C\u3002\u548C\u5176\u4ED6\u5C5E\u6027\u4E00\u6837\uFF0C\u81EA\u5B9A\u4E49\u5C5E\u6027\u4E5F\u662F\u5199\u5728\u89C4\u5219\u96C6\u4E4B\u5185\u7684\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--main-bg-color</span><span class="token punctuation">:</span> brown<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">element</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--main-bg-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u81EA\u5B9A\u4E49\u6EDA\u52A8\u6761" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6EDA\u52A8\u6761" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u6EDA\u52A8\u6761</h2><p>\u4E3A\u5177\u6709\u53EF\u6EDA\u52A8\u6EA2\u51FA\u7684\u5143\u7D20\u81EA\u5B9A\u4E49\u6EDA\u52A8\u6761\u6837\u5F0F\u3002</p><ul><li><p>\u7528\u4E8E::-webkit-scrollbar \u8BBE\u7F6E\u6EDA\u52A8\u6761\u5143\u7D20\u7684\u6837\u5F0F\u3002</p></li><li><p>\u7528\u4E8E::-webkit-scrollbar-track \u8BBE\u7F6E\u6EDA\u52A8\u6761\u8F68\u9053\u7684\u6837\u5F0F\uFF08\u6EDA\u52A8\u6761\u7684\u80CC\u666F\uFF09\u3002</p></li><li><p>\u7528\u4E8E::-webkit-scrollbar-thumb \u8BBE\u7F6E\u6EDA\u52A8\u6761\u62C7\u6307\uFF08\u53EF\u62D6\u52A8\u5143\u7D20\uFF09\u7684\u6837\u5F0F\u3002</p></li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>custom-scrollbar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    Iure id exercitationem nulla qui repellat laborum vitae, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    molestias tempora velit natus. Quas, assumenda nisi. <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    Quisquam enim qui iure, consequatur velit sit?
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.custom-scrollbar</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 70px<span class="token punctuation">;</span>
  <span class="token property">overflow-y</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.custom-scrollbar::-webkit-scrollbar</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.custom-scrollbar::-webkit-scrollbar-track</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #1e3f20<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.custom-scrollbar::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #4a7856<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),c=[p];function l(i,o){return s(),a("div",null,c)}var r=n(e,[["render",l],["__file","index.html.vue"]]);export{r as default};