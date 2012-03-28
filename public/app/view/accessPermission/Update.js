Ext.define('IM.view.accessPermission.Update', {
	extend	: 'IM.view.Template',
	alias	: 'widget.acesspermissionupdate',

	title	: 'Definindo permissões de acesso',

    items   : [{
        xtype   : 'container',
        layout  : {
            type    : 'hbox'
        },
        items   : [{
            xtype       : 'combobox',
            fieldLabel  : 'Usuário',
            width       : 500
        },{
            xtype       : 'button',
            text        : 'Adicionar'
        }]
    },{
        xtype   : 'gridpanel',
        columns : [
            {header: 'Nome'},
            {header: 'Login'},
            {header: 'Acessos'},
            {header: 'Cadastros'},
            {header: 'Remover'}
        ],
        width   : 550,
        height  : 200
    },{
        xtype   : 'label',
        text    : 'Acessos - Permite cadastro de permissões de acesso'
    },{
        xtype   : 'label',
        text    : 'Cadastros - Permite alterações dos cadastros'
    }],

   	buttons	: [{
        text    : 'Avançar para a próxima etapa >>',
        action  : 'create'
	}]
});