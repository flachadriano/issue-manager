Ext.define('IM.view.project.Create', {
	extend	: 'IM.view.Template',
	alias	: 'widget.projectcreate',

	title	: 'Criando um projeto',

    items   : [{
		xtype		: 'textfield',
        fieldLabel	: 'Nome',
        labelWidth  : 40,
        anchor		: '0'
    }],

   	buttons	: [{
        text    : '<< Voltar à tela inicial',
        action  : 'cancel'
    },{
        text    : 'Criar projeto >>',
        action  : 'create'
	}]
});