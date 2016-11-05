function calculateBMI(){
  var weight=document.getElementById("weight").value;
  var height=document.getElementById("height").value;
  var BMI=weight/(height/100*height/100);
  if(BMI<=18.4){
    document.getElementById("answer").innerHTML="Body Mass Index (BMI) is "+BMI.toFixed(2)+" (Weight less than normal weight)";
  } else if(BMI<=24.9){
    document.getElementById("answer").innerHTML="Body Mass Index (BMI) is "+BMI.toFixed(2)+" (Normal weight)";
  }else {
    document.getElementById("answer").innerHTML="Body Mass Index (BMI) is "+BMI.toFixed(2)+" (Overweight)";
  }
}