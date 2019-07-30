  /*
    Prototypes
  */


  // var testObj = {
  //   someData: 'data',
  //   someValue: 'value'
  // }

  // console.log( 'string', testObj.toString(), String.prototype );

  // var myArray = [1,2,3,4,5];
  //     myArray.push(6);
  //     myArray.map( function(){});

  // console.log( 'array', myArray, Array.prototype)

  // var num = 10.512;
  // console.log( num, num.toFixed(1), Number.prototype );


function talk(){
  console.log('Play sound:', this.sound);
}

var animal = {
  talk,
  du: 'hiiiii',
  color: 'blue'
  // тоже самое что и talk: talk
};

console.log( animal );
var cat = {
  sound: 'meow',
  // color: 'yellow'
};
Object.setPrototypeOf( cat, animal );


console.log( cat );
console.log( cat.color );
console.log( cat.du );

cat.talk();


var dog = {
  sound: 'woof'
};

Object.setPrototypeOf( dog, cat );
console.log(dog, dog.color);

dog.talk();






