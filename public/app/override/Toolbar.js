Ext.define('IM.override.Toolbar', {
	requires: ['Ext.toolbar.Toolbar']
},
function() {
	Ext.override(Ext.toolbar.Toolbar, {
		border	: false
	})
})