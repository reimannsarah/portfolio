import madLibs from '../assets/imgs/mad-libs.png';
import rsvp from '../assets/imgs/bday-RSVP.png';
import pcWebsite from '../assets/imgs/pc-website.png';
import mouseMingle from '../assets/imgs/mouse-mingle.png';
import prioritime from '../assets/imgs/prioritime.png';
import currency from '../assets/imgs/currency.png';
import galactic from '../assets/imgs/galactic.png';


const projects: { name: string, src: string, description: string, techStack:string, url: string } [] = [
  {
    name: 'Mad Libs',
    src: madLibs,
    description: "App that allows users to log in to their account, create mad libs and fill out available mad libs. Quizzes and results are saved to a Firestore Database and listed on the home page. Built with React using Firebase/Firestore",
    techStack: "JavaScript | JSX | CSS | | React | Firebase/Firestore | Webpack | Node.js",
    url: "https://github.com/reimannsarah/mad-libs.git"
  },

  {
    name: "Birthday RSVP",
    src: rsvp,
    description: "Webpage that allows the  user to input an amount of free time and desired activities or chores. The user can then use the app to budget their free time efficiently. Built with JavaScript and styled with CSS.",
    techStack: "React | Javascript | JSX | webpack | Node.js | CSS | MySQL",
    url: "https://sarah-reimann-birthday.web.app/"
  },

  {
    name: "Parenting Consulting Website",
    src: pcWebsite,
    description: "A personal website for a parenting consulting business. Built with Typescript and  React.",
    techStack: "Typescript | TSX | Javascript | Vite | Node.js | CSS | Firebase",
    url: "https://lucy-grein-pc.web.app/"
  },

  {
    name: "Mouse Mingle",
    src: mouseMingle,
    description: "Group project from Epicodus to practice C#. This is a dating website for rodents. There is an API that makes use of a MySQL database. A use can create a profile and save their data to the database. There is a client side with a front end also built with C#.",
    techStack: "C# | .NET | ASP.NET Core | MVC | Entity Framework Core | EF Core Migrations | Swashbuckle | Swagger | MySQL | RestSharp",
    url: "https://github.com/reimannsarah/MouseMingleMonoRepo.git"
  },

  {
    name: "Prioritime",
    src: prioritime,
    description: "Group project from Epicodus. This is an app where you can enter the amount of free time you have on a given day and then split that up into 15 minute blocks and assign the time to various activities.",
    techStack: "HTML | CSS | Javascript | Webpack | npm",
    url: "https://github.com/reimannsarah/prioritime.git"
  },

  {
    name: "Currency Exchanger",
    src: currency,
    description: "An application where a user can exchange currency rates between 160 different currencies.",
    techStack: "HTML | Javascript | CSS | Webpack | npm",
    url: "https://github.com/reimannsarah/currency-exchanger.git"
  },

  {
    name: "Super Galactic Age Calculator",
    src: galactic,
    description: "Calculate your age and the time between your current age and a past or future age depending on the solar years of a few different planets.",
    techStack: "Javascript | HTML | CSS Webpack | npm",
    url: "https://github.com/reimannsarah/super-galactic-age-calculator.git"
  },
  
];

export default projects;