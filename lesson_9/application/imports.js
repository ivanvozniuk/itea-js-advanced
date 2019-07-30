  /*
    import defaultExport from "module-name";
    import * as name from "module-name";
    import { export } from "module-name";
    import { export as alias } from "module-name";
    import { export1 , export2 } from "module-name";
    import { export1 , export2 as alias2 } from "module-name";
    import defaultExport, * as name from "module-name";
    import "module-name";
  */
  /*
    import defaultExport from "module-name";
  */

  // import Func from './modules/myFunction';
  // Func();

  // import DefaultVariavle, { KEY, TO} from './modules/';
  // console.log( DefaultVariavle, KEY, TO );

    import { KEY as MyValue } from './modules';
    console.log( 'MyValue', MyValue );

  // import Classes from './classes';
  //
  // console.log( Classes );

  import { User, mObj, mArray as ladsfjladfljkaflkj } from './modules/combined'; // 15kb
  console.log( User, mObj, ladsfjladfljkaflkj);

  let Butch = new User('Butch');
  console.log( Butch );



  // import * as Modules from './modules';

  //
  // export default "Default export string";
