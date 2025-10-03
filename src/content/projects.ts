import urlShorten from "../../public/projects/url_shorten.png";

export interface Project {
     title: string;
     image: ImageMetadata;
     link: string;
     preview: string | undefined;
     status: string;
     desc: string;
     technologies: string[];
}

export const PROJECTS: Project[] = [
     {
          title: "ShortenURL",
          image: urlShorten as ImageMetadata,
          link: "https://github.com/JoseRefugio2305/url_shortener",
          preview: undefined,
          status: "Desarrollado",
          desc: "Aplicación full-stack que permite a los usuarios registrarse, iniciar sesión, acortar y gestionar sus enlaces acortados de forma segura (actualizar, eliminar y consultar estadísticas).",
          technologies: ["React", "TailwindCSS", "NodeJS", "Vite", "Typescript", "Python", "Flask", "MySQL"],
     },
];