const koshuu = () => {
    let num1, num2, result;

    num1 = document.getElementById('number1').value 
    num1 = parseInt(num1);

    num2 = document.getElementById('number2').value 
    num2 = parseInt(num2);

    result = num1+num2;

    document.getElementById('res').innerHTML = result;
}

const kemituu = () => {
    let num1, num2, result;

    num1 = document.getElementById('number1').value 
    num1 = parseInt(num1);

    num2 = document.getElementById('number2').value 
    num2 = parseInt(num2);

    result = num1-num2;

    document.getElementById('res').innerHTML = result;
}

const koboituu = () => {
    let num1, num2, result;

    num1 = document.getElementById('number1').value 
    num1 = parseInt(num1);

    num2 = document.getElementById('number2').value 
    num2 = parseInt(num2);

    result = num1*num2;

    document.getElementById('res').innerHTML = result;
}

const boluu = () => {
    let num1, num2, result;

    num1 = document.getElementById('number1').value 
    num1 = parseInt(num1);

    num2 = document.getElementById('number2').value 
    num2 = parseInt(num2);

    if (num2 == 0) {
        let b = "Нольго болуу болбойт";
        document.getElementById('res').innerHTML = b;
    } else { 
        result = num1/num2;

        document.getElementById('res').innerHTML = result;
    }

    // result = num1/num2;

    // document.getElementById('res').innerHTML = result;
}

const daraja = () => {
    let num1, num2, result;

    num1 = document.getElementById('number1').value 
    num1 = parseInt(num1);

    num2 = document.getElementById('number2').value 
    num2 = parseInt(num2);

    result = num1**num2;

    document.getElementById('res').innerHTML = result;
}
