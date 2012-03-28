Ext.define('IM.view.issue.List', {
	extend	: 'IM.view.Template',
	alias	: 'widget.issuelist',

    items   : [{
        defaults    : {
            xtype       : 'container',
            layout      : {
                type    : 'hbox'
            }
        },
        items       : [{
            defaults    : {
                xtype   : 'button'
            },
            items       : [{
                xtype       : 'combobox',
                emptyText   : 'Selecione um projeto'
            },{
                text        : 'Usuário'
            },{
                text        : 'Cadastros'
            },{
                text        : 'Permissões'
            },{
                text        : 'Sair'
            }]
        },{
            defaults    : {
                xtype   : 'combobox'
            },
            items       : [{
                emptyText   : 'Selecione um módulo'
            },{
                emptyText   : 'Selecione uma função'
            }]
        },{
            items       : [{
                xtype       : 'textfield',
                fieldLabel  : 'Título'
            },{
                xtype       : 'button',
                text        : 'Pesquisar'
            }]
        },{
            defaults    : {
                xtype   : 'button'
            },
            items       : [{
                text    : 'Cadastrar solicitação',
                action  : 'create'
            },{
                text    : 'Atualizar listagem'
            },{
                text    : 'Editar'
            }]
        },{
            items   : [{
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
            }]
        }]
    }]
});