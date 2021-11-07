var  listaProdutos = [[
    0, 'Faciunt Perfectum','1.jpg',false],
    [1,'Dolor Sit Amet','2.jpg',false],
    [2,'Consectetur Adipiscing Elit','3.jpg',false],
    [3,'Pellentesque Port Sit','4.jpg',false],
    [4,'Eget Mattis Arcu Viverra','5.jpg',false],
    [5,'Cras Commodo','6.jpg',false],
    [6,'Tempor Magna','7.jpg',false],
    [7,'Nullam Ullamcorpe','8.jpg',false],
    [8,'Ut cursus eratB','9.jpg',false],
    [9,'Uspendisse Bibendum','10.jpg',false],
    [10,'Eest Sagittis','11.jpg',false],
    [11,'Convallis Nunc Erat','12.jpg',false],
    [12,'Ex Quam Congue','13.jpg',false],
    [13,'Sociosqu Ad Litora','14.jpg',false],
    [14,'Donec Vitae Mauris','15.jpg',false],
    [15, 'Nostrorio Imperatus Berrati III — β Pegasi', 'produto1.jpg',false],
    [16, 'Vavalvidarte XIM MGolith XV — ζ Ceti Aa','produto2.jfif', false],
    [17, 'Treneustrigyat Corvi Aurigæ — Persei A', 'produto3.jpg', false],
    [18, 'Verus Mi0V Sadatoni  — V2500 Ophiuchi', 'produto4.jpg', false]];

const n = 4;
var carrinho = [];

window.onload = function(){
    montarCardProdutos();
        
    }

function montarCardProdutos(){
    document.getElementById("div-cards-pagina").innerHTML = "";
    for(var i =0; i < listaProdutos.length; i +=4)
    {
        console.log("div-cards-pagina" + listaProdutos.slice(i,i+4));

    {
        var conteudo = "";
        conteudo += '<div class="div-card">';

        conteudo += '<div class="div-card-img">';
        conteudo += '<img src="img/maisimg/'+listaProdutos[i][2]+'" />';
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
}
function comprar(id){

    listaProdutos[id][3] = true;
    carrinho.push(listaProdutos [id]);
    window.localStorage.setItem("carrinho", JSON.stringify(carrinho));
    


    montarCardProdutos();
    }
