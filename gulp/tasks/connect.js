import config from '../config';

import cors from 'cors';

import gulp from 'gulp';

import connect from 'gulp-connect';

import historyApiFallback from 'connect-history-api-fallback';

gulp.task('connect', function() {
    connect.server({
        root: [config.build],
        port: 9000,
        fallback: `${config.build}/index.html`,
        livereload: {
            port: config.LIVERELOAD_PORT
        },
        https: true,
        middleware: () => {
            return [historyApiFallback(), cors()];
        }
    });
});
