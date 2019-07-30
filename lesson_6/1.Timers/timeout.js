/*
    setTimeout - метод выполняет код(или функцию),
    указанный в первом аргументе, асинхронно, с задержкой в delay миллисекунд.
    setTimeout выполняет код только один раз
*/

document.addEventListener('DOMContentLoaded', function(){

    /*
        Syntax: setTimeout( function(){}, timeout );
    */
    setTimeout( myFunction, 1000 );

    function myFunction() {
        console.log("Hello 1");
        timer = setTimeout(
            function(){console.log("Hello 2")},
        0);
        console.log('Hello 3')
    }
    


    const fireBtn = document.getElementById('fire');
    fireBtn.addEventListener('click', myFunction);
    
    // let timer = null;
    function stopTimer(){
        clearTimeout( timer );
    }

    const stopBtn = document.getElementById('fire');
    stopBtn.addEventListener('click', stopTimer)
});
