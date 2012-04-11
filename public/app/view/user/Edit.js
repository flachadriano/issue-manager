Ext.define('IM.view.user.Edit', {
	extend	: 'IM.view.Template',
	alias	: 'widget.useredit',

	title	: 'Usuário',

    defaults: {
        xtype   : 'textfield',
        anchor  : '0'
    },
    items   : [{
        fieldLabel	: 'Nome'
    },{
        fieldLabel  : 'E-mail'
    },{
        xtype       : 'checkbox',
        margin      : '0 0 0 105',
        boxLabel    : 'receber notificações por e-mail'
    }],

   	buttons	: [{
        text    : 'Cancelar',
        action  : 'cancel'
    },{
        text    : 'Salvar',
        action  : 'update'
	}]
});