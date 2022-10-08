## 前言

> MDN: <https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions>

> 《JavaScript 正则表达式迷你书》 <https://github.com/qdlaoyao/js-regex-mini-book>

正则表达式在日常的开发中是非常常见的，用于验证、切分、提取、替换；

## 符号含义

### 元字符

| 字符  | 含义                                                                   |
| ----- | ---------------------------------------------------------------------- |
| ^     | 匹配输入的开始                                                         |
| $     | 匹配输入字符串的结束位置                                               |
| .     | 匹配除“\r\n”之外的任何单个字符                                         |
| \d    | 匹配一个数字字符。等价于`[0-9]`                                        |
| \D    | 匹配一个非数字字符。等价于`[^0-9]`                                     |
| \     | 匹配反斜线字符                                                         |
| \r    | 匹配回车符                                                             |
| \t    | 匹配制表符                                                             |
| \f    | 匹配换页符                                                             |
| \n    | 匹配换行符                                                             |
| \s    | 匹配任何不可见字符，包括空格、制表符、换页符等等。等价于`[\f\n\r\t\v]` |
| \S    | 匹配任何可见字符。等价于`[^\f\n\r\t\v]`                                |
| \w    | 匹配单词字符：等价于`[a-zA-Z_0-9]`                                     |
| \W    | 匹配任何非单词字符。等价于`[^a-za-z0-9_]`                              |
| ?     | 匹配一次或一次没有                                                     |
| \*    | 匹配`0` 次或多次                                                       |
| +     | 匹配 `1`次或多次                                                       |
| {n}   | 匹配恰好 `n`次                                                         |
| {n,}  | 匹配至少 `n`次                                                         |
| {n,m} | 匹配至少`n`次，但不能超过`m`次匹配                                     |
| .     | 匹配除`“\r\n”`之外的任何单个字符                                       |

### 修饰符

| 字符 | 含义                                                      |
| ---- | --------------------------------------------------------- |
| g    | 全局搜索                                                  |
| i    | 不区分大小写搜索                                          |
| m    | 多行搜索                                                  |
| u    | 使用`unicode`码的模式进行匹配                             |
| y    | 执行`“粘性 (sticky)”`搜索，匹配从目标字符串的当前位置开始 |
| s    | 允许 `.`匹配换行符                                        |

## 验证

验证是正则表达式最直接的应用，比如表单验证。

在说验证之前，先要说清楚匹配是什么概念。

所谓匹配，就是看目标字符串里是否有满足匹配的子串。因此，“匹配”的本质就是“查找”。

有没有匹配，是不是匹配上，判断是否的操作，即称为“验证”。

比如，判断一个字符串中是否有数字。

- 使用 `search`

```js
var regex = /\d/;
var string = "abc123";
console.log(!!~string.search(regex));
// => true
```

- 使用 `test`

```js
var regex = /\d/;
var string = "abc123";
console.log(regex.test(string));
// => true
```

- 使用 `match`

```js
var regex = /\d/;
var string = "abc123";
console.log(!!string.match(regex));
// => true
```

- 使用 `exec`

```js
var regex = /\d/;
var string = "abc123";
console.log(!!regex.exec(string));
// => true
```

其中，最常用的是`test`。

## 切分

匹配上了，我们就可以进行一些操作，比如切分。

所谓“切分”，就是把目标字符串，切成一段一段的。在 JS 中使用的是 split。

比如，目标字符串是"html,css,javascript"，按逗号来切分：

```js
var regex = /,/;
var string = "html,css,javascript";
console.log(string.split(regex));
// => ["html", "css", "javascript"]
```

## 提取

虽然整体匹配上了，但有时需要提取部分匹配的数据。

此时正则通常要使用分组引用（分组捕获）功能，还需要配合使用相关 API。

这里，还是以日期为例，提取出年月日。注意下面正则中的括号：

- `match`

```js
var regex = /^(\d{4})\D(\d{2})\D(\d{2})$/;
var string = "2017-06-26";
console.log(string.match(regex));
// =>["2017-06-26", "2017", "06", "26", index: 0, input: "2017-06-26"]
```

- `exec`

```js
var regex = /^(\d{4})\D(\d{2})\D(\d{2})$/;
var string = "2017-06-26";
console.log(regex.exec(string));
// =>["2017-06-26", "2017", "06", "26", index: 0, input: "2017-06-26"]
```

- `test`

```js
var regex = /^(\d{4})\D(\d{2})\D(\d{2})$/;
var string = "2017-06-26";
regex.test(string);
console.log(RegExp.$1, RegExp.$2, RegExp.$3);
// => "2017" "06" "26"
```

- `search`

```js
var regex = /^(\d{4})\D(\d{2})\D(\d{2})$/;
var string = "2017-06-26";
string.search(regex);
console.log(RegExp.$1, RegExp.$2, RegExp.$3);
// => "2017" "06" "26"
```

- `replace`

```js
var regex = /^(\d{4})\D(\d{2})\D(\d{2})$/;
var string = "2017-06-26";
var date = [];
string.replace(regex, function (match, year, month, day) {
  date.push(year, month, day);
});
console.log(date);
// => ["2017", "06", "26"]
```

其中，最常用的是 match。

## 替换

找，往往不是目的，通常下一步是为了替换。在 JS 中，使用 replace 进行替换。

比如把日期格式，从 yyyy-mm-dd 替换成 yyyy/mm/dd：

```js
var string = "2017-06-26";
var today = new Date(string.replace(/-/g, "/"));
console.log(today);
// => Mon Jun 26 2017 00:00:00 GMT+0800 (中国标准时间)
```

## Api

> api 常见使用问题： <https://juejin.cn/post/6844903487155732494#heading-38>  见相关API注意要点

从上面可以看出用于正则操作的方法，共有 6 个，字符串实例 4 个，正则实例 2 个：

- `String#search`
- `String#search`

- `String#split`

- `String#match`

- `String#replace`

- `RegExp#test`

- `RegExp#exec`

## 常见问题

- ### 正则表达式为变量表示时

在业务如果要用到变量来表示正则时是需要 `RegExp` 对象的构造函数。

```js
const yearReg = "(\\d{4})";
const monthReg = "(\\d{2})";
const dayReg = "(\\d{2})";
/**正常字面量写法 */
// var regex = /(\d{4})-(\d{2})-(\d{2})/;
var string = "2017-06-12";
console.log(yearReg);
console.log(string.match(new RegExp(`${yearReg}-${monthReg}-${monthReg}`)));
// => ["2017-06-12", "2017", "06", "12", index: 0, input: "2017-06-12"]
```

注意：使用 `RegExp`构造函数时，需要有两个转义符`(\\d{2})`；

<!--
<script setup>

const yearReg = "(\\d{4})";
const monthReg = "(\\d{2})";
const dayReg = "(\\d{2})";
var string = "2017-06-12";
console.log(string.match(new RegExp(`${yearReg}-${monthReg}-${monthReg}`)))

</script> -->

- ### safari 浏览器正则表达式兼容问题

报错内容为`SyntaxError: Invalid regular expression: invalid group specifier name`,其原因为 IOS，MAC 不支持零宽断言；

正则零宽断言，一共 4 种：

1、(?=xxx) 例：\b\w+(?=ing\b)，匹配以 ing 结尾的单词的前面部分；

2、(?<=xxx) 例：(?<=\bre)\w+\b 会匹配以 re 开头的单词的后半部分；

3、(?!xxx) 例：\d{3}(?!\d)匹配三位数字，而且这三位数字的后面不能是数字；

4、(?<!xxx) 例：(?<![a-z])\d{7}匹配前面不是小写字母的七位数字
处。

然后再在业务逻辑中处理即可。
