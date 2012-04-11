Ext.define('IM.controller.Issues', {
    extend  : 'IM.controller.Controller',
    views   : [
    	'issue.List',
    	'issue.Edit'
    ],

// init
    init: function()
    {
       this.control({
            'issuelist button[action=edit_user]': {
                click: this.onClickBtnEditUser
            },
            'issuelist button[action=edit_records]': {
                click: this.onClickBtnEditRecords
            },
            'issuelist button[action=edit_permissions]': {
                click: this.onClickBtnEditPermissions
            },
            'issuelist button[action=create_issue]': {
                click: this.onClickBtnCreateIssue
            },
            'issuelist button[action=reload_issues]': {
                click: this.onClickBtnReloadIssues
            },
            'issuelist button[action=edit_issue]': {
                click: this.onClickBtnEditIssue
            }
        });
    },
    
// actions
    list: function() {
        this.render('issuelist');
    },

    view: function() {
    	this.render('issueedit');
    },

// listeners
    onClickBtnEditUser: function(button) {
        this.render('useredit');
   },

    onClickBtnEditRecords: function(button) {
        this.render('projectadministration');
   },

    onClickBtnEditPermissions: function(button) {
        this.render('acesspermissionedit');
   },

    onClickBtnCreateIssue: function(button) {
        this.render('issueedit');
   },

    onClickBtnReloadIssues: function(button) {
   },

    onClickBtnEditIssue: function(button) {
        this.render('issueedit');
   }

});