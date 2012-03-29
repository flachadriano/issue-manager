Ext.define('IM.override.TextField', {
	requires: ['Ext.form.field.Text']
},function()
{
	Ext.override(Ext.form.field.Text, {
		labelAlign	: 'right'
	})
})