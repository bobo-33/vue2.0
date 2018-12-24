var get = function(e) {　　　　
	var newStr = " ";
	var start, end;　　　　
	var name_len = e.name.length;　　　　　　　　　　　　 //每个内容名称的长度
	　　　　
	var max_name = 4;　　　　　　　　　　　　　　　　　　 //每行最多显示的字数
	　　　　
	var new_row = Math.ceil(name_len / max_name);　　　　 // 最多能显示几行，向上取整比如2.1就是3行
	　　　　
	if(name_len > max_name) {　　　　　　　　　　　　　　 //如果长度大于每行最多显示的字数
		　　　　　　
		for(var i = 0; i < new_row; i++) {　　　　　　　　　　　 //循环次数就是行数
			　　　　　　　　
			var old = '';　　　　　　　　　　　　　　　　 //每次截取的字符
			　　　　　　　　
			start = i * max_name;　　　　　　　　　　 //截取的起点
			　　　　　　　　
			end = start + max_name;　　　　　　　　　 //截取的终点
			　　　　　　　　
			if(i == new_row - 1) {　　　　　　　　　　　　 //最后一行就不换行了
				　　　　　　　　　　
				old = e.name.substring(start);　　　　　　　　
			} else {　　　　　　　　　　
				old = e.name.substring(start, end) + "\n";　　　　　　　　
			}　　　　　　　　　　
			newStr += old; //拼接字符串
			　　　　　　
		}　　　
	} else { //如果小于每行最多显示的字数就返回原来的字符串
		　　　　　　
		newStr = e.name;　　　
	}　　　
	return newStr;　　
}