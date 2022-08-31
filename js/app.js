const cartArray = [];

function display(cartselect)
{
// console.log(cartselect)
const cardBody = document.getElementById('cart-select');
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

  const listName = document.getElementById('list-name');
  if(listName.children.length<5){
    const li = document.createElement('li');
    li.innerText = selectName;
    listName.appendChild(li)
   
    element.setAttribute('disabled',true)
  }
  else{
    alert('code')
  }
 
  console.log(element)
    const Selectobj ={
    selectName: selectName,
}
  cartArray.push(Selectobj);

  console.log(cartArray);

  // console.log(cartArray.length);
  // document.getElementById('total-added-select').innerText = cartArray-length;
}

// calculator-part

document.getElementById('total-calculate').addEventListener('click',function(){


  let playerExpenseElement = document.getElementById('par-player');
  let playerExpenseElementString = playerExpenseElement.value;
  let playerExpense = parseInt( playerExpenseElementString);
  console.log(playerExpense);
  const payToManagerElement = getElementById('payToManager');
  const payToManagerElementString = payToManagerElement.value;

  let payToManager = parseInt(payToManagerElementString);


  const payToCoachElement = document.getElementById('coach');
  const payCoachElementString = payToCoachElement.value;
  // const payToCoachE = parseInt(payCoachElementString);
  let payToCoach = parseInt(payCoachElementString);

  let totalCalculate = playerExpense + payToManager + payToCoach;

   console .log(totalCalculate);
})
document.getElementById('calculate').addEventListener('click',function(){
  let playerExpenseElement = document.getElementById('par-player');
  let playerExpenseElementString = playerExpenseElement.value;
  let playerExpense = parseInt( playerExpenseElementString);
  console.log(playerExpense);
})



