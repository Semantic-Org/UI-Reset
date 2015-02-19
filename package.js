var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-reset',
  summary : 'Semantic UI - Reset (official): Single component release of reset',
  version : '1.9.2',
  git     : 'git://github.com/Semantic-Org/UI-Reset.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
