Ext.define('IM.controller.Issues', {
    extend  : 'IM.controller.Controller',
    views   : [
    	'issue.List',
    	'issue.View'
    ],

// init
    init: function()
    {
       this.control({
            'issuelist button[action=create]': {
                click: this.onClickBtnCreate
            }
        });
    },
    
// actions
    list: function() {
        this.render('issuelist');
    },

    view: function() {
    	this.render('issueview');
    },

// listeners
    onClickBtnCreate: function(button) {
        this.render('issueview');
   }

});