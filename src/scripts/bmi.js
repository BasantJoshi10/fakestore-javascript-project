function calculateBMI() 
{

        var weight = parseFloat(document.getElementById('weight').value);
        var height = parseFloat(document.getElementById('height').value) / 100; //in cm

        if (isNaN(weight) || isNaN(height) || height === 0) //condition
        {
            document.getElementById('result').innerHTML = '<div class="text-danger">Please enter valid inputs.</div>';
            return;
        }

        var bmi = weight / (height * height);
        var category = '';

        if (bmi < 18.5)
        {
            category = 'Underweight';
        }
        else if(bmi < 24.9)
        {
            category = 'Normal weight';
        }
    
        else if (bmi < 29.9) 
            {
                category = 'Overweight';
            }
        else 
        {
            category = 'Obese';
        }
        

        document.getElementById('result').innerHTML = `<div class="alert alert-success">
          Your BMI is <strong>${bmi.toFixed(2)}</strong> (${category})
        </div>`;

}
    
