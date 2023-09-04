const form = document.getElementById('calculator-form');
        const resultDiv = document.getElementById('result');

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const operation = form.operation.value;
            const num1 = parseFloat(form.num1.value);
            const num2 = parseFloat(form.num2.value);

            let result;

            switch (operation.toUpperCase()) {
                case 'S':
                    result = num1 + num2;
                    break;
                case 'R':
                    result = num1 - num2;
                    break;
                case 'M':
                    result = num1 * num2;
                    break;
                case 'D':
                    if (num2 !== 0) {
                        result = num1 / num2;
                    } else {
                        result = 'No se puede dividir por cero.';
                    }
                    break;
                default:
                    result = 'Operación no válida';
                    break;
            }

            resultDiv.textContent = `Resultado: ${result}`;
        });