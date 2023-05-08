function changetemp(){
    var inp_temp = document.getElementById('input_temp');
    const input_temp_val = +inp_temp.value; 
    var curr_unit = document.getElementById('Current_unit');//this fetches whole element
    const curr_unit_val = curr_unit.value.toLowerCase(); //this helps to store value
    var res_unit = document.getElementById('Result_unit');
    var res_unit_val = res_unit.value.toLowerCase();
    var res = document.getElementById('result');
    if(curr_unit_val==""||res_unit_val==""){
        res.innerHTML="Select Unit";
    }
    else if(curr_unit_val!=res_unit_val){
        if(curr_unit_val=="celsius"){
            if(res_unit_val=="kelvin"){
                var ans = (input_temp_val + 273.15).toFixed(3);
                res.innerHTML="Result :- "+ans+" K";
            }
            else{
                var ans = (((9*input_temp_val)/5) +32).toFixed(3);
                res.innerHTML="Result :- "+ans+" deg F";
            }
        }
        else if(curr_unit_val=="kelvin"){
            if(res_unit_val=="celsius"){
                var ans = (input_temp_val - 273.15).toFixed(3);
                res.innerHTML="Result :- "+ans+" deg C";
            }
            else{
                var ans = (((9*input_temp_val)/5)-459.67).toFixed(3);
                res.innerHTML="Result :- "+ans+" deg F";
            }
        }
        else if(curr_unit_val=="fahrenheit"){
            if(res_unit_val=="celsius"){
                var ans = (((input_temp_val-32)*5)/9).toFixed(3);
                res.innerHTML="Result :- "+ans+" deg C";
            }
            else{
                var ans = (((input_temp_val+459.67)*5)/9).toFixed(3);
                res.innerHTML="Result :- "+ans+" K";
            }
        }
        else{
            res.innerHTML="Select Unit";
        }
    }
    else{
        
        res.innerHTML="Result :- "+input_temp_val+"";
    }
}