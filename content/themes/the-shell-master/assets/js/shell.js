(function(document){
	[].forEach.call(document.getElementsByTagName('pre'), function (elem) {
		elem.classList.add('prettyprint');
	});
	prettyPrint();
})(document);