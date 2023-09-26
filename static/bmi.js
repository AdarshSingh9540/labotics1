function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    
    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        document.getElementById("result").innerText = "Please enter valid values for weight and height.";
        return;
    }
    
    var bmi = weight / ((height / 100) ** 2);
    var bmiCategory = getBMICategory(bmi);

    document.getElementById("result").innerText = `Your BMI: ${bmi.toFixed(2)} (${bmiCategory})`;
}

function getBMICategory(bmi) {
    if (bmi < 18.5) return "Underweight";
    if (bmi >= 18.5 && bmi < 24.9) return "Normal Weight";
    if (bmi >= 25 && bmi < 29.9) return "Overweight";
    return "Obese";
}