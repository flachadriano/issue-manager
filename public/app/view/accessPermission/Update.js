Ext.define('IM.view.accessPermission.Update', {
	extend	: 'IM.view.Template',
	alias	: 'widget.acesspermissionupdate',

	title	: 'Permissões de acesso',

    items   : [{
        xtype   : 'label',
        text    : 'Projeto: Teste',
        margin  : '0 0 10 0'
    },{
        xtype   : 'container',
        layout  : {
            type    : 'hbox'
        },
        items   : [{
            xtype       : 'combobox',
            fieldLabel  : 'Usuário',
            labelWidth  : 55,
            width       : 500
        },{
            xtype       : 'button',
            margin      : '0 0 0 10',
            text        : 'Adicionar'
        }]
    },{
        xtype   : 'gridpanel',
        columns : [
            {header: 'Nome',flex: 1},
            {header: 'Login',		width: 150},
            {header: 'Acessos',		width: 50},
            {header: 'Cadastros',	width: 60},
            {header: 'Remover',		width: 55}
        ],
        width   : 570,
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