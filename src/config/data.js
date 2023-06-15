import shopIcon from "../images/ecommerce_shop.png";
import portfolioIcon from "../images/project_daniela_portfolio.png";
import diabloIcon from "../images/2.png";

export const SKILLS = ["React", "JavaScript", "Ruby on Rails", "HTML", "CSS", "GIT", "PostgreSQL", "Elasticsearch"];

export const PROJECTS = [
    {title: "Portfolio Site", image: portfolioIcon, description: "A UI/UX portfolio website, showcasing seamless design and intuitive user experiences.", link: "http://daniela-abramov.com", tags: ["ReactJS"]},
    {title: "E-commerce shop app", image: shopIcon, description: "", link: "https://github.com/zilberberg/Shop", tags: ["ReactJS", "Node", "MongoDB"]},
    {title: "Diablo Game", image: diabloIcon, description: "Unleash your powers in my Unity3D Diablo-like game project—an immersive and action-packed adventure awaits.", link: "https://github.com/zilberberg/DiabloGame", tags: ["Unity3D", "C#"],
    video: "https://www.youtube.com/embed/60xRVn4NOHs?autoplay=1&mute=1&playlist=60xRVn4NOHs&loop=1"},
]