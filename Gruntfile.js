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
        dest: './public',
        ext: '.js'
      }
    },
    browserify: {
      options: {
        transform: [ require('grunt-react').browserify ]
      },
      app: {
        src: './public/**/*.js',
        dest: './public/main.js'
      }
    },
    clean: {
      public: ['./public/main.js']
    }

  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-react');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('run', ['connect', 'watch' ]);
  grunt.registerTask('deploy', ['clean', 'react', 'browserify' ]);
};







