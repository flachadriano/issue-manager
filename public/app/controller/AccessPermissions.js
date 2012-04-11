Ext.define('IM.controller.AccessPermissions', {
    extend  : 'IM.controller.Controller',
    views   : ['accessPermission.Edit'],
    
// init
    init: function()
    {
       this.control({
            'acesspermissionedit button[action=create]': {
                click: this.onClickBtnCreate
            }
        });
    },
  
// actions
    update: function() {
        this.render('acesspermissionedit');
    },

// listeners
    onClickBtnCreate: function(button) {
    	this.render('projectadministration');
   }
});