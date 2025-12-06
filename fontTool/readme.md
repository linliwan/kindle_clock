# 提取字体子集字符表

## 安装 poetry，并安装必要的依赖

https://python-poetry.org/

poetry install

## 从阿里巴巴普惠体字体库中提取必要的字符

pyftsubset Alibaba-PuHuiTi-Heavy.ttf --text-file=chars.txt --output-file=PuHuiTiMin.ttf --layout-features='\*'
