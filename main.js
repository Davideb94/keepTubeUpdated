function loadPanel( videoUrl ){
	console.log('https://www.youtube.com/tv/watch?v='+videoUrl);
	chrome.windows.create({ 
		url: 'https://www.youtube.com/tv#/watch?v='+videoUrl, 
		height: 330, 
		width: 430,
		left: 950,
		top:570,
		type: "panel",
		focused: true
	});
}	
chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse){
        loadPanel(request.url);
    }
);
