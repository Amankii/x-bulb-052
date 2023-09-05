document.addEventListener('DOMContentLoaded', () => {

    const btn0 = document.querySelector('#on');
    const btn1 = document.querySelector('#off');
    const img = document.querySelector('img');
 
    btn0.onclick = () => {

        img.src='./images/bulb1zc.png';

    };

    btn1.onclick = () => {

        img.src='./images/bulb0.png';

    };
    

});