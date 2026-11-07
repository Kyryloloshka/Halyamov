import codinityImg from "@/assets/projects/codinity.webp";
import sckpiImg from "@/assets/projects/sckpi.webp";
import ticTacToeImg from "@/assets/projects/tic-tac-toe.webp";
import weatherImg from "@/assets/projects/weather.webp";
import communiImg from "@/assets/projects/communi.webp";
import tohachatImg from "@/assets/projects/tohachat.webp";
import portfolioImg from "@/assets/projects/portfolio.webp";

export const projects = [
  {
    id: 0,
    title: "Codinity Labs",
    desc: "A modern educational platform that revolutionizes programming education through automated code assessment, real-time feedback, and comprehensive student progress tracking. Built with microservices architecture for scalability and maintainability.",
    img: codinityImg,
    link: "https://github.com/Kyryloloshka/CodinityLabs",
    linkGh: "https://github.com/Kyryloloshka/CodinityLabs",
  },
  {
    id: 1,
    title: "Student Council Website",
    desc: "This is a student council website built with Next.js. It allows students to view upcoming events, import schedules to their calendar, join student council, and more.",
    img: sckpiImg,
    link: "https://sc.kpi.ua/",
    linkGh: "https://github.com/srkpi/sc-kpi-web",
  },
  {
    id: 2,
    title: "3D tic tac toe",
    desc: "Innovative 3D tic tac toe game built with Three.js and Next.js. It's a fun game to play with friends and family.",
    img: ticTacToeImg,
    link: "https://ddd-tic-tac-toe.vercel.app/",
    linkGh: "https://github.com/Kyryloloshka/3D-Tic-Tac-Toe",
  },
  {
    id: 3,
    title: "Weather Notification",
    desc: "Weather Forecast Microservices is a NestJS-based microservices system that provides automated weather notifications via email subscriptions, allowing users to receive hourly or daily weather updates for their chosen cities through a scheduled email service, with weather data fetched from multiple providers and managed through a subscription workflow system, all containerized with Docker and communicating via gRPC.",
    img: weatherImg,
    link: "https://github.com/Kyryloloshka/WeatherNotify",
    linkGh: "https://github.com/Kyryloloshka/WeatherNotify",
  },
  {
    id: 4,
    title: "Communi Chat App",
    desc: "This is a chat application built with Next.js and Firebase. It allows users to chat with friends and family.",
    img: communiImg,
    link: "https://communi-ochre.vercel.app/",
    linkGh: "https://github.com/Kyryloloshka/Communi",
  },
  {
    id: 5,
    title: "Tohachat App",
    desc: "This is a social media application built with Next.js and Appwrite database. That allows users to post messages and images, and also like and comment on posts, edit their profile, and more.",
    img: tohachatImg,
    link: "https://tohachat.vercel.app/",
    linkGh: "https://github.com/Kyryloloshka/Tohachat",
  },
  {
    id: 6,
    title: "This Portfolio",
    desc: "This portfolio is built with Next.js, Framer Motion and Gsap. It's a responsive and interactive portfolio that showcases my works and skills.",
    img: portfolioImg,
    link: "/",
    linkGh: "https://github.com/Kyryloloshka/Halyamov",
  },
];
