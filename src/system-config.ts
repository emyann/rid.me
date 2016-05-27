/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {  
    'firebase': 'vendor/firebase/lib/firebase-web.js',
    'angularfire2': 'vendor/angularfire2',
    '@angular2-material': 'vendor/@angular2-material',
    'lodash': 'vendor/lodash/lodash.js'
};

/** User packages configuration. */
const packages: any = {
  'angularfire2': {
    main: 'angularfire2.js'
  },
  '@angular2-material/core': {
    main: 'core.js'
  },
  '@angular2-material/list': {
    main: 'list.js'
  },
  '@angular2-material/button': {
    main: 'button.js'
  },
  '@angular2-material/input': {
    main: 'input.js'
  },
  '@angular2-material/card': {
    main: 'card.js'
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/test',
  'app/+home',
  'app/tasks',
  'app/tasks/task-form',
  'app/tasks/task-list',
  'app/tasks/tasks-list',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
