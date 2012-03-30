Ext.define('IM.view.accessPermission.Update', {
	extend	: 'IM.view.Template',
	alias	: 'widget.acesspermissionupdate',

	title	: 'Permissões de acesso',
    
    items   : [{
        xtype   : 'label',
        text    : 'Projeto: Teste'
    },{
        xtype   : 'container',
        margin      : '10 0 0 0',
        layout  : {
            type    : 'hbox',
            align   : 'stretch'
        },
        items   : [{
            xtype       : 'combobox',
            fieldLabel  : 'Usuário',
            labelWidth  : 55,
            flex        : 1
        },{
            xtype       : 'button',
            margin      : '0 0 5 10',
            text        : 'Adicionar',
        }]
    },{
        xtype   : 'gridpanel',
        columns : [
            {header: 'Nome',flex: 1},
            {header: 'Login',		width: 200},
            {header: 'Acessos',		width: 50},
            {header: 'Cadastros',	width: 60},
            {header: 'Remover',		width: 55}
        ],
        height  : 200
    },{
        xtype   : 'container',
        margin      : '10 0 0 0',
        layout  : {
            type    : 'vbox',
            align   : 'stretch'
        },
        defaults    : {
            xtype   : 'label'
        },
        items   : [{
            text    : 'Acessos - Permite cadastro de permissões de acesso'
        },{
            text    : 'Cadastros - Permite alterações dos cadastros'
        }]
    }],

   	buttons	: [{
        text    : 'Avançar para a próxima etapa >>',
        action  : 'create'
	}]
});