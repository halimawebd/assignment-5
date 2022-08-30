const cartArray = [];

function display(cartselect)
{
// console.log(cartselect)
for(let i = 0; i < cartselect; i++)
{
  console.log(cartArray[1]);
}


}

function addToCart(element)

{
  // console.log(element.parentNode.parentNode.children)
  // console.log(element.parentNode.parentNode.children[0].innerText)
//  console.log(element.parentNode.children[0]);

  const selectName = element.parentNode.children[0].innerText;
  console.log(selectName)

    const Selectobj ={
    selectName: selectName,

    

  }
  cartArray.push(Selectobj);

  console.log(cartArray);

  // console.log(cartArray.length);
  // document.getElementById('total-added-select').innerText = cartArray-length;

  
}
