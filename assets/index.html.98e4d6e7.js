import{_ as e,o as i,c as n,d as a}from"./app.4bcef66a.js";const s={},r=a(`<h1 id="\u53C2\u8003\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u5730\u5740" aria-hidden="true">#</a> \u53C2\u8003\u5730\u5740</h1><ol><li>www.30secondsofcode.org \uFF0830 seconds of code\uFF09</li><li>1loc.dev \uFF08Favorite JavaScript Utilities</li></ol><h1 id="\u53BB\u6389\u7A7A\u683C" tabindex="-1"><a class="header-anchor" href="#\u53BB\u6389\u7A7A\u683C" aria-hidden="true">#</a> \u53BB\u6389\u7A7A\u683C</h1><div class="language-Javascript ext-Javascript line-numbers-mode"><pre class="language-Javascript"><code>/**
 * @param { string } str \u5F85\u5904\u7406\u5B57\u7B26\u4E32
 * @param  { number } type \u53BB\u9664\u7A7A\u683C\u7C7B\u578B 1-\u6240\u6709\u7A7A\u683C  2-\u524D\u540E\u7A7A\u683C  3-\u524D\u7A7A\u683C 4-\u540E\u7A7A\u683C \u9ED8\u8BA4\u4E3A1
 */
export function trim(str, type = 1) {
    if (type &amp;&amp; type !== 1 &amp;&amp; type !== 2 &amp;&amp; type !== 3 &amp;&amp; type !== 4) return;
    switch (type) {
        case 1:
            return str.replace(/\\s/g, &quot;&quot;);
        case 2:
            return str.replace(/(^\\s)|(\\s*$)/g, &quot;&quot;);
        case 3:
            return str.replace(/(^\\s)/g, &quot;&quot;);
        case 4:
            return str.replace(/(\\s$)/g, &quot;&quot;);
        default:
            return str;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u5927\u5C0F\u5199\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u5927\u5C0F\u5199\u8F6C\u6362" aria-hidden="true">#</a> \u5927\u5C0F\u5199\u8F6C\u6362</h1><div class="language-Javascript ext-Javascript line-numbers-mode"><pre class="language-Javascript"><code>/**
 * @param { string } str \u5F85\u8F6C\u6362\u7684\u5B57\u7B26\u4E32
 * @param { number } type 1-\u5168\u5927\u5199 2-\u5168\u5C0F\u5199 3-\u9996\u5B57\u6BCD\u5927\u5199 \u5176\u4ED6-\u4E0D\u8F6C\u6362
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="base64-\u8F6C-file" tabindex="-1"><a class="header-anchor" href="#base64-\u8F6C-file" aria-hidden="true">#</a> base64 \u8F6C file</h1><div class="language-Javascript ext-Javascript line-numbers-mode"><pre class="language-Javascript"><code>/**
 *  @param { base64 } base64
 *  @param { string } filename \u8F6C\u6362\u540E\u7684\u6587\u4EF6\u540D
 */
export const base64ToFile = (base64, filename )=&gt; {
    let arr = base64.split(&#39;,&#39;);
    let mime = arr[0].match(/:(.*?);/)[1];
    let suffix = mime.split(&#39;/&#39;)[1] ;// \u56FE\u7247\u540E\u7F00
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
    }
    return new File([u8arr], \`\${filename}.\${suffix}\`, { type: mime })
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="base64-\u8F6C-blob" tabindex="-1"><a class="header-anchor" href="#base64-\u8F6C-blob" aria-hidden="true">#</a> base64 \u8F6C blob</h1><div class="language-Javascript ext-Javascript line-numbers-mode"><pre class="language-Javascript"><code>/**
 *  @param { base64 } base64
 */
export const base64ToBlob = base64 =&gt; {
    let arr = base64.split(&#39;,&#39;),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="blob-\u8F6C-file" tabindex="-1"><a class="header-anchor" href="#blob-\u8F6C-file" aria-hidden="true">#</a> blob \u8F6C file</h1><div class="language-Javascript ext-Javascript line-numbers-mode"><pre class="language-Javascript"><code>/**
 *  @param { blob } blob
 *  @param { string } fileName
 */
export const blobToFile = (blob, fileName) =&gt; {
    blob.lastModifiedDate = new Date();
    blob.name = fileName;
    return blob;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="file-\u8F6C-base64" tabindex="-1"><a class="header-anchor" href="#file-\u8F6C-base64" aria-hidden="true">#</a> file \u8F6C base64</h1><div class="language-Javascript ext-Javascript line-numbers-mode"><pre class="language-Javascript"><code>/**
 * @param { * } file \u56FE\u7247\u6587\u4EF6
 */
export const fileToBase64 = file =&gt; {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
        return e.target.result
    };
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u590D\u5236\u6587\u672C" tabindex="-1"><a class="header-anchor" href="#\u590D\u5236\u6587\u672C" aria-hidden="true">#</a> \u590D\u5236\u6587\u672C</h1><div class="language-Typescript ext-Typescript line-numbers-mode"><pre class="language-Typescript"><code>const handleCopyText = async (text:string) =&gt; {
  try {
    const clipboardObj = navigator.clipboard;
    if (!clipboardObj) return;
    await clipboardObj.writeText(text);
  } catch (error) {
    console.log(error)
  }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u6E05\u9664\u6240\u6709cookie" tabindex="-1"><a class="header-anchor" href="#\u6E05\u9664\u6240\u6709cookie" aria-hidden="true">#</a> \u6E05\u9664\u6240\u6709cookie</h1><div class="language-Javascript ext-Javascript line-numbers-mode"><pre class="language-Javascript"><code>const clearCookies = document.cookie.split(&#39;;&#39;).forEach(cookie =&gt; document.cookie = cookie.replace(/^ +/, &#39;&#39;).replace(/=.*/, \`=;expires=\${new Date(0).toUTCString()};path=/\`));

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u83B7\u53D6\u9009\u4E2D\u7684\u6587\u672C" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u9009\u4E2D\u7684\u6587\u672C" aria-hidden="true">#</a> \u83B7\u53D6\u9009\u4E2D\u7684\u6587\u672C</h1><div class="language-Javascript ext-Javascript line-numbers-mode"><pre class="language-Javascript"><code>const getSelectedText = () =&gt; window.getSelection().toString();
getSelectedText();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,20),d=[r];function l(c,v){return i(),n("div",null,d)}var u=e(s,[["render",l],["__file","index.html.vue"]]);export{u as default};
