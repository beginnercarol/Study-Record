chrome.devtools.panels.create("MyPanel","icon.png","Panel.html",function(panel){
		var _window;
		var data = [];
		var port = chrome.runtime.connect({name:'devtools'});
		_window = panel;
		port.onMessage.addListener(function(msg){
			if(port.name=='devtools'){
				console.log("OK");
			}
		});
		panel.onShown.addListener(function tmp(panelWindow){
			panel.onShown.removeListener(tmp);
			_window = panelWindow;
		});
		chrome.devtools.network.onRequestFinished.addListener(
			function(request){
				chrome.devtools.network.getHAR(function(harLog){
					port.postMessage({har:harLog});
					data.push(harLog);
					if(_window){
						_window.do_sth(harLog);
					}
				});
			}
		);
});

chrome.devtools.panels.elements.createSidebarPane("Images",function(sidebar){
	sidebar.setObject({aaa:111,bbb:"hello"});
});