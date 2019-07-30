/*
  PROMISES
  Способ организации асинзронного кода.
*/

  // PROMISES
  // Promise status : Pending | Fulfilled | Rejected

  /*
    FIRST PROMISE
    Статус промиса может изменится только 1 раз
  */

  const successIterOne = ( res ) => {
    console.log('success', res);
    return res;
  }

  const errorIterOner = (err_data) => {
    console.error('error', err_data );
    return err_data;
  }

  const successIterTwo = res => {
    if( res.length === 1){
      return [{
        error: true
      }]
    } else {
      return res;
    }
  }

  const successIterThree = res => {

    let newData = res.map( item => {
      item.status = false;

      return item;
    })

    console.log('new data:', newData);
    return newData;
  }


  // let TestPromise = new Promise( ( resolve, reject ) => {
  //     setTimeout( () => {
  //       // resolve([
  //       //   { title: '1'},
  //       //   { title: '2'}
  //       // ]);
  //       reject([
  //         { title: '3'}
  //       ])
  //     }, 2000);
  // })
  // .then( successIterOne, errorIterOner )
  // .then( successIterTwo )
  // .then( successIterThree )
  // .catch( err => {
  //   console.log('We have a problems', err);
  // })


  // let TestPromise = new Promise( function( resolveFunc, rejectFunc ){
  //  setTimeout( () => {
  // // //    // переведёт промис в состояние fulfilled с результатом "result"
  //   //  resolveFunc([{title:'1'}, {title: '2'}]);
  // // //    // переведёт промис в состояние Rejected с результатом "ERROR 404"
  //    rejectFunc('ERROR 404');
  //  }, 1000);
  // });




  /* LOAD CAT PROMISE */
  //
  function loadImagePromise( url ){
    return new Promise( (resolve, reject) => {
      let imageElement = new Image();
          imageElement.onload = function(){
            resolve( imageElement );
          };
          imageElement.onerror = function(){
            let message = 'Error on image load at url ' + url;
            new Error(message);

            let errorImg = new Image();
                errorImg.src = 'images/cat5.jpg';
                reject(
                  RenderImage(errorImg)
                );
          };
          imageElement.src = url;
    });
  }


  // loadImagePromise('images/cat1afd.jpg')
  //   .then( RenderImage );

  //
  // Promise.all([
  //   loadImagePromise('images/cat2.jpg'),
  //   loadImagePromise('images/cat1.jpg'),
  //   loadImagePromise('images/cat3.jpg'),
  //   loadImagePromise('images/cat4.jpg'),
  //   loadImagePromise('images/cat5.jpg'),
  //   loadImagePromise('images/cat6.jpg'),
  //   loadImagePromise('images/cat7.jpg')
  // ])
  // .then( images => {
  //   console.log( images );
  //   images.forEach( img => RenderImage( img ) );
  // })
  // .catch( error => console.log('catch', error));

  // http://www.json-generator.com/api/json/get/cfWixBRmPS?indent=2/
  // //ASYNC PROMISE
  let url = "http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2";

  var myHeaders = new Headers();
      myHeaders.append("Content-Type", "text/plain");

  const ConvertToJSON = ( response ) => response.json();


  fetch( url, { method: 'POST', header: myHeaders} )
      .then( ConvertToJSON )
      .then( DataHandler );

  function DataHandler( json ){
      console.log( 'json', json );
      json.map( item => {
        let elem = document.createElement('div');
            elem.innerHTML = `
              <div>
                ${item.name}, ${item.age}
              </div>
            `
          document.body.appendChild(elem);
      } )
  }


  // {
  //   loading: false,
  //   loaded: false
  //   data: []
  // }


  // `/api/public/users/5/` => Test 1
  // `/api/public/users/5/friends` => Test 2
