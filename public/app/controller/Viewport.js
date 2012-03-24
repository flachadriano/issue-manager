/*globals Ext, t, IM, window*/
Ext.define('IM.controller.Viewport', {
    extend	: 'Ext.app.Controller',
    views	: [
		'viewport.Index'
    ],

// inits
    init: function() {

        var me = this;

        me.control({
            '#create_project': {
                click: me.onClickCreateProject
            }
        });

        me.callParent(arguments);
    },

// listeners
    onClickCreateProject : function() {
        Ext.ux.Router.redirect('http://docs.sencha.com');
    }
})