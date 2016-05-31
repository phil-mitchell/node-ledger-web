define([
  'backbone',
  'marionette'
], function(Backbone, Marionette) {
  'use strict';

  var Ledger = new Marionette.Application();
     
  Ledger.addRegions({
    nav: '#nav',
    main: '#main'
  });

  Ledger.on('initialize:after', function() {
    var root = document.getElementsByTagName("script")[0].src;
    root = root.substr( 0, root.lastIndexOf( '/' ) );
    root = root.substr( 0, root.lastIndexOf( '/' ) );
    root = root.substr( 0, root.lastIndexOf( '/' ) );
    root = root.substr( root.lastIndexOf( '/' ) );
    Backbone.history.start({pushState: true, root: root});
  });
  
  return Ledger;
});