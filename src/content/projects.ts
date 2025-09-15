import svgl from "../../public/svgl.png";
import stockin from "../../public/stockin.png";
import moviesfordevs from "../../public/moviesfordevs.png";
import velez from "../../public/velez.png";

interface Project {
     title: string;
     image: ImageMetadata;
     link: string;
     preview: string;
     status: string;
     technologies: string[];
}

export const PROJECTS: Project[] = [
     // {
     //      title: "MoviesForDevs",
     //      image: moviesfordevs as ImageMetadata,
     //      link: "https://github.com/gothsec/MoviesForDevs",
     //      preview: "https://movies-for-devs.vercel.app",
     //      status: "Deployed",
     // },
     // {
     //      title: "StockIn",
     //      image: stockin as ImageMetadata,
     //      link: "https://github.com/gothsec/stockin-demo",
     //      preview: "https://stockin-demo.vercel.app",
     //      status: "On Development",
     //      technologies: ["React", "TailwindCSS", "NodeJS", "Express", "MongoDB"],
     // },
     // {
     //      title: "Svgl.app",
     //      image: svgl as ImageMetadata,
     //      link: "https://github.com/pheralb/svgl",
     //      preview: "https://svgl.app",
     //      status: "Contributor",
     //      technologies: ["React", "TailwindCSS", "NodeJS", "Express", "MongoDB"],
     // },
     // {
     //      title: "Rifas Velez Web",
     //      image: velez as ImageMetadata,
     //      link: "https://github.com/Buga-Software/rifasvelez-web",
     //      preview: "https://www.rifasvelez.com",
     //      status: "Deployed",
     //      technologies: ["React", "TailwindCSS", "NodeJS", "Express", "MongoDB"],
     // },

];