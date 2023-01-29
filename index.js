weight = prompt("Enter weight in kg = ");
height = prompt("Enter height in meter = ");
var bmi = Math.round(weight/(height*height));
if (bmi<18.5) {
  console.log("Your BMI is "+bmi+ ",so you are underweight.");
} else {
  if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Your BMI is "+bmi+ ", so you have a normal weight.");
  } else {
    if (bmi < 24.9){
      console.log("Your BMI is "+bmi+ ", so you are overweight.");
    }
  }
}
