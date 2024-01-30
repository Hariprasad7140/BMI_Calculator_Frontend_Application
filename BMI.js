
        const button=document.querySelector('#button');

        button.addEventListener('click',function (e){
            e.preventDefault();


        let height=parseInt(document.querySelector('#height').value);
        let weight=parseInt(document.querySelector('#weight').value);

        let result=document.querySelector('#result');
        let result_text=document.querySelector('#result-text');

        if (isNaN(height) || isNaN(weight) || height<=0 || weight<=0) {
            result_text.innerHTML = "Please enter valid height and weight.";
            return;
        }

        let heightmeter=height/100;

        const bmi=(weight/(heightmeter*heightmeter)).toFixed(2);
        result.innerHTML=`<span>${bmi}</span>`
        result.style.color="blue";

        if(bmi<18.6)
        {
            result_text.innerHTML="Your are underweight"
            result_text.style.color = "red";
        }
        else if(bmi>18.6 && bmi<24.9)
        {
            result_text.innerHTML="Normal"
            result_text.style.color = "green";
        }
        else if(bmi>24.9)
        {
            result_text.innerHTML="You are Overweight"
            result_text.style.color = "red";
        }
        });