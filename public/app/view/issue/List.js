Ext.define('IM.view.issue.List', {
	extend	: 'Ext.container.Viewport',
	alias	: 'widget.issuelist',

    layout  : 'fit',

    items   : [{

        // main
        xtype   : 'container',
        layout  : 'border',
        items   : [{

            // top
            xtype   : 'container',
            margin  : '5 5 5 5',
            region  : 'north',
            layout  : 'anchor',
            items   : [{

                // tools
                xtype   : 'toolbar',
                region  : 'north',
                defaults: {
                    xtype   : 'button'
                },
                items   : [{
                    xtype   : 'combobox',
                    width   : 370
                },'->',{
                    text    : 'Usuário',
                    action  : 'edit_user',
                    width   : 100
                },{
                    text    : 'Cadastros',
                    action  : 'edit_records',
                    width   : 100
                },{
                    text    : 'Permissões',
                    action  : 'edit_permissions',
                    width   : 100
                },{
                    text    : 'Sair',
                    width   : 100
                }]
            },{

                // filters - module and function
                xtype   : 'container',
                layout  : 'column',
                defaults: {
                    xtype       : 'combobox',
                    columnWidth : .5
                },
                items   : [{
                    fieldLabel  : 'Módulo'
                },{
                    fieldLabel  : 'Função'
                }]
            },{

                // filters - title and search button
                xtype   : 'container',
                layout  : 'column',
                items   : [{
                    xtype       : 'textfield',
                    columnWidth : 1,
                    fieldLabel  : 'Título'
                },{
                    xtype   : 'button',
                    margin  : '0 0 0 5',
                    text    : 'Pesquisar'
                }]
            },{

                // grid buttons
                xtype   : 'toolbar',
                defaults: {
                    xtype   : 'button'
                },
                items   : [{
                    text    : 'Cadastrar solicitação',
                    action  : 'create_issue'
                },{
                    text    : 'Atualizar listagem',
                    action  : 'reload_issues'
                },{
                    text    : 'Editar solicitação',
                    action  : 'edit_issue'
                }]
            }]
        },{

            // issues
            xtype   : 'gridpanel',
            region  : 'center',
            columns : [
                {header: 'Prioridade'},
                {header: 'Título'},
                {header: 'Módulo'},
                {header: 'Função'}
            ]
        }]
    }]
});