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
		'IM.override.TextField',
		'IM.override.Toolbar'
	],
    controllers			: [
    	'AccessPermissions',
    	'Issues',
    	'Projects',
		'Users',
		'Viewport'
	],
    routes				: {
    	''							: 'viewport#index',
		'projects/create'			: 'projects#create',
		'projects/administration'	: 'projects#administration',
		'access_permissions/edit'	: 'accessPermissions#update',
		'issues/list'				: 'issues#list',
		'issues/edit'				: 'issues#update',
		'users/edit'				: 'users#update'
    }
});