Ext.define('IM.controller.Viewport', {
    extend	: 'IM.controller.Controller',
    views   : ['viewport.Index'],

// init
    init: function()
    {
       this.control({
            'viewportindex button[action=create]': {
                click: this.onClickBtnCreate
            },
            'viewportindex button[action=access]': {
                click: this.onClickBtnAccess
            }
        });
    },
    
// actions
    index: function() {
        this.render('viewportindex');
    },

// listeners
    onClickBtnCreate: function(button) {
    	this.render('projectcreate');
   },

    onClickBtnAccess: function(button) {
        this.render('issuelist');
   }
})