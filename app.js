var gm = require('gm');

var fs = require('fs');

var path = require('path');

//获取命令行的参数，返回的是个数组
var arguments = process.argv.splice(2);

var inputPath = arguments[0];

var outputPath = arguments[1];

if(!fs.existsSync(outputPath)){
	fs.mkdirSync(outputPath);
}

var dirFiles = fs.readdirSync(inputPath);

console.log(dirFiles.length + '个文件');

dirFiles.forEach(function(file){
	console.log(inputPath + '/' + file);
	gm(inputPath + '/' + file)
		.resize()
		.write(outputPath + '/' + file,function(err){
			if(err) throw err;
		});
	
});
