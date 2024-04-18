## windows安装node-canvas

canvas 有包依赖直接安装会报错，需要先安装坏境

canvas github：<https://github.com/Automattic/node-canvas>

windows安装教程：<https://github.com/Automattic/node-canvas/wiki/Installation:-Windows>

文档说明可以手动安装各环境，也可以使用Chocolatey安装

### Chocolatey 安装

先安装 ```Chocolatey```, 使用管理员权限模式打开Powdershell，粘贴下方安装代码，稍等片刻即可安装成功。

```shell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

再安装依赖

```shell
choco install -y python2 gtk-runtime microsoft-build-tools libjpeg-turbo
```

再下载适用于 [Win32](<https://ftp.gnome.org/pub/GNOME/binaries/win32/gtk+/2.24/gtk+-bundle_2.24.10-20120208_win32.zip>) 或 [Win64](https://ftp.gnome.org/pub/GNOME/binaries/win64/gtk+/2.22/gtk+-bundle_2.22.1-20101229_win64.zip) 的 GTK 2 捆绑包， 解压到  C:\GTK

再使用命令行 安装 ```npm install canvas``` 或 ```yarn add canvas```或```pnpm install canvas```

⚠️ 文档标明，根据已知的 Chocolatey 问题会失败，最好使用手动安装各依赖项

### 手动安装 node-gyp、GTK 2、libjpeg-turbo

#### node-gyp

> 官方文档： <https://github.com/nodejs/node-gyp#on-windows>

直接用npm 全局安装

```shell
npm install -g node-gyp
```

还需要安装```python```与```visualstudio2022-workload-vctools```, ```python```注意这里要2.x的版本，

[点击此处下载python安装包](https://www.python.org/ftp/python/2.7/python-2.7.msi)

```visualstudio2022-workload-vctools``` 我们使用```Chocolatey```安装

```shell
choco install visualstudio2022-workload-vctools -y
```

安装报错需关闭代理

#### 配置 GTK 2

- 下载适用于 [Win32](<https://ftp.gnome.org/pub/GNOME/binaries/win32/gtk+/2.24/gtk+-bundle_2.24.10-20120208_win32.zip>) 或 [Win64](https://ftp.gnome.org/pub/GNOME/binaries/win64/gtk+/2.22/gtk+-bundle_2.22.1-20101229_win64.zip) 的 GTK 2 捆绑包。

- 解压缩 C:\GTK 中的内容

如果在其他的位置，请向 node-gyp rebuild 添加 GTK_Root 参数。例如：``` node-gyp rebuild --GTK_Root=C:\somewhere\GTK ```

#### 配置 libjpeg-turbo

- 下载最新的 [libjpeg-turbo SDK for Visual C++](https://sourceforge.net/projects/libjpeg-turbo/files/) 直接默认安装在 ```C:\libjpeg-turbo64```

如果在其他的位置， 添加 jpeg_root 参数。例如：``` node-gyp rebuild --jpeg_root=C:\somewhere\libjpeg-turbo ```

#### 安装 node-canvas

设置完所有依赖项后， ```npm install canvas``` 或 ```yarn add canvas```或```pnpm install canvas```

### 其他

还是有报错，在项目下 新建 ```.npmrc```文件，添加 ```canvas_binary_host_mirror=<https://registry.npmmirror.com/-/binary/canvas>```来配置镜像

还是报错，再试试切换```node```版本到14.19.x
