import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";
import projectFour from "../assets/project-4.jpeg";

const projects = {
  1: {
    title: "Oreegi Tech Website",
    image: projectOne,
    description: (
      <>
        <p>
          A modern official website for Oreegi Technologies built with reactjs, Tailwindcss and Material UI.
        </p>
      </>
    ),
    github: "https://github.com",
    website: "https://oreegi.com",
  },
  2: {
    title: "Trilopay",
    image: projectTwo,
    description: (
      <>
        <p>
          A fullstack react-native mobile banking application that mimics real transactions - i.e users can transfer and receive tokens(money).
        </p>
      </>
    ),
    github: "https://github.com/Odikanwa/TriloPay",
    // demo: "https://netlify.com",
  },
  3: {
    title: "Wine Delivery App",
    image: projectThree,
    description: (
      <>
        <p>
        A full-stack ecommerce site for wine sales. Built with Sanity.io headless CMS for backend and reactjs + Tailwindcss for frontend. Stripe was integrated as the payment gateway.
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://oreegi.vercel.app/",
  },
  4: {
    title: "E-voting Ststem with FingerPrint Auth.",
    image: projectFour,
    description: (
      <>
        <p>
        A permissioned system that allows the registeration of voters and election administrators for a set election. Authentication is two way: passwords and fingerprints. Election results are published through a linked online portal for easy access to the voters. The system heavily relied on .Net technologies and tools for its development and deployment.
        </p>
      </>
    ),
    github: "https://github.com/Odikanwa/eVoting-System_desktop",
    // demo: "https://oreegi.vercel.app/",
  },
};

export default projects;
