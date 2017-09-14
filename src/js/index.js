var getButtonId = [];
var newSnu = [];

nextSnusButtons.forEach(function(nextSnuButton){
	getButtonId.push(nextSnuButton.id);
	console.log(getButtonId);
});
getButtonId.forEach(function(element){
	var elementButton = document.getElementById(element);
	elementButton.addEventListener('click', function(){
		function newOne(snu){
			if (snu.id === element) {
				return snu
			};
		}
		newSnu = snus.filter(newOne);
		console.log(newSnu);
		title.innerHTML = newSnu[0].title;
		title.id = newSnu[0].id;
		output.innerHTML = newSnu[0].text;
		while(btnContainer.firstChild) {
			btnContainer.removeChild(btnContainer.firstChild);
		}
	});
});

