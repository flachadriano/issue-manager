/*globals Ext, t, IM, window*/
Ext.define('IM.controller.Viewport', {
    extend	: 'IM.controller.Controller',
    views   : [ 
        'viewport.Index'
    ],

    url : 'projects',

//actions
    index: function() {
        this.render('viewportindex');
    }
})