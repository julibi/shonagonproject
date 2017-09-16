var btnContainer = document.getElementById('button-container');
var title = document.getElementById('title');
var output = document.getElementById('output');
var container = document.getElementById('container-fluid');

function createHTML(selectedObj){
	title.innerHTML = selectedObj.title;
	output.innerHTML = selectedObj.text;
}

function selectRandomKeyword(obj) {
  const max = obj['keywords'].length;
  const random = Math.floor(Math.random() * max);
  return obj['keywords'][random];
}

function findObjsWithKeyword(snus, keyword) {
  const foundArray = [];
  snus.forEach(obj => {
    if (obj['keywords'].includes(keyword)) {
      foundArray.push(obj);
    }
  });
  return foundArray;
}

//the Object shown in the beginning
//I hope to be able to reassign selectedObj each time when a button is clicked
let selectedObj = snus[13];

createHTML(selectedObj);

const keyword = selectRandomKeyword(selectedObj);

const newObjs = findObjsWithKeyword(snus, keyword);

//we don't want to see objects we have already read again
var index = newObjs.indexOf(selectedObj);
newObjs.splice(index, 1);

newObjs;

//create Button
for(var i = 0; i < newObjs.length; i++){
	var btn = document.createElement('button');
	btn.id = newObjs[i].id;
	btn.innerHTML = newObjs[i].title;
	btn.addEventListener('click', onButtonClick());
	btnContainer.append(btn);
}

function onButtonClick() {
	var searchId = this.id;
  	const match = [];
  	console.log(newObjs, searchId);
  	newObjs.forEach(obj => {
    	if (obj['id'] === searchId) {
      		match.push(obj);
    	}
  	});
  	return match;
}


