import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Nicolás",
    lastName: "González",
    initials: "NG", // the example uses first and last, but feel free to use three or more if you like.
    position: "Desarrollador Full Stack",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🔥',
            text: 'Siempre Positivo'
        },
        {
            emoji: '🌎',
            text: 'Nacionalidad Colombia'
        },
        {
            emoji: "💼",
            text: "Egresado de HENRY como Desarrollador Web Full Stack "
        },
        {
            emoji: "📧",
            text: "nicogr300804@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://web.facebook.com/nicolas.gonzalezrodriguez.9809",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/ngr_0110/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Nicolas300804",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/nicolas-gonz%C3%A1lez-rodr%C3%ADguez-318880253?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BqKcxFS%2FnRbqngwrzZs7wbw%3D%3D",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/Nicolas300804",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hola mi nombre es Nicolás González Rodríguez, Mi interés hacia la programación web fue gracias a mi curiosidad por descubrir la complejidad que estas contenían haciendo que cada vez mas me fuese agradando el desarrollo web, es por ello que me gustaría poder compartir mis conocimientos en un entorno de trabajo, poder sembrar mi experiencia a los demás es una gran motivación para seguir adelante.",
    skills:
        {
            proficientWith: ['Javascript', 'React', 'Git', 'Github', 'Bootstrap', 'HTML5', 'CSS3', 'Redux'],
            exposedTo: ['nodejs', 'Axios', 'Express']
        }
    ,
    hobbies: [
        {
            label: 'Jugar Videojuegos',
            emoji: '🎮'
        },
        {
            label: 'Navegar por internet',
            emoji: '💻'
        },
        {
            label: 'Ver Peliculas',
            emoji: '🎥'
        },
        {
            label: 'Construir',
            emoji: '🧩'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Proyecto Pokémon",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/Nicolas300804/PI-Pokemon-v2", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "El Bodegón de Tony",
            live: "https://el-bodegon-cliente-local.vercel.app/",
            source: "https://github.com/LautyFarias247/EL-BODEGON-CLIENTE-LOCAL",
            image: mock2
        },
        
    ]
}