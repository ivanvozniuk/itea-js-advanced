  /*
    Objects
  */
  // function GenerateRandomNum( q ){
  //   return Math.floor( Math.random() * q);
  // }

  // function GenerateMyObject( name ){

  //     let defaultPopulation = 0;
      
  //     this.name = name;
  //     this.doSmsng = function(){
  //       defaultPopulation++;
  //       console.log('defaultPopulation:', defaultPopulation );
  //     };

  //     this.doTest = function(){
  //       console.log( defaultPopulation * 10);
  //     }
  //     this.population = GenerateRandomNum(10000);

  //     const privateMethod = () => {
  //       console.log('before:', this);
  //       this.name = "new Name!";
  //     }

  //   // function privateMethod() {
  //   //   console.log('before', this);
  //   //   this.name = "new Name!";
  //   // }

  //   this.publicMethod = function( arg ){
  //     if( arg === true){
  //       privateMethod();
  //       console.log('after', this.name);
  //     } else {
  //       console.warn('YOU NOT ALLOWED TO USE THIS METHOD');
  //     }
  //   };

  // }

  // var obj = new GenerateMyObject('Dexter');
  // console.log( obj.defaultPopulation );


  // //     obj.doSmsng();
  // console.log(obj);
  // obj.publicMethod( true );
  // obj.publicMethod();

  //     // console.log( obj );
  //     var testo = new GenerateMyObject('Test');
  //         testo.doSmsng();
  //         testo.publicMethod(true)
	const obj = {
		value: "value",
		func: () => console.log(this)
	}

	obj.func();