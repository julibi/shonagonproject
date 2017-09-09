var container = document.getElementsByClassName('container-fluid');
var btn = document.getElementById('btn');
var title = document.getElementById('title');
var output = document.getElementById('output');

btn.addEventListener('click', function() {
	//select a random SNU
	var randomIndex = Math.floor(Math.random() * snu.length); 
	var randomSplice = snu.splice(randomIndex, 1); 	
	
	if (randomSplice[0] === undefined) {
		//hide button when all SNUs have been read
		btn.style.visibility = 'hidden';
	} else {
		//show title and SNU
		title.innerHTML = randomSplice[0].title;
		output.innerHTML = randomSplice[0].text;
  	}	    
});
