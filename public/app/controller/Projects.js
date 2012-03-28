Ext.define('IM.controller.Projects', {
    extend  : 'IM.controller.Controller',
    views   : [
        'project.Administration',
        'project.Create'
    ],

// init
    init: function()
    {
       this.control({
            'projectcreate button[action=create]': {
                click: this.onClickBtnCreate
            },
            'projectcreate button[action=cancel]': {
                click: this.onClickBtnCancel
            }
        });
    },
    
// actions
    create: function() {
        this.render('projectcreate');
    },

    administration: function() {
        this.render('projectadministration');
    },

// listeners
    onClickBtnCreate: function(button) {
    	this.render('acesspermissionupdate');
   },

    onClickBtnCancel: function(button) {
        this.render('viewportindex');
   }
});