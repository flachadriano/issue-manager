Ext.Loader.setPath('Ext', 'extjs/src');
Ext.Loader.setPath('Ext.ux', 'app/ux');
Ext.Loader.setConfig({enabled: true});

Ext.application({
    name 				: 'IM',	//app namespace (from Issue Manager)
    autoCreateViewport	: true,	//automatically creates Viewport
	paths: {
		'Ext.ux': 'app/ux'
	},
	requires: [
		'Ext.ux.Router',
		'IM.override.TextField'
	],
    controllers			: [
    	'AccessPermissions',
    	'Issues',
    	'Projects',
		'Viewport'
	],
    routes				: {
    	''							: 'viewport#index',
		'projects/create'			: 'projects#create',
		'projects/administration'	: 'projects#administration',
		'access_permissions/update'	: 'accessPermissions#update',
		'issues/list'				: 'issues#list',
		'issues/view'				: 'issues#view'
    }
});