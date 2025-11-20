const buttonDiv = document.querySelector('#buttons')

buttonDiv.addEventListener('click', event => {
  const clickedElement = event.target
  console.log(clickedElement.target)
  if (clickedElement === 'BUTTON') {
    document.body.style.backgroundColor = clickedElement.innerText
  }
})

// div.addEventlistener(‘click’, ( event ) =>{
// 	const clickedElement = event.target; //elementet som eventet triggades på, dvs det som man klickade på
// //event.currentTarget innebär elementet som lyssnaren har lagts till på dvs i det här fallet div
// 	console.log(clickedElement.tagName)
// 	if(clickedElement.tagName === ‘BUTTON’){
// 		console.log( clickedElement.innerText );
// }

// })
