var getButtonId = [];
nextSnusButtons.forEach(function(nextSnuButton){
	getButtonId.push(nextSnuButton.id);
	console.log(getButtonId);
});
getButtonId.forEach(function(element){
	var element = document.getElementById(element);
	console.log(element);
	element.addEventListener('click', function(){
		console.log('starting next step...');
		console.log(snus.element);
	});
});

