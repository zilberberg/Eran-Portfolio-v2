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
    {title: "Portfolio Site", image: portfolioIcon, description: "A UI/UX portfolio website, showcasing seamless design and intuitive user experiences.", link: "http://daniela-abramov.com", tags: ["ReactJS"]},
    {title: "E-commerce shop app", image: shopIcon, description: "", link: "https://github.com/zilberberg/Shop", tags: ["ReactJS", "Node", "MongoDB"]},
    {title: "Diablo Game", image: diabloIcon, description: "Unleash your powers in my Unity3D Diablo-like game project—an immersive and action-packed adventure awaits.", link: "https://github.com/zilberberg/DiabloGame", tags: ["Unity3D", "C#"],
    video: "https://www.youtube.com/embed/60xRVn4NOHs?autoplay=1&mute=1&playlist=60xRVn4NOHs&loop=1"},
]