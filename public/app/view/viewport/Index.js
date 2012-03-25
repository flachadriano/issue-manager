Ext.define('IM.view.viewport.Index', {
    extend  : 'IM.view.Template',
    alias   : 'widget.viewportindex',
    
    border  : false,
    
    items   : [{
        xtype   : 'container',
        width   : 800,
        layout  : 'anchor',
        defaults    : {
            xtype   : 'button',
            height  : 50,
            anchor  : '0'
        },
        items   : [{
                text    : 'Criar projeto',
                action  : 'create_project'
            },{
                text    : 'Acessar projeto',
                margin  : '25 0 25 0',
                action  : 'access_project'
            },{
                xtype   : 'panel',
                title   : 'Você tem convites pendentes para participar dos seguintes projetos'
        }]
    }]
});