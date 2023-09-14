function convert() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    bmi = weight / (height ^ 2);
    if (bmi < 18.5) {
        document.getElementById('result').innerHTML = 'Chỉ số BMI là: ' + bmi + '. Bạn ' + 'Underweight';
    } else if (bmi < 25) {
        document.getElementById('result').innerHTML = 'Chỉ số BMI là: ' + bmi + '. Bạn ' + 'Normal';
    } else if (bmi < 30) {
        document.getElementById('result').innerHTML = 'Chỉ số BMI là: ' + bmi + '. Bạn ' + 'Overweight';
    } else {
        document.getElementById('result').innerHTML = 'Chỉ số BMI là: ' + bmi + '. Bạn ' + 'Obese';
    }
}