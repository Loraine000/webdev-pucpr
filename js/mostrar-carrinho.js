function loadCart() {
    cart = JSON.parse(sessionStorage.getItem('montarCardProdutos'));
  }
  if (sessionStorage.getItem("montarCardProdutos") != null) {
    loadCart();
  }
  
// List cart
obj.listCart = function() {
    var carrinho = [];
    for(i in cart) {
      item = cart[i];
      itemCopy = {};
      for(p in item) {
        itemCopy[p] = item[p];

      }
      itemCopy.listaProdutos = Number(item.price * item.count).toFixed(2);
      carrinho.push(itemCopy)
    }
    return carrinho;
  }
