
var myImages1 =[
   '1.png',
   '2.png',
   '3.png',
   '4.png'
]
var myImages2 =[
   '5.png',
   '6.png',
   '7.png',
   '8.png'
]
var myImages3 =[
   '9.png',
   '10.png',
   '11.png',
   '12.png'
]
var myImages4 =[
   '13.png',
   '14.png',
   '15.png',
   '16.png',
   '17.png'
]
var myImages5 =[
   '18.png',
   '19.png',
   '20.png',
   '21.png',
   '22.png',
   '23.png'
]
function get_random_images(){
        
        var rnd = Math.floor(Math.random() * myImages1.length);
        selected=myImages1[rnd]
        document.getElementById('myPicture').src=`./images/${selected}`
}   
function get_random_images1(){
        
        var rnd = Math.floor(Math.random() * myImages2.length);
        selected1=myImages2[rnd]
        document.getElementById('myPicture1').src=`./images/${selected1}`
} 
function get_random_images2(){
        
        var rnd = Math.floor(Math.random() * myImages3.length);
        selected2=myImages3[rnd]
        document.getElementById('myPicture2').src=`./images/${selected2}`
}       
function get_random_images3(){
        
        var rnd = Math.floor(Math.random() * myImages4.length);
        selected3=myImages4[rnd]
        document.getElementById('myPicture3').src=`./images1/${selected3}`
}   
function get_random_images4(){
        
        var rnd = Math.floor(Math.random() * myImages5.length);
        selected4=myImages5[rnd]
        document.getElementById('myPicture5').src=`./images1/${selected4}`
}    