Ext.define('IM.controller.Projects', {
    extend  : 'IM.controller.Controller',
    views   : ['project.Create'],

// init
    init: function()
    {
       this.control({
            'projectcreate button[action=create]': {
                click: this.onClickBtnCreate
            }
        });
    },

// listeners
    onClickBtnCreate: function(button) {
    	this.render('acesspermissionupdate');
   }
});