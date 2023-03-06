async function converterMoeda() {
    const valorReal = document.querySelector('#valor-real').value;
    const cotacaoDolar = await buscarCotacaoDolar();
    const valorDolar = (valorReal / cotacaoDolar).toFixed(2);
    document.querySelector('#valor-dolar').value = valorDolar;
  }
  
const endpoint = "https://economia.awesomeapi.com.br/json/all/USD-BRL";

  async function buscarCotacaoDolar() {
    const response = await fetch(endpoint);
    const dados = await response.json();
    const cotacao = dados.USD.bid;
    return cotacao;
  }
  

  async function getCurrencyValue() {
    const response = await fetch(endpoint);
    const data = await response.json();
    const dollarValue = data.USD.bid;
    document.querySelector("#dollar-value").innerHTML = `Valor atual do dólar: R$ ${dollarValue}`;
  }
  
  getCurrencyValue();
    