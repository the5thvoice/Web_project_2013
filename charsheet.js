function inbox(a,b,c){

	var box = document.getElementById(a);
	var contain = document.getElementById(b);
	var button = document.getElementById(c);
	var attribute = Number(document.getElementById(a).value);
	var dots = document.createElement('img');	
	dots.style.display="block";
	dots.style.cssFloat="right";
	
	
	if(attribute == 0){
		dots.src = "ZeroDots.png";
		contain.removeChild(box);
		contain.removeChild(button);
		contain.appendChild(dots);
	}
	if(attribute == 5){
		dots.src = "FiveDots.png";
		contain.removeChild(box);
		contain.removeChild(button);
		contain.appendChild(dots);
	}
	if(attribute == 1){
		dots.src = "OneDots.png";
		contain.removeChild(box);
		contain.removeChild(button);
		contain.appendChild(dots);
	}
	if(attribute == 2){
		dots.src = "TwoDots.png";
		contain.removeChild(box);
		contain.removeChild(button);
		contain.appendChild(dots);
	}
	if(attribute == 3){
		dots.src = "ThreeDots.png";
		contain.removeChild(box);
		contain.removeChild(button);
		contain.appendChild(dots);
	}
	if(attribute == 4){
		dots.src = "FourDots.png";
		contain.removeChild(box);
		contain.removeChild(button);
		contain.appendChild(dots);
	}
	
	
}


function returnWord(x,y,z){
	
	var inWordBox = document.getElementById(x);
	var theButton = document.getElementById(z);
	var contain = document.getElementById(y);
	var outWord = document.createTextNode(document.getElementById(x).value);
	contain.removeChild(inWordBox);
	contain.removeChild(theButton);
	contain.appendChild(outWord);
	
	
}


