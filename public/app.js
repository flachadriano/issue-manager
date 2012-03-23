Ext.Loader.setPath('Ext', 'extjs/src');
Ext.Loader.setConfig({enabled: true});

Ext.application({
    name 				: 'IM',   //app namespace (from Issue Manager)
    autoCreateViewport	: true,   //automatically creates Viewport
	models				: [],     //here goes the models
    controllers			: []     //here goes the controllers
});