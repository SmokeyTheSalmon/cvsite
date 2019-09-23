import React, { useRef, useEffect } from "react";
import Game from "../games/doom.zip";

import { DosFactory } from "js-dos";
require("js-dos");
const Dos = (window as any).Dos as DosFactory;


const JsDos: React.FC = () => {
    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (ref !== null) {
            //TODO: Use local wdosbox
            const ciPromise = Dos(ref.current as HTMLCanvasElement, {wdosboxUrl: "https://js-dos.com/6.22/current/wdosbox.js", cycles: "max"})
            .then((runtime) => {
                return runtime.fs.extract(Game).then(() => {
                    return runtime.main(["-c", "Doom.exe"]);
                });
            });

            return () => {
                ciPromise.then(ci => ci.exit());
            };
        }
    }, [ref]);

    return <div><canvas ref={ref} /></div>;
}

export default JsDos;

//TODO: exit the runtime when Main changes content