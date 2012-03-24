/*globals Ext, t*/
Ext.define('IM.view.project.Window',{
	extend: 'Ext.window.Window',
	alias : 'widget.projectwindow',
	
//config	
    width   : 400,
    height  : 300,
    layout	: {
        type	: 'vbox',
        align	: 'stretch'
    },

//inits
    initComponent: function() {
		var me = this;
		
		me.title = 'Banco';
		
        me.items = [{
			xtype       : 'form',
			border      : false,
			layout		: 'anchor',
			margins		: '10px',
            defaults    : {
				xtype       : 'textfield',
                allowBlank  : false,
				anchor		: '0',
				labelWidth  : 60
            },
            items       : [{
                fieldLabel  : 'Código',
                anchor		: '50%',
                maxLength	: 4,
				tabIndex	: 1
             },{
                fieldLabel  : 'Nome',
                maxLength	: 100,
				tabIndex	: 2
            },{
	            xtype			: 'checkbox',
	            fieldLabel		: 'Ativo',
	            checked			: true,
				inputValue		: true,
				uncheckedValue	: false,
				tabIndex		: 3
			}]
        }];

        me.callParent(arguments);
    }
});