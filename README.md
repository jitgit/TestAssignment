========================
Bulls First Application
========================

# Dev Notes

## Set up

### Build
```
npm install
grunt
```

### Run
```
npm install
grunt && npm start
Goto http://localhost:8080/index.html
```

### Test
```
npm test
```

## Bad Practice

* Controller is populating the data, Model should hold the data.
* AngularController.js & App.js can be converted to common JS module & browserfiy, concat, shrink
* No file structure is present e.g. src & test directories.
* No build process, can be done using grunt or gulp. A build SDK would be helpful as the project grows ( see sdk directory)
* JS Hint & formatting can be done to catch error early. (They can be configured using .*rc files e.g. .jsbeautifyrc)
e.g. Caught warning
```
Running "jshint:all" (jshint) task

   src/scripts/controller/AccountsController.js
     70 |    }
              ^ Missing semicolon.

>> 1 error in 2 files
```
