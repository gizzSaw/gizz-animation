

function myMove () {
    const elem = document.querySelector('#myAnimation')
    let pos = 0;
    let id = setInterval(frame, 10);

    function frame() {
        if(pos == 380) {
            clearInterval(id)
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }

        
    }

    console.log('my move')
}

function stop () {
    location.reload()
}

function start () {
    const id = setInterval(() => {
        myMove ()
    }, 1000);    

    
    
}