module.exports = function (grunt) {

    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        babel: {
            options: {
                presets: ["es2015"],
                sourceMap: true
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: ['*.js'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        watch: {
            scripts: {
                options: {
                    livereload: true
                },
                files: "src/**/*.js",
                tasks: ["default"]
            },
            pages: {
                options: {
                    livereload: true
                },
                files: "index.html"
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    open: 'http://localhost:9001'
                }
            }
        }
    });

    grunt.registerTask("dev", ["default", "connect", "watch"]);
    grunt.registerTask("default", ["babel"]);

};