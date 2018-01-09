//获取gulp对象
/*var gulp =require("gulp");

//定义一个任务
gulp.task("one",function(){
	console.log("one");
	gulp.src("src/css/dafeiji.css")//指定要处理的文件
		.pipe(gulp.dest("dest/css"))//文件处理后要放的地方
})

//任务的依据
gulp.task("two",function(){
	console.log("two")
})

//three任务以来one和two任务
gulp.task("three",["one","two"],function(){
	console.log("three")
})

//默认任务
gulp.task("default",["one","two"]);

//gulp.task("default",function(){
//	console.log("默认任务")
//})
*/

////获取gulp对象
//var gulp =require("gulp");
////获取插件
//var htmlcss=require("gulp-minify-css");//进行CSS压缩的插件
////定义任务
//gulp.task("cssTask",function(){
//	gulp.src("src/css/dafeiji.css")//要处理的wenjian
//		.pipe(htmlcss())//使用插件gulp-minify-css
//		.pipe(gulp.dest("dest/css"));
//})
////默认任务
//gulp.task("default",["htmlcss"]);

var gulp =require("gulp");
var htmlcss=require("gulp-minify-css");//进行CSS压缩的插件
var babel = require('gulp-babel'); //es6转es5
var uglify = require('gulp-uglify'); //js压缩插件


gulp.task("cssTask",function(){
	gulp.src("src/css/dafeiji.css")//要处理的wenjian
		.pipe(htmlcss())//使用插件gulp-minify-css
		.pipe(gulp.dest("dest/css"));
})
gulp.task('js', function(){
	gulp.src('src/js/*.js')
	.pipe(babel({"presets": ["es2015"]})) //es6转es5
	.pipe(uglify()) //js压缩
	.pipe(gulp.dest('dest/js'));
});

