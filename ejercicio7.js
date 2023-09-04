const form = document.getElementById('suma-numeros-form');
        const resultadoDiv = document.getElementById('resultado');
        let limite = 0;
        let suma = 0;

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const nuevoNumero = parseInt(form.numero.value);

            if (limite === 0) {
                limite = parseInt(form.limite.value);
            }

            if (suma + nuevoNumero <= limite) {
                suma += nuevoNumero;
                form.numero.value = '';
            } else {
                resultadoDiv.textContent = `La suma total (${suma}) ha superado el límite (${limite}).`;
            }

            if (suma === limite) {
                resultadoDiv.textContent = `La suma total (${suma}) ha alcanzado el límite (${limite}).`;
            }
        });