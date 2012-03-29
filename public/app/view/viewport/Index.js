Ext.define('IM.view.viewport.Index', {
    extend  : 'IM.view.Template',
    alias   : 'widget.viewportindex',
    
    defaults    : {
        xtype   : 'button',
        height  : 50,
        anchor  : '0'
    },        
    items   : [{
        text    : 'Criar projeto',
        action  : 'create'
    },{
        text    : 'Acessar projeto',
        margin  : '25 0 25 0',
        action  : 'access'
    },{
        xtype   : 'panel',
        title   : 'Você tem convites pendentes para participar dos seguintes projetos'
    }]
});