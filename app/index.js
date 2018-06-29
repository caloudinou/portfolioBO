/**
 * dependencies on gz
 */
require('./../node_modules/grizzly-cli/lib')

/**
 * load the class AppModules in gz and all methode
 */
gz.loadBootstrap()

/**
 * config loaded
 */
$GzLoadServerModules({
  moduleDB: null,
  middlewareCORS: null,
  authentication: null,
  logger: null,
  declaration: [
    'user-profile'
  ]
})

/**
 * launch the server
 */
gz.start()
