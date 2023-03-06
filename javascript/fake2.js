//Metodo fetch() para buscar o arquivo dados.json ou qualquer API, Transformando o resultado em objeto usando o método response.json.

fetch('dados.json').then(response => response.json()).then(corpo => {

    //Acessando os dados do objeto JSON e adcionando ao HTML dentro do elemento DIV usando a propiedade innerHTML.
    document.getElementById('imagem-rock').innerHTML = corpo.rock.imagem;
    document.getElementById('nome-rock').innerHTML = corpo.rock.name;
    document.getElementById('disco-rock').innerHTML = corpo.rock.album;
    document.getElementById('estilo-rock').innerHTML = corpo.rock.style;
    document.getElementById('preco-rock').innerHTML = corpo.rock.price;

    document.getElementById('imagem-sertanejo').innerHTML = corpo.sertanejo.imagem;
    document.getElementById('nome-sertanejo').innerHTML = corpo.sertanejo.name;
    document.getElementById('disco-sertanejo').innerHTML = corpo.sertanejo.album;
    document.getElementById('estilo-sertanejo').innerHTML = corpo.sertanejo.style;
    document.getElementById('preco-sertanejo').innerHTML = corpo.sertanejo.price;
    
    document.getElementById('imagem-hip-hop').innerHTML = corpo.hiphop.imagem;
    document.getElementById('nome-hip-hop').innerHTML = corpo.hiphop.name;
    document.getElementById('disco-hip-hop').innerHTML = corpo.hiphop.album;
    document.getElementById('estilo-hip-hop').innerHTML = corpo.hiphop.style;
    document.getElementById('preco-hip-hop').innerHTML = corpo.hiphop.price;
    
});