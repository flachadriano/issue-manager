Ext.define('IM.view.project.Administration', {
	extend	: 'IM.view.Template',
	alias	: 'widget.projectadministration',

    title   : 'Cadastros',

    items   : [{
        xtype   : 'label',
        text    : 'Projeto: Teste',
        margin  : '0 0 10 0'
    },{
        xtype       : 'container',
        layout      : {
            type    : 'hbox'
        },
        items   : [{
            xtype   : 'gridpanel',
            columns : [
                {header: 'Selecionar cadastro', flex: 1}
            ],
            width   : 200,
            height  : 200
        },{
            xtype   : 'container',
            width   : 400,
            height  : 200
        }]
    }],

    buttons : [{
        text    : 'Avançar para a próxima etapa >>',
        action  : 'create'
    }]
});