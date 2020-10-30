window.addEventListener('DOMContentLoaded', () => {
    'use strict'
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    const hideTempContent = a => {
        for( let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide')
        }
    };   
    hideTempContent(1);
    const showTempContent = b => {
        if(tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show')
        }
    };
    info.addEventListener('click', event => {

        const target = event.target;
        if(target && target.classList.contains('info-header-tab')){
            for(let i = 0; i < tab.length; i++){
                if(target == tab[i]){
                    hideTempContent(0);
                    showTempContent(i);
                    break;
                }
            }
        }
    });
    const deadline = '2020-10-31';
    const getTime = (endTime) => {
        let t = Date.parse(endTime) - Date.parse(new Date());
        let minutes = new Date(t).getMinutes();
        let seconds = new Date(t).getSeconds();
        let hours = new Date(t).getHours();
        const addNull = (time) =>{
            if(time < 10){
                return time = '0' + time;
            } else {
                return time;
            }
        };
        return {
            total: t,
            minutes: addNull(minutes),
            seconds: addNull(seconds),
            hours: addNull(hours)
        }
    };
    const setClock = (id, endTime) => {
        let timer = document.getElementById(id);
        let seconds = timer.querySelector('.seconds');
        let minutes = timer.querySelector('.minutes');
        let hours = timer.querySelector('.hours');
        let timeInterval = setInterval(updateClock, 1000);

        function updateClock () {
            let t = getTime(endTime);
            hours.textContent = t.hours;
            seconds.textContent = t.seconds;
            minutes.textContent = t.minutes;

            if(t.total <= 0){
                clearInterval(timeInterval);
            }
        }
    };
    setClock('timer', deadline);
})