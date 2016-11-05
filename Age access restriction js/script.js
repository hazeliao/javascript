function checkAge() {
	
	// assign the age input field value into a variable
	var age=document.getElementById("age").value;	
	//if age smaller than 18
	// assign "Adolescents are not allowed to play." to a variable
	if(age<18){
		document.getElementById("answer").innerHTML="Adolescents are not allowed to play.";

	}
	// otherwise 
	// assign "Old enough to play." to a variable  
	else {
		document.getElementById("answer").innerHTML="Old enough to play.";
	}
	// write the answer to the web page DOM, in the answer div, as the content
	
}
