Ext.define('IM.view.issue.View', {
	extend	: 'IM.view.Template',
	alias	: 'widget.issueview',

    items   : [{
        defaults    : {
            xtype       : 'container',
            layout      : {
                type    : 'hbox'
            }
        },
        items       : [{
            items   : [{
                xtype       : 'label',
                text        : 'Projeto Teste'
            },{
                xtype       : 'combobox',
                fieldLabel  : 'Prioridade'
            }]
        },{
            defaults    : {
                xtype       : 'combobox',
                emptyText   : 'Selecione'
            },
            items   : [{
                fieldLabel  : 'Módulo'
            },{
                fieldLabel  : 'Função'
            }]
        },{
            items   : [{
                xtype       : 'button',
                text        : 'Enviar solicitação ao'
            },{
                xtype       : 'combobox',
                fieldLabel  : 'Setor'
            }]
        },{
            xtype       : 'combobox',
            fieldLabel  : 'Função'
        },{
            xtype       : 'textfield',
            fieldLabel  : 'Título'
        },{
            xtype   : 'textarea'
        },{
            items   : [{
                xtype   : 'button',
                text    : '<<<'
            },{
                xtype   : 'combobox'
            },{
                xtype   : 'button',
                text    : '>>>'
            }]
        },{
            xtype   : 'textarea'
        }]
    }]
});