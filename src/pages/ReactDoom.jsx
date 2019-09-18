import React, { Component, useRef, useEffect } from 'react';
import Dos from 'js-dos';
import Game from '../games/digger.zip';
require('js-dos');

// const Dos = DosFactory;

//canvas = HTMLCanvasElement
//options = DosOptions = {cycles: , onprogress: , onerror: , log: , wdosboxurl: }
//Dos(canvas, options) returns promise
//fs = DosRuntime.fs = [DosFS], dosbox filesystem API
//main = DosRuntime.main = DosMainFn, actually starts the dosbox function (Dos "Main()" Function)
//promise.then(onFulfilled[, onRejected]);


const ReactDOOM = () => {
  return <DOOM />;
}

const DOOM = () => {
  const ref = useRef(HTMLCanvasElement);
  useEffect(()=> {
    if(ref !== null) {
      // Dos(ref.current, {cycles: 1000}).ready((fs, main) => fs.extract(Game).then(main(["-c", "DIGGER.COM"])))
    }
  }, [ref]);
  
  return <canvas ref={ref}></canvas>;
}

//     useEffect(() => {
//       //if there is a canvas
//       if(ref !== null) {
//         //Dos returns a promise
//         const ciPromise = Dos(ref.current, {wdosboxUrl: "/wdosbox.js", cycles: 1000})
//         .then(
//         //onFulfilled  
//         (runtime) =>
//         //If fs extracts digger.zip 
//         {return runtime.fs.extract({Game}).then(
//           //onFulfilled  
//           () =>
//             //run DIGGER.COM file with -c flag (whatever that does)
//             {return runtime.main(["-c", "DIGGER.COM"])}
//           //no onRejected, do nothing on rejection, and move on (wise life lesson)  
//           );
//         }
//         //no onRejected, do nothing on rejection, and move on
//         );
      
//       //if shit don't work, gtfo?
//       return () => {ciPromise.then(ci => ci.exit());};
//       }
//     }, [ref])
    
//     }

export default ReactDOOM;

//view-source:https://js-dos.com/games/doom.exe.html
//https://js-dos.com/