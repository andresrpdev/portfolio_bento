export const languages = {
    es: "Español",
    en: "English",

};

export const defaultLang = "es";

export const ui = {
    en:{
        "head.title": "Welcome to the app",
        "head.subtitle": "This is a subtitle",
        "head.resume": "View resume",
        "skills.title": "Skills",
        "skills":  [
                {
                  category: "Frontend",
                  items: [
                    { icon: "devicon-react-original", name: "React" },
                    { icon: "devicon-javascript-plain", name: "Javascript" },
                    { icon: "devicon-tailwindcss-plain", name: "Tailwind" }
                  ]
                },
                {
                  category: "Backend",
                  items: [
                    { icon: "devicon-nodejs-plain", name: "Node.js" },
                    { icon: "devicon-express-original", name: "Express" },
                    { icon: "devicon-mongodb-plain", name: "MongoDB" },
                    
                  ]
                },
                {
                  category: "Others",
                  items: [
                  { icon: "devicon-postgresql-plain", name: "PostgreSQL" },
                    { icon: "devicon-git-plain", name: "Git" },
                    { icon: "devicon-github-original", name: "GitHub" },
                    { icon: "devicon-supabase-plain", name: "Supabase" },
                    { icon: "devicon-astro-plain", name: "Astro" },
                    
                  ]
                }
              ],
        "contact.title": "Contact",
        "contact.name": "Your name",
        "contact.email": "Your email",
        "contact.message": "Your message",
        "contact.send": "Send message",
        "projects.title": "Projects",
        "projects.github": "View Code",
        "projects.link": "View Demo",
        "projects": [
            {
                title:"ImportedJM", 
                description:"TypeScript is a superset of JavaScript that adds types to the language. TypeScript code is transformed into JavaScript code via the TypeScript compiler or Babel. TypeScript is a statically typed language, which means that you can catch errors and bugs before you even run your code. This is a huge advantage when working on large codebases.",
                tags:["React","Tailwind","Node.js","Express","MongoDB"],
                image:"https://cdn.palbincdn.com/images/blog/gallery/Partes-de-una-pagina-web.png",
                link:"google.com",
                github:"github.com"
            },
            {
                title:"",
                description:"",
                tags:["React","Tailwind","Node.js","Express","MongoDB"], 
                image:"",
                link:"",
                github:""
            }
            ]
    },
    
    es:{
        "head.title": "¡Hola! Soy Andres",
        "head.subtitle": "Desarrollador Full Stack y estudiante de ingeniería",
        "head.resume": "Ver CV",
        "skills.title": "Habilidades",
        "skills":  [
            {
              category: "Frontend",
              items: [
                { icon: "devicon-react-original", name: "React" },
                { icon: "devicon-javascript-plain", name: "Javascript" },
                { icon: "devicon-tailwindcss-plain", name: "Tailwind" }
              ]
            },
            {
              category: "Backend",
              items: [
                { icon: "devicon-nodejs-plain", name: "Node.js" },
                { icon: "devicon-express-original", name: "Express" },
                { icon: "devicon-mongodb-plain", name: "MongoDB" },
                
              ]
            },
            {
              category: "Otros",
              items: [
              { icon: "devicon-postgresql-plain", name: "PostgreSQL" },
                { icon: "devicon-git-plain", name: "Git" },
                { icon: "devicon-github-original", name: "GitHub" },
                { icon: "devicon-supabase-plain", name: "Supabase" },
                { icon: "devicon-astro-plain", name: "Astro" },
                
              ]
            }
          ],
        "contact.title": "Contacto",
        "contact.name": "Tu nombre",
        "contact.email": "Tu email",
        "contact.message": "Mensaje",
        "contact.send": "Enviar Mensaje",
        "projects.title": "Proyectos",
        "projects.github": "Ver Código",
        "projects.link": "Ver Demo",
        "projects": [
            {
                title:"ImportedJM", 
                description:"Trabajo para un cliente en el que importaba productos, con node js realice un scraper para obtener los datos de los productos y un api para poder usarlos en el frontend y calcular el precio final de importacion. Ademas de tener un modo manual",
                tags:["React","Tailwind","Node.js","Express","MongoDB"],
                image:"https://cdn.palbincdn.com/images/blog/gallery/Partes-de-una-pagina-web.png",
                link:"google.com",
                github:"github.com"
            },
            {
                title:"",
                description:"",
                tags:["React","Tailwind","Node.js","Express","MongoDB"], 
                image:"",
                link:"",
                github:""
            }
            ]
    }
};