import gulp from "gulp";
// Импорт путей
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

//Передаем значения в глобальную переменную
global.app = {
	path: path,
	gulp: gulp,
    plugins: plugins
	
    

	

}

//импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";

//наблюдатель за изменениями в файлах
function  watcher() {
	gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    
	
	
}
const mainTasks = gulp.parallel(copy, html);
//построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
//выполнение сценария по умолчанию
gulp.task('default', dev);