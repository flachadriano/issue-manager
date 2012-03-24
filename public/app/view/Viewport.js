Ext.define('IM.view.Viewport', {
    extend: 'Ext.container.Viewport',
       
    layout: {
        type    : 'vbox',
        align   : 'center',
        pack    : 'center'
    },
 
//inits
    initComponent: function()
    {
        this.items = [{
            xtype   : 'container',
            id      : 'im_container'
        }];
        
        this.callParent();
    }
});