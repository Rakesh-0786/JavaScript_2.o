// console.log(document.URL);
// console.log(document.domain);
// console.log(document.body)
// console.log(document.all);

// document.title="DOM";


// const body=document.body;
 // add text

// Append can also be add the text
// body.append("Hi This is Rakesh Kumar!");
// body.style.color='green'

// appendChild cannot add the text;
// body.appendChild('Rakesh');

// create new Elements

// const div=document.createElement('div');

//adding text to the elements
// div.textContent="This is a div"
// div.innerText="JavaScript";

// body.append(div);

// console.log(div);



// const div= document.querySelector('div');

// console.log(div.innerText) //it show the only visible parts 
// console.log(div.textContent) //it display the all contents present inside the div elements also show the hidden parts with space.


// const body= document.body;

// Strong element

// const div= document.createElement('div');

// const strong =document.createElement('strong');
// strong.innerText="This is a bold text";

// div.appendChild(strong);
// body.appendChild(div);


// We can also do the same things as the above code in innerHTML
//The innerHTML property in JavaScript is used to get or set the HTML content of an element. It allows you to manipulate the HTML structure inside an element, including nested elements, text, and attributes.

// body.innerHTML='<div><strong><p>This is a bold text</p></strong></div>'




// for deleting elements
const div= document.querySelector('div');

// const spanOne=document.getElementById('one');
// const spanTwo=document.getElementById('two');

// spanTwo.remove();
// div.removeChild(spanOne);



// attritbutes properties and Methods
// select the attributes
// console.log(spanOne.getAttribute('name'));

//set the attributes it takes two input one is the attribute name and the other is the write the updated name
// spanOne.setAttribute('name',"abcd")
// spanOne.id='ansjrkd'

// we can also remove the attributes.
// spanOne.removeAttribute('name');




// Classes methods or properties
const spanOne=document.getElementById('one');
const spanTwo=document.getElementById('two');


// spanTwo.classList.add('new-class');
// spanTwo.classList.remove('new-class');

// or
// spanTwo.className='new-name'
// spanTwo.className='new-name a b c d e';

// toggle:- it is used for adding or removing the elemets automatically
// if the elements are already present in the html then it remove it and if the elements are not present then it add the new elements in the html.
// spanOne.classList.toggle('new-name')


// style:
spanOne.style.color="green";
spanOne.style.backgroundColor='tomato'