document.getElementById('calcular').addEventListener('click', function() {
    document.getElementById('calcular').addEventListener('click', function() {
        // Captura os valores inseridos pelo usuário
        let valorTransacao = parseFloat(document.getElementById('valor-transacao').value);
        let complexidade = document.getElementById('complexidade').value;
        let moedaSelecionada = document.getElementById('moeda').value;
        let precoGas;
    
        // Validação para garantir que o valor da transação seja maior que zero
        if (valorTransacao <= 0) {
            document.getElementById('resultado').innerHTML = '<p style="color:red;">Por favor, insira um valor de transação válido (maior que 0).</p>';
            return; // Se o valor for inválido, não realiza o cálculo
        }
    
        // Definição de preço do gas por complexidade
        switch (complexidade) {
            case 'baixa':
                precoGas = 0.01;
                break;
            case 'media':
                precoGas = 0.05;
                break;
            case 'alta':
                precoGas = 0.1;
                break;
        }
    
        // Calcula o custo total do gas
        let custoGas = valorTransacao * precoGas;
    
        // Converte o custo do gas para a moeda selecionada (simulando uma taxa de conversão simples)
        let custoConvertido = custoGas; // Por enquanto, sem taxa de conversão real
        if (moedaSelecionada === 'USD') {
            custoConvertido = custoGas * 3.5; // Exemplo de conversão fictícia para USD
        } else if (moedaSelecionada === 'EUR') {
            custoConvertido = custoGas * 3.0; // Exemplo de conversão fictícia para EUR
        }
    
        // Exibe o resultado
        document.getElementById('resultado').innerHTML = `
            <p>Valor da Transação: ${valorTransacao} DOT</p>
            <p>Complexidade: ${complexidade.charAt(0).toUpperCase() + complexidade.slice(1)}</p>
            <p><strong>Custo Estimado do Gas: ${custoGas.toFixed(2)} DOT</strong></p>
            <p><strong>Em ${moedaSelecionada}: ${custoConvertido.toFixed(2)} ${moedaSelecionada}</strong></p>
        `;
    
        // Atualiza o contador de transações
        let contador = parseInt(document.getElementById('contador').textContent.split(': ')[1]);
        contador++;
        document.getElementById('contador').textContent = `Transações Simuladas: ${contador}`;
    
        // Adiciona o histórico de transações
        let listaHistorico = document.getElementById('historico-lista');
        let itemHistorico = document.createElement('li');
        itemHistorico.textContent = `Transação de ${valorTransacao} DOT, Complexidade: ${complexidade}, Custo de Gas: ${custoGas.toFixed(2)} DOT (${custoConvertido.toFixed(2)} ${moedaSelecionada})`;
        listaHistorico.appendChild(itemHistorico);
    
        // Limpa o formulário para nova transação
        document.getElementById('gas-form').reset();
    });
    
    // Temporizador para limpar o histórico após 1 minuto
    setTimeout(() => {
        document.getElementById('historico-lista').innerHTML = ''; // Limpar o histórico
    }, 60000); // 60000 ms = 1 minuto
});   