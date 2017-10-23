// 题目描述
// 将 rgb 颜色字符串转换为十六进制的形式，如 rgb(255, 255, 255) 转为 #ffffff
// 1. rgb 中每个 , 后面的空格数量不固定
// 2. 十六进制表达式使用六位小写字母
// 3. 如果输入不符合 rgb 格式，返回原始输入
// 示例1
// 输入

// 'rgb(255, 255, 255)'
// 输出

// #ffffff

function rgb2hex(sRGB) {
    var reg = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/i;
    return sRGB.replace(reg,function($0,$1,$2,$3){
        return '#' + toHex($1) + toHex($2) + toHex($3);
    })
    function toHex(str){
        return str < 16 ? '0' + (+str).toString(16) : (+str).toString(16);
    }
}