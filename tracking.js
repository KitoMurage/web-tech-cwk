function submitMeasurements() {
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);
    var targetWeight = parseFloat(document.getElementById("targetWeight").value);
    var age = parseInt(document.getElementById("age").value);
    var waist = parseFloat(document.getElementById("waist").value);
    var gender = "";
    if (document.getElementById("male").checked) {
        gender = "Male";
    } else if (document.getElementById("female").checked) {
        gender = "Female";
    }
   
    localStorage.setItem("height", height);
    localStorage.setItem("weight", weight);
    localStorage.setItem("targetWeight", targetWeight);
    localStorage.setItem("age", age);
    localStorage.setItem("waist", waist);
    localStorage.setItem("gender", gender); 

   
    alert("Measurements saved!");

   
    document.getElementById("measurementForm").reset();

    var lossRequired = weightLoss(weight, targetWeight);
    console.log('You need to lose ' + lossRequired.toFixed(2) + ' kilograms to reach your target weight.');

    // Calculate BMI
    var bmiData = BMI(weight, height);
    var bmi = bmiData.BMI;
    var bmiMessage = bmiData.bmiMessage;
    console.log('Your BMI = ' + bmi.toFixed(2) + ' (' + bmiMessage + ')');

    
    var bmr = BMR(weight, height, gender, age);
    console.log('Your BMR = ' + bmr + 'kcal');

    var Protein = protein(weight);
    var low = Protein.LowProtein;
    var high = Protein.HighProtein
    console.log('Your protein intake should be in the range: ' + low + 'g to: ' + high + 'g');
    
    // Open a new HTML page to display the data
    var newDataWindow = window.open("measurement_data.html", "_blank");
    newDataWindow.onload = function() {
        newDataWindow.document.getElementById("height").innerText = "Height: " + height + " cm";
        newDataWindow.document.getElementById("weight").innerText = "Weight: " + weight + " kg";
        newDataWindow.document.getElementById("targetWeight").innerText = "Target Weight: " + targetWeight + " kg";
        newDataWindow.document.getElementById("age").innerText = "Age: " + age + "yrs";
        newDataWindow.document.getElementById("waist").innerText = "Waist Circumference: " + waist + " cm";
        newDataWindow.document.getElementById("gender").innerText = "Gender: " + gender; 
        newDataWindow.document.getElementById("lossRequired").innerText = "You need to lose " + lossRequired.toFixed(2) + " kilograms to reach your target weight.";
        newDataWindow.document.getElementById("BMI").innerText = "Your BMI = " + bmi.toFixed(2) + ' (' + bmiMessage + ')';
        newDataWindow.document.getElementById("BMR").innerText = "Your BMR = " + bmr + "kcal";
        newDataWindow.document.getElementById("protein").innerText = "Your protein intake should be in the range: " + low + "g to: " + high + "g";
        
    };
}


function weightLoss(weight, targetWeight) {
    console.log('Your starting weight is: ' + weight + ' kilograms');
    console.log('Your target weight is: ' + targetWeight + ' kilograms');
    
    return Math.abs(targetWeight - weight);
}
function BMI(weight, height) {
    var heightMeters = height / 100;
    var BMI = Math.abs(weight / (heightMeters * heightMeters));
    var bmiMessage;
    if (BMI >= 25) {
        bmiMessage = 'Overweight';
    } else if (BMI <= 18) {
        bmiMessage = 'Underweight';
    } else {
        bmiMessage = 'Healthy';
    }
    return { BMI: BMI, bmiMessage: bmiMessage };
}

function BMR(weight, height, gender, age){
    var BMR;
    if(gender === "Male"){
        BMR = (13.397 * weight) + (4.799 * height) - (5.677 * age) + 88.362;
    }
    else if(gender === "Female"){
        BMR = (9.247 * weight) + (3.098 * height) - (4.330 * age) + 447.593;
        
    }
    return BMR;
}

function protein(weight){
    var LowProtein = 1.2 * weight;
    var HighProtein = 1.7 * weight;
    return {LowProtein: LowProtein, HighProtein: HighProtein};
}
