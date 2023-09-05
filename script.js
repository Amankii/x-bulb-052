document.addEventListener('DOMContentLoaded', () => {

    const btn0 = document.querySelector('#on');
    const btn1 = document.querySelector('#off');
    const img = document.querySelector('img');
    const click = new Audio('./images/clickm.mp3');

    btn0.onclick = () => {

        img.src='./images/bulb1zc.png';
        click.play()
    };

    btn1.onclick = () => {

        img.src='./images/bulb0.png';
        click.play();
    };
    

});
