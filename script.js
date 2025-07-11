document.addEventListener('DOMContentLoaded', function () {
            const display = document.getElementById('calc-display');
            const buttons = document.getElementsByClassName('btn');

            let currentValue = "";

            
            
            function evaluateresult()
            {
                const convertedValue = currentValue
                    .replace(/×/g, "*")
                    .replace(/÷/g, "/")
                    .replace(/%/g, "*0.01")
                    .replace(/π/g, "Math.PI")
                    .replace(/ln\(/g, "Math.log(")
                    .replace(/sin\(/g, "Math.sin(")
                    .replace(/cos\(/g, "Math.cos(")
                    .replace(/e/g, "Math.E")
                    .replace(/√/g, "Math.sqrt")
                    .replace(/log\(/g, "Math.log10(")
                    .replace(/tan\(/g, "Math.tan(");
                    

                const result = eval(convertedValue);
                currentValue = result.toString();
                display.value = currentValue;
            }
            
            for(let i = 0; i<buttons.length; i++){
                const button = buttons[i];
                button.addEventListener('click', function(){
                    const value = button.innerText;


                    try
                    {
                        if (value == "AC")
                    {
                        currentValue = "";
                        display.value = currentValue;
                    }

                    else if(value == "=")
                    {
                        evaluateresult();
                    }

                    else
                    {
                        currentValue += value;
                        display.value = currentValue;
                    }
                    }

                    catch (error)
                    {
                        console.error(error);
                        currentValue = "ERROR (you might need to use brackets)";
                        display.value = currentValue;
                    }

                })
            }
        
  });