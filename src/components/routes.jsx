import Skills from "../pages/Skills";
import Hobbies from "../pages/Hobbies";
import Bio from "../pages/Bio";
import Contact from "../pages/Contact";

const routes = [
  {
    path: "/bio",
    main: () => <Bio />
  },
  {
    path: "/skills",
    main: () => <Skills />
  },
  {
    path: "/hobbies",
    main: () => <Hobbies />
  },
  {
    path: "/contact",
    main: () => <Contact />
  }
];
