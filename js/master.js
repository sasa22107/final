// select landing page elements
let landingPage = document.querySelector(".landing-page");

// get array of imags
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];


setInterval(() => {

    // get random number
    let randomNumber = Math.floor(Math.random() * imgsArray.length);

 // change background image url
    landingPage.style.backgroundImage = 'url(' + 'imgs/' + imgsArray[randomNumber] + ')';

}, 5000);
