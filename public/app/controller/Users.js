Ext.define('IM.controller.Users', {
    extend  : 'IM.controller.Controller',
    views   : ['user.Edit'],

// actions
    update: function() {
        this.render('useredit');
    }
});