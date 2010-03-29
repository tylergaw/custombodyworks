//////////////////// open new window ////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
	//
	//
	//
	//openNewWindow()
	//
	//
function openNewWindow() {
	var links = document.getElementsByTagName("a");
	for(var i=0; i<links.length; i++) {
		if(links[i].getAttribute("rel") == "external") {
			links[i].setAttribute("target", "_blank");
		}
	}
}
////////////////////////////////////////////////////////////////////////////////////////////////
	//
	//
	//
	//createPrintButton()
	//
	//
function createPrintButton() {
	if(!document.getElementById) return false;
	if(!document.getElementById('sideBar')) return false;
	var parentElem = document.getElementById('sideBar');
	var newNode = document.createElement('li');
	newNode.style.borderStyle = "none";
	var newElem = document.createElement('a');
	newElem.setAttribute('id', 'printIcon');
	newElem.setAttribute('href', '#');
	newElem.onclick = function() {
		print();
		return false;
	}
	var elemText = document.createTextNode('Print');
	newElem.appendChild(elemText);
	newNode.appendChild(newElem);	
	parentElem.insertBefore(newNode, parentElem.firstChild);
}
////////////////////////////////////////////////////////////////////////////////////////////////
	//
	//
	//
	//addLoadEvent()
	//
	//
	//
function addLoadEvent(func) {
	var oldonload = window.onload;
	if(typeof window.onload != 'function') {
		window.onload = func;
	}else{
		window.onload = function() {
			oldonload();
			func();
		}
	}
}
////////////////////////////////////////////////////////////////////////////////////////////////
	//
	//
	//
	//when page loads
	//
	//
	//
addLoadEvent(function() {
	openNewWindow();
	createPrintButton();
});