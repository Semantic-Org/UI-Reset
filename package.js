
Package.describe({
  name    : 'semantic:ui-reset',
  summary : 'Semantic UI - Reset: Single component release',
  version : '1.10.1',
  git     : 'git://github.com/Semantic-Org/UI-Reset.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'reset.css'
  ], 'client');
});
