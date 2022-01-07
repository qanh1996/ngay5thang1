function call() {
    let height = (document.getElementById("height").value);
    let weight = (document.getElementById("weight").value);
    let bmi = weight / ( height ^ 2 )
    document.getElementById("bmi").innerText=bmi;
    if (bmi < 18)
        document.write("Underweight");
    else if (bmi < 25.0)
        document.write("Normal");
    else if (bmi < 30.0)
        document.write("Overweight");
    else
        document.write("Obese");




}