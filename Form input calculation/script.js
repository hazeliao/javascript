function calculateUnitFine() {
	  // Read the value from the input field into a variable
	var income=document.getElementById("txtNetIncome").value;
	// Calculate the unit fine and assign the result into another variable
	var unitFine=(income-255)/60;

	// Write the answer to the web page DOM, in the answer div, as the content
	document.getElementById("answerDiv").innerHTML="Unit fine is "+unitFine.toFixed(2);
}
