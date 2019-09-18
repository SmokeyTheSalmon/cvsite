import React, { useRef, useEffect } from "react";
import Game from "../games/doom.zip";

import { DosFactory } from "js-dos";
require("js-dos");
const Dos = (window as any).Dos as DosFactory;


const JsDos: React.FC = () => {
    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (ref !== null) {
            const ciPromise = Dos(ref.current as HTMLCanvasElement, {wdosboxUrl: "https://js-dos.com/6.22/current/wdosbox.js"}).then((runtime) => {
                return runtime.fs.extract(Game).then(() => {
                    return runtime.main(["-c", "Doom.exe"]);
                });
            });

            return () => {
                ciPromise.then(ci => ci.exit());
            };
        }
    }, [ref]);

    return <canvas ref={ref} />;
}

export default JsDos;