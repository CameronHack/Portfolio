import ARVDesktop from '/src/assets/ARVDesktop.png';
import VoteWaveDesktop from '/src/assets/VoteWaveDesktop.png';

const projects = [
    {
        id: 1,
        title: "ARV",
        description: "",
        image: {ARVDesktop},
        url: "https://cameronhack.github.io/ARV/",
        github: "https://github.com/CameronHack/ARV",
        tags: ["Bootstrap", "Bing maps", "AirLabs Flight Tracker"]
    },
    {
        id: 2,
        title: "VoteWave",
        description: "",
        image: {VoteWaveDesktop},
        url: "https://damp-beach-24784-675a670756cd.herokuapp.com/",
        github: "https://github.com/brianmyer/votewave",
        tags: ["Handlebars", "Node", "Express", "MySQL", "Tailwind", "Chart.js"]
    },
]

export default projects