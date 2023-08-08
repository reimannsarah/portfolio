import madLibs from '../assets/imgs/mad-libs.png';
import rsvp from '../assets/imgs/bday-RSVP.png';
import pcWebsite from '../assets/imgs/pc-website.png';
import mouseMingle from '../assets/imgs/mouse-mingle.png';


const projects: { name: string, src: string, description: string, url: string } [] = [
  {
    name: 'Mad Libs',
    src: madLibs,
    description: "App that allows users to log in to their account, create mad libs and fill out available mad libs. Quizzes and results are saved to a Firestore Database and listed on the home page. Built with React using Firebase/Firestore",
    url: "https://github.com/reimannsarah/mad-libs.git"
  },

  {
    name: "Birthday RSVP",
    src: rsvp,
    description: "Webpage that allows the  user to input an amount of free time and desired activities or chores. The user can then use the app to budget their free time efficiently. Built with JavaScript and styled with CSS.",
    url: "https://sarah-reimann-birthday.web.app/"
  },

  {
    name: "Parenting Consulting Website",
    src: pcWebsite,
    description: "A personal website for a parenting consulting business. Built with Typescript and  React.",
    url: "https://lucy-grein-pc.web.app/"
  },

  {
    name: "Mouse Mingle",
    src: mouseMingle,
    description: "Group project from Epicodus to practice C#. This is a dating website for rodents. There is an API that makes use of a MySQL database. A use can create a profile and save their data to the database. There is a client side with a front end also built with C#.",
    url: "https://github.com/reimannsarah/MouseMingleMonoRepo.git"
  },
  
];

export default projects;