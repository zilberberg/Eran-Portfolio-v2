import shopIcon from "../images/ecommerce_shop.png";
import portfolioIcon from "../images/project_daniela_portfolio.png";
import diabloIcon from "../images/2.png";

import ReactJS from "../images/stack/React.svg";
import Ruby from "../images/stack/Ruby.svg";
import JS from "../images/stack/JS.svg";
import HTML from "../images/stack/HTML.svg";
import CSS from "../images/stack/CSS.svg";
import Android from "../images/stack/Android.svg";
import Java from "../images/stack/Java.svg";
import Unity3D from "../images/stack/Unity3D.svg";
import CSharp from "../images/stack/CSharp.svg";
import PostgreSQL from "../images/stack/Postgres.svg";
import Elasticsearch from "../images/stack/ES.svg";
import Heroku from "../images/stack/Heroku.svg";
import MongoDB from "../images/stack/MongoDB.svg";
import NodeJS from "../images/stack/Node.svg";

export const SKILLS = [
    {title: "ReactJS", icon: ReactJS},
    {title: "Ruby on Rails", icon: Ruby},
    {title: "JavaScript", icon: JS},
    {title: "HTML", icon: HTML},
    {title: "CSS", icon: CSS},
    {title: "PostgreSQL", icon: PostgreSQL},
    {title: "Elasticsearch", icon: Elasticsearch},
    {title: "Android", icon: Android},
    {title: "Java", icon: Java},
    {title: "Unity3D", icon: Unity3D},
    {title: "C#", icon: CSharp},
    {title: "Heroku", icon: Heroku},
    {title: "MongoDB", icon: MongoDB},
    {title: "NodeJS", icon: NodeJS},
]

export const PROJECTS = [
    {title: "Portfolio Site", image: portfolioIcon, dev: "web development" ,description: "Personal website for a UI/UX designer.", link: "http://daniela-abramov.com", tags: ["ReactJS"]},
    {title: "E-commerce shop app", image: shopIcon, dev: "full stack development", description: "E-commerve shop app with back end", link: "https://github.com/zilberberg/Shop", tags: ["ReactJS", "Node", "MongoDB"]},
    {title: "Diablo Game", image: diabloIcon, dev: "game development", description: "Diablo-like game project in Unity3D", link: "https://github.com/zilberberg/DiabloGame", tags: ["Unity3D", "C#"],
    video: "https://www.youtube.com/embed/60xRVn4NOHs?autoplay=1&mute=1&playlist=60xRVn4NOHs&loop=1"},
]

export const LINKEDIN_LINK = "https://www.linkedin.com/in/eran-zilberberg/";
export const GITHUB_LINK = "https://github.com/zilberberg";

export const EXPERIENCE_TIMELINE = [
    {
        position: "Full Stack Developer",
        company: "Phytech",
        location: "Kfar Saba, Israel",
        dates: "2021 - present",
        description: `
            Full Stack Developer at a start-up focused on developing technology to help growers
            manage and optimize production by keeping them connected to their plants.
            Developed front-end web applications using ReactJS, utilizing yarn package manager and
            webpack.
            Worked as a back-end developer using Ruby on Rails and PostgreSQL.
        `
    },
    {
        position: "Android Developer",
        company: "RenewSenses",
        location: "Jerusalem, Israel",
        dates: "2020",
        description: `
            Android Developer at a start-up dedicated to developing a smart cane for the visually
            impaired, utilizing machine learning for real-time object detection.
            Employed technologies such as Firebase, Tesseract for English and Hebrew OCR,
            TensorFlow as a ML platform, and OpenCV for image manipulation.
        `
    },
    {
        position: "Full Stack Web Developer",
        company: "SafeDK",
        location: "Herzeliya, Israel",
        dates: "2018 - 2019",
        description: `
            Full Stack Web Developer at a start-up focused on analyzing, monitoring, and optimizing
            third-party SDKs.
            Developed front-end applications using ReactJS, utilizing webpack, Babel, and npm.
            Worked as a back-end developer using Ruby on Rails, with experience in PostgreSQL,
            Elasticsearch, and AWS.
        `
    },
]