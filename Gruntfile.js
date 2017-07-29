
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'functions/**/*.js', 'public/*.js'],
      options: {
        ignores: ['functions/node_modules/**/*.js'],
        esversion: 6,
        asi: true,
        node: true,
        globals: {
          jQuery: true
        }
      }
    },
    watch_js: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    watch: {
      files: ['<%= ejs.all.src %>', '<%= copy.public.files[0].src %>', '<%= copy.build.files[0].src %>'],
      tasks: ['ejs', 'copy']
    },
    ejs: {
      all: {
        src: ['public/views/pages/*.ejs', '!public/views/partials/**/*'],
        dest: 'build/',
        expand: true,
        ext: '.html',
      },
    },
    copy: {
      public: {
        files: [
          {expand: true, cwd: 'public', src: ['**/*.html', '**/*.css', '**/*.js'], dest: 'dist', filter: 'isFile'},
        ],
      },
      build: {
        files: [
          {expand: true, src: ['build/**/*.html'], dest: 'dist/', filter: 'isFile', flatten: true},
        ],
      },
    },
    clean: {
      dist: ['dist'],
      ejs: ['build']
    },
  });

  grunt.loadNpmTasks('grunt-ejs');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['clean', 'jshint', 'ejs', 'copy']);
};
