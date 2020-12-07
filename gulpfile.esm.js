import glob from 'glob';
import gulp from 'gulp';
import nunjucks from 'gulp-nunjucks';
import rimraf from 'rimraf';

function clean() {
	return glob('./www/*.html', {}, function(er, files) {
		for(let file in files) {
			rimraf(files[file], () => {});
		}
	})
}

function compileNunjucks() {
	return gulp.src('src/*.html')
	.pipe(nunjucks.compile())
	.pipe(gulp.dest('www'));
}

const build = gulp.series(clean, compileNunjucks);

export {
	build
}