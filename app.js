function countDown(time){
    let t = setInterval(function(){
        time--;
        if(time <= 0){
            clearInterval(t);
            console.log('Done!');
        }
        else {
            console.log(time);
        }

    }, 1000)
}

EXERCISE 2:
function randomGame(){
    let n;
    let t = 0;
    let tm = setInterval(function(){
        n = math.random();
        t++
        if(n > .75){
            clearInterval(tm);
            console.log('It took ' + t + ' try/tries.');
        }
    }, 1000)
}
