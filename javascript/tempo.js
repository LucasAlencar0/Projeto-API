
const cityInput = document.getElementById('cidade');
const resultDiv = document.getElementById('resultado');
const image = document.getElementById('imagem-tempo');


function Ativar(){
  const city = cityInput.value.trim();

  if (city.length === 0) {
    alert('Por favor, digite o nome de uma cidade');
    return;
  }

  const apiKey = '64ed82577ced7f69cb1687f0ce536131'; // substitua pela sua chave de API do OpenWeatherMap
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.cod === '404') {
        resultDiv.textContent = `Não foi possível encontrar a temperatura da cidade de "${city}"`;
      } else {
        const temperature = data.main.temp;
        resultDiv.style.display = "block"
        resultDiv.textContent = `A temperatura atual em ${city} é de ${temperature}°C`;
        console.log(data)
        
        // Altera a imagem com base na temperatura
        document.getElementById("imagem-tempo").style.display = "block"
        document.getElementById("image-container").style.display = "block"
       
        if (temperature > 20) {
          document.getElementById("imagem-tempo").src = '/imagens/sol.png';
        } else if (temperature > 10) {
          document.getElementById("imagem-tempo").src = '/imagens/floco-de-neve.png';
        } else {
          document.getElementById("imagem-tempo").src = '/imagens/floco-de-neve.png';
        }
      }
    })
    .catch(error => {
      resultDiv.textContent = 'Ocorreu um erro ao buscar a temperatura. Tente novamente mais tarde.';
      console.error(error);
    });
}

