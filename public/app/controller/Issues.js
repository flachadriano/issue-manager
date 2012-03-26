Ext.define('IM.controller.Issues', {
    extend  : 'IM.controller.Controller',
    views   : ['issue.List'],

// actions
    list: function() {
        this.render('issuelist');
    }

});