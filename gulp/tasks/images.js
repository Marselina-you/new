import webp from "gulp-webp";
//import imagemin from 'gulp-imagemin';
import imagemin, {gifsicle, mozjpeg, optipng, svgo} from 'gulp-imagemin'; //вариант ответившего чувака



export const images = () => {
    return app.gulp.src(app.path.src.images)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "IMAGES",
                message: "Error: <%= error.message %"
            }))
        )
        .pipe(app.plugins.newer(app.path.build.images))
        //.pipe(webp())
        .pipe(app.gulp.dest(app.path.build.images))

        //.pipe(app.gulp.src(app.path.src.images))
        //.pipe(app.plugins.newer(app.path.build.images))
        /** .pipe(imagemin([ вариант ответившего чувака*/
            /*gifsicle({interlaced: true}),*/
            /*mozjpeg({quality: 75, progressive: true}),
            optipng({optimizationLevel: 5}),*/
            /*svgo({
                plugins: [
                    {
                        name: 'removeViewBox',
                        active: true
                    },
                    {
                        name: 'cleanupIDs',*/
                        //active: false
                    //}
                //]
            //})
        //]))
        //.pipe(imagemin(
            //{
                //progressive: true,
                //svgoPlugins: [{ removeViewBox: false }],
                //interlaced: true,
                //optimizationLevel: 3
            //}
        //))
        .pipe(imagemin([
            svgo({
                plugins: [
                    {
                        name: 'removeViewBox',
                        active: true
                    }
                ]
            })
        ], {
            verbose: true
        }))

        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.gulp.src(app.path.src.svg))
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.plugins.browsersync.stream());
}