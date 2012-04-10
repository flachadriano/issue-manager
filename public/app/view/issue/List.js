Ext.define('IM.view.issue.List', {
	extend	: 'Ext.container.Viewport',
	alias	: 'widget.issuelist',

    layout  : 'fit',

    items   : [{

        // main
        xtype   : 'container',
        margin  : '5 5 5 5',
        layout  : 'border',
        items   : [{

            // top
            xtype   : 'container',
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
                    width   : 100
                },{
                    text    : 'Cadastros',
                    width   : 100
                },{
                    text    : 'Permissões',
                    width   : 100
                },{
                    text    : 'Sair',
                    width   : 100
                }]
            },{

                // filters - module and function
                xtype   : 'container',
                layout  : 'column',
                items   : [{
                    xtype       : 'combobox',
                    columnWidth : .5,
                    fieldLabel  : 'Módulo'
                },{
                    xtype       : 'combobox',
                    columnWidth : .5,
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
                    text    : 'Pesquisar'
                }]
            },{

                // grid buttons
                xtype   : 'toolbar',
                layout  : 'column',
                items   : [{
                    xtype   : 'button',
                    text    : 'Cadastrar solicitação'
                },{
                    xtype   : 'button',
                    text    : 'Atualizar listagem'
                },{
                    xtype   : 'button',
                    text    : 'Editar solicitação'
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