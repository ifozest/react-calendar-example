module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      src: {
        files: ['public/*.html']
      }
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: './public'
        }
      }
    },
    react: {
      files: {
        expand: true,
        cwd: './src',
        src: ['**/*.jsx'],
        dest: './src_compiled',
        ext: '.js'
      }
    },
    browserify: {
      app: {
        src: './src/**/*.jsx',
        dest: './public/main.js'
      },
      options: {
        transform: ['reactify']
      }
    },
    copy: {
      main: {
        expand: true,
        flatten: true,
        src: './src/*.html',
        dest: './public/'
      }
    },
    clean: {
      public: ['./public']
    }

  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-react');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');


  grunt.registerTask('run', ['connect', 'watch' ]);
  grunt.registerTask('deploy', ['copy', 'browserify']);
};







