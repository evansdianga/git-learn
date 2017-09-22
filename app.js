'use strict';
(function () {
    let content = document.getElementById('message');
    content.innerHTML = 'Evans Dianga';

    setInterval(tickClock,1000);


    function tickClock(){
        let CurrentTime = new Date();
        //content.innerHTML = CurrentTime.getHours() +" :" + CurrentTime.getMinutes()+" :"+CurrentTime.getMilliseconds *1000;
        content.innerHTML = CurrentTime;
    }
})();
