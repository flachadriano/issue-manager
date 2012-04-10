Ext.define('IM.view.issue.List', {
	extend	: 'Ext.container.Viewport',
	alias	: 'widget.issuelist',

    layout  : 'fit',

    items   : [{

        // main panel
        xtype   : 'container',
        margin  : '5 5 5 5',
        layout  : 'border',
        items   : [{

            // topo
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
                },"->",{
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
            }]
        },{
            // issues
            xtype   : 'gridpanel',
            region  : 'center',
            columns : [
                {header: 'Nome'},
                {header: 'Login'},
                {header: 'Acessos'},
                {header: 'Cadastros'},
                {header: 'Remover'}
            ]
        }]
    }]
});