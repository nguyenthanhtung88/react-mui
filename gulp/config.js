var dest = './build',
  src = './src',
  muiLess = './node_modules/material-ui/src',
  muiSass = './node_modules/material-ui-sass';

module.exports = {
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src]
    },
    files: [
      dest + '/**'
    ]
  },
  less: {
    src: src + '/less/main.less',
    watch: [
      src + '/less/**',
      muiLess + '/less/**',
      src + '/less/**/**'
    ],
    dest: dest
  },
  sass: {
    src: src + '/sass/main.scss',
    watch: [
      src + '/sass/**',
      muiSass + '/**',
      src + '/sass/**/**'
    ],
    dest: dest
  },
  markup: {
    src: src + "/www/**",
    dest: dest
  },
  browserify: {
    // Enable source maps
    debug: true,
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/app/app.jsx',
      dest: dest,
      outputName: 'app.js'
    }]
  }
};
