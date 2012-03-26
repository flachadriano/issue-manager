Ext.define('IM.controller.AccessPermissions', {
    extend  : 'IM.controller.Controller',
    views   : ['accessPermission.Update'],
    
// init
    init: function()
    {
       this.control({
            'acesspermissionupdate button[action=create]': {
                click: this.onClickBtnCreate
            },
            'acesspermissionupdate button[action=cancel]': {
                click: this.onClickBtnCancel
            }
        });
    },
  
// actions
    update: function() {
        this.render('acesspermissionupdate');
    },

// listeners
    onClickBtnCreate: function(button) {
    	this.render('issuelist');
   },

    onClickBtnCancel: function(button) {
        this.render('issuelist');
   }
});