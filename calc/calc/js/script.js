'use strict';
const rub = document.querySelector('#rub');
const usd = document.querySelector('#usd');
const array = ['GET', 'js/current.json'];
function wrapperRequest() {
    function getRequest(request, url) { //!async, login, password
    const createRequest = new XMLHttpRequest();

    createRequest.open(request, url); //! async, login, password
    createRequest.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    createRequest.send();

    createRequest.addEventListener('load', () => {
        if(createRequest.status === 200) {
            console.log(createRequest.status, createRequest.statusText);
            console.log(createRequest.response);
            const data = JSON.parse(createRequest.response);
            console.log(data);
            usd.value = (rub.value / data.current.usd).toFixed(3);
        }else {
            usd.value = 'something went wrong'; 
        }
    });
    //status
    //statusText
    //Response
    //readyState: 0, 1, 2, 3 ,4 -- UNSET, OPENED, LOADING, DONE
}
return getRequest(...array);
}

rub.addEventListener('input', wrapperRequest);