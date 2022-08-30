//interactivity 
'use strict';

//const switcher = document.querySelector('.btn');

function display_random_image()
{

var cat_images = [
    
    
{
    src: "https://i.ibb.co/dPw4ZDQ/IMG-20220820-163555-855.jpg",

    width: "500",
    height: "343"
    
    
    //1

},



{
//2
    src: "https://i.ibb.co/7NCYBJX/IMG-20220820-163545-743.jpg",
    width: "500",
    height: "343"

},


{
//3 
    src: "https://i.ibb.co/khK5rNp/IMG-20220820-163553-051.jpg",
    width: "500",
    height: "343"


},

{
    src: "https://i.ibb.co/pP7VW5L/IMG-20220820-163542-837.jpg",
    width: "500",
    height: "343"
//4


},

{
    src: "https://i.ibb.co/t3wkvSb/IMG-20220820-163539-785.jpg",
    width: "500",
    height: "343"
//5

},

{
    src: "https://i.ibb.co/NSV0gbc/IMG-20220820-163536-411.jpg",
    width: "500",
    height: "343"

//6

},

{
    src: "https://i.ibb.co/sVt3dBm/IMG-20220820-163532-859.jpg",
    width: "500",
    height: "343"
//7

},

{
    src: "https://i.ibb.co/b6ZnHj0/IMG-20220820-163528-445.jpg",
    width: "500",
    height: "343"
//8

},

{
    src: "https://i.ibb.co/6Dr1c67/IMG-20220820-163525-883.jpg",
    width: "500",
    height: "343"
//9

},

{
    src: "https://i.ibb.co/g9KVGBs/IMG-20220820-163520-253.jpg",
    width: "500",
    height: "343"
//10


},

{
    src: "https://i.ibb.co/sv6ybrH/IMG-20220820-163522-693.jpg",
    width: "500",
    height: "343"
//11


},

]



var preBuffer = [];
    for (var i = 0, j = cat_images.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = cat_images[i].src;
        preBuffer[i].width = cat_images[i].width;
        preBuffer[i].height = cat_images[i].height;
    }




    function getRandomInt(min,max) //get a random img number to display a random image from one of the above sources
    {
      
    
var imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  


    var newImage = getRandomInt(0, preBuffer.length - 1); //get random int from 0 to the length of the prebuffer





// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image  
document.body.appendChild(newImage);




}
