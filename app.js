var gm = require('gm');

var fs = require('fs');

var path = require('path');

//获取命令行的参数，返回的是个数组
var arguments = process.argv.splice(2);

var inputPath = arguments[0];

var outputPath = arguments[1] || arguments[0];

if(!fs.existsSync(outputPath)){
	fs.mkdirSync(outputPath);
}

var dirFiles = fs.readdirSync(inputPath);

var len = dirFiles.length;

var c = function(i){
	gm(inputPath + '/' + dirFiles[i])
	
	.write(outputPath + '/' + dirFiles[i],function(err){
		if(err) throw err;
		else{
			if(i < len - 1){
				console.log(dirFiles[i] + ' 已完成压缩');
				c(i+1);
			}else{
				console.log('\n\n大婶，压缩完成了！');
			}
		}
	})
};

c(0);

