Ext.define('IM.controller.Viewport', {
    extend	: 'IM.controller.Controller',
    views   : ['viewport.Index'],

// init
    init: function()
    {
       this.control({
            'viewportindex button[action=create_project]': {
                click: this.onClickBtnCreateProject
            }
        });
    },
    
// actions
    index: function() {
        this.render('viewportindex');
    },

// listeners
    onClickBtnCreateProject: function(button) {
    	this.render('projectcreate');
   }
})