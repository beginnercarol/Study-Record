chrome.devtools.panels.create("MyPanel","icon.png","Panel.html",function(panel){
		chrome.devtools.network.onRequestFinished.addListener(
			function(request){
				console.log(request.getContent());
			}
			);
});

chrome.devtools.panels.elements.createSidebarPane("Images",function(sidebar){
	sidebar.setObject({aaa:111,bbb:"hello"});
});