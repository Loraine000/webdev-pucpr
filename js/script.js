var listaProdutos = [[0, 'Nostrorio Imperatus Berrati III — β Pegasi', 'produto1.jpg',false],
[1, 'Vavalvidarte XIM MGolith XV — ζ Ceti Aa','produto2.jfif', false],
[2, 'Treneustrigyat Corvi Aurigæ — Persei A', 'produto3.jpg', false],
[3, 'Verus Mi0V Sadatoni  — V2500 Ophiuchi', 'produto4.jpg', false],];


var carrinho = [];

window.onload = function(){
    montarCardProdutos();
        
    }

function montarCardProdutos(){
    document.getElementById("div-cards-pagina").innerHTML = "";
    for(var i =0; i < listaProdutos.length; i++)
    {
        var conteudo = "";
        conteudo += '<div class="div-card">';

        conteudo += '<div class="div-card-img">';
        conteudo += '<img src="img/'+listaProdutos[i][2]+'" />';
        conteudo += '</div>';
        conteudo += '<div class="div-card-descricao">';
        conteudo += listaProdutos[i][1];
        conteudo += '</div>';

        if (listaProdutos[i][3] == false)
        {

            conteudo += '<div class="div-card-comprar" onclick="comprar('+ listaProdutos[i][0]+')" >';
        conteudo += 'Comprar';
        conteudo += '</div>';
        conteudo += '</div>';

        }

        else 
        {
        conteudo += '<div class="div-card-comprar produto-comprado" onclick="comprar('+ listaProdutos[i][0]+')" >';
        conteudo += 'Adicionado ao carrinho';
        conteudo += '</div>';
        conteudo += '</div>';

        }


        document.getElementById("div-cards-pagina").innerHTML += conteudo;
    }
}

function comprar(id){

    listaProdutos[id][3] = true;
    carrinho.push(listaProdutos [id]);
    window.localStorage.setItem("carrinho", JSON.stringify(carrinho));
    


    montarCardProdutos();
    }
