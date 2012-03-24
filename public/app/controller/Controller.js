Ext.define('IM.controller.Controller', {
    extend	: 'Ext.app.Controller',

    render: function(view) {
        var container 	= Ext.getCmp('im_container'),
        	win     	= Ext.widget(view);
        
        container.removeAll();
        container.add(win);
    }
});