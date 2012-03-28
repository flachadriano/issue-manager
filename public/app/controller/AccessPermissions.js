Ext.define('IM.controller.AccessPermissions', {
    extend  : 'IM.controller.Controller',
    views   : ['accessPermission.Update'],
    
// init
    init: function()
    {
       this.control({
            'acesspermissionupdate button[action=create]': {
                click: this.onClickBtnCreate
            }
        });
    },
  
// actions
    update: function() {
        this.render('acesspermissionupdate');
    },

// listeners
    onClickBtnCreate: function(button) {
    	this.render('projectadministration');
   }
});