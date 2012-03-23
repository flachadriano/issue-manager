Ext.define('IM.view.Viewport', {
    extend: 'Ext.container.Viewport',

    layout: 'border',
 
    items	: [{
        xtype	: 'container',
        region	: 'center',
        layout	: 'anchor',
        defaults	: {
			xtype	: 'button',
			height	: 50,
			anchor	: '0'
		},
		items	: [{
		    	text	: 'Criar projeto'
		    },{
		    	text	: 'Acessar projeto'
		}]
    }]
});