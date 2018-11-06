var timer = require("grunt-timer");

module.exports = function(grunt){
  timer.init(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    xmlpoke: {
      sco01: {
        options: {
          namespaces: {
            'w':'http://www.imsglobal.org/xsd/imsmd_rootv1p2p1',
          },
          replacements: [
            {
              xpath: '/w:lom/w:general/w:catalogentry/w:catalog/text()',
              value: function (node) {
                var json = grunt.file.readJSON('src/settings.json');
                return json.settings.cookieName;
              }
            },
            {
              xpath: '/w:lom/w:general/w:catalogentry/w:entry/w:langstring/text()',
              value: function (node) {
                var json = grunt.file.readJSON('src/settings.json');

                if(json.settings.courseSubTitle.length === 0){
                  return json.settings.courseTitle;
                }

                return json.settings.courseTitle +": "+json.settings.courseSubTitle;
              }
            },
            {
              xpath: '/w:lom/w:general/w:title/w:langstring/text()',
              value: function (node) {
                var json = grunt.file.readJSON('src/settings.json');

                if(json.settings.courseSubTitle.length === 0){
                  return json.settings.courseTitle;
                }

                return json.settings.courseTitle +": "+json.settings.courseSubTitle;
              }
            }]
          },
        files: {
            'public/sco01.xml': 'public/sco01.xml',
        },
      },

      imsmanifest: {
          options: {
            namespaces: {
              'w':'http://www.imsproject.org/xsd/imscp_rootv1p1p2',
              'w2':'http://www.imsglobal.org/xsd/imsmd_rootv1p2p1',
              'w3':'http://www.imsproject.org/xsd/imscp_rootv1p1p2'
            },
            replacements: [
              {
                xpath: '/w:manifest/@identifier',
                value: function (node) {
                  var json = grunt.file.readJSON('src/settings.json');
                  return json.settings.cookieName;
                }
              },
              {
                xpath: '/w:manifest/w:metadata/w2:lom/w2:general/w2:catalogentry/w2:entry/w2:langstring/text()',
                value: function (node) {
                  var json = grunt.file.readJSON('src/settings.json');
                  return json.settings.cookieName;
                }
              },
              {
                xpath: '/w:manifest/w:metadata/w2:lom/w2:general/w2:title/w2:langstring/text()',
                value: function (node) {
                  var json = grunt.file.readJSON('src/settings.json');

                  if(json.settings.courseSubTitle.length === 0){
                    return json.settings.courseTitle;
                  }

                  return json.settings.courseTitle +": "+json.settings.courseSubTitle;
                }
              },
              {
                xpath: '/w:manifest/w3:organizations/w3:organization/w3:title/text()',
                value: function (node) {
                  var json = grunt.file.readJSON('src/settings.json');

                  if(json.settings.courseSubTitle.length === 0){
                    return json.settings.courseTitle;
                  }

                  return json.settings.courseTitle +": "+json.settings.courseSubTitle;
                }
              },
              {
                xpath: '/w:manifest/w3:organizations/w3:organization/w3:item/w3:title/text()',
                value: function (node) {
                  var json = grunt.file.readJSON('src/settings.json');

                  if(json.settings.courseSubTitle.length === 0){
                    return json.settings.courseTitle;
                  }

                  return json.settings.courseTitle +": "+json.settings.courseSubTitle;
                }
              }]
          },

          files: {
            'public/imsmanifest.xml': 'public/imsmanifest.xml',
          },
      },
    },
  });

  grunt.registerTask('init',
    'Compiles all of the assets and copies the files to the build directory.',
    ['version','settings','xmlpoke:sco01','xmlpoke:imsmanifest']
  );

  grunt.registerTask('version', function(key, value) {
      var settingsFile = "src/settings.json";

      if (!grunt.file.exists(settingsFile)) {
        grunt.log.error("file " + settingsFile + " not found");
        return true; //return false to abort the execution
      }

      var json = grunt.file.readJSON(settingsFile); //get file as json object
      var currentVersion = json.settings.version;
      var version = (parseFloat(currentVersion)+0.1).toFixed(1).toString();

      json.settings.version = version;
      grunt.log.oklns("VERSION: ".green + (json.settings.version).cyan);

      grunt.file.write(settingsFile, JSON.stringify(json, null, 2));
    });

  grunt.registerTask('settings', function(key, value) {
      var settingsFile = "src/settings.json";
      if (!grunt.file.exists(settingsFile)) {
        grunt.log.error("file " + settingsFile + " not found");
        return true; //return false to abort the execution
      }

      var json = grunt.file.readJSON(settingsFile); //get file as json object
      var courseTitle = json.settings.courseTitle + " " + json.settings.courseSubTitle;
      courseTitle = courseTitle.replace(/\s+/g, '_') + "_";

      var acronym = json.settings.courseTitle + " " + json.settings.courseSubTitle;
      var matches = acronym.match(/\b(\w)/g);              // ['J','S','O','N']
      var cookie = matches.join('').toLowerCase()+"_";

      var possible = "abcdefghijklmnopqrstuvwxyz01234567890123456789";

      for (var i = 0; i < 5; i++){
        var r = possible.charAt(Math.floor(Math.random() * possible.length));
        cookie += r;
        courseTitle += r;
      }

      grunt.log.oklns("Course ID: "['green'].bold + courseTitle.yellow);
      grunt.log.oklns("Cookie: "['green'].bold + cookie.yellow);


      json.settings.courseStorageID = cookie;
      json.settings.cookieName = cookie;
      grunt.file.write(settingsFile, JSON.stringify(json, null, 2));
    });
};
