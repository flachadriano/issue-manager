Ext.define('IM.view.project.Administration', {
	extend	: 'IM.view.Template',
	alias	: 'widget.projectadministration',

    items   : [{
        defaults    : {
            xtype       : 'container',
            layout      : {
                type    : 'hbox'
            }
        },
        items   : [{
            items   : [{
                xtype   : 'label',
                text    : 'Projeto Teste'
            }]
        },{
            items   : [{
                xtype   : 'gridpanel',
                columns : [
                    {header: 'Cadastro'}
                ],
                width   : 250,
                height  : 200
            },{
                xtype   : 'panel',
                width   : 200
            }]
        }]
    }],

    buttons : [{
        text    : 'Avançar para a próxima etapa',
        action  : 'create'
    }]
});