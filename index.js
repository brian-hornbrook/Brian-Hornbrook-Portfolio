const projectArea = document.querySelector("#projects-info");
const skillArea = document.querySelector("#skill-area");
const projects = [
    {
        image: "img/portfolio.png",
        name: "Simple Portfolio Website",
        description: "Simple and responsive portfolio site for desktop mobile and tablet.",
        url: "https://brian-hornbrook.github.io/portfolio/",
        skills: [
            "FTP & Web Hosting",
        ],
        tools: [
            "FTP Client",
            "Photoshop",
            "Text editors"
        ],
        link: "https://brian-hornbrook.github.io/portfolio/"
    },
    {
        image: "img/unplugged.png",
        name: "Unplugged",
        description: "A getaway camp where you can relax and recharge for a better, more productive programmer!",
        url: "https://brian-hornbrook.github.io/Unplugged/",
        skills: [
            "Responsive Typography",
            "Media Queries",
            "Flexbox"
        ],
        tools: [
            "GitHub",
            "Photoshop"
        ],
        link: "https://brian-hornbrook.github.io/Unplugged/"
    },
    {
        image: "img/github gallery.png",
        name: "GitHub Repo Gallery",
        description: "Displays my GitHub Repos.",
        url: "https://brian-hornbrook.github.io/github-repo-gallery/",
        skills: [
            "Manipulate the DOM",
            "Version control",
            "APIs"
        ],
        tools: [
            "GitHub"
        ],
        link: "https://brian-hornbrook.github.io/github-repo-gallery/"
    },
    {
        image: "img/super sticky notes.png",
        name: "Super Sticky Notes",
        description: "Create, edit and delete beautifully designed sticky notes!",
        url: "https://brian-hornbrook.github.io/Super-Sticky-Notes/",
        skills: [
            "React / JSX",
            "JavaScript"
        ],
        tools: [
            "Arrays",
            "Objects",
            "State",
            "UI"
        ],
        link: "https://brian-hornbrook.github.io/Super-Sticky-Notes/"
    }
]



const displayProjects = () => {
    projects.forEach(project => {
        const skills = project.skills.join(", ");
        const tools = project.tools.join(", ");

        projectArea.innerHTML += `
        <img src="${project.image}" alt="project image">
        <h4>${project.name}</h4>
        <p class="description">${project.description}</p>
        <div class="tools">
            <p><strong>Skills:</strong> ${skills}</p>
            <p><strong>Tools:</strong> ${tools}</p>
        </div>
        <div class="live-page-button">
            <a href="${project.link}" target="_blank">
                <button>Live Page</button>
            </a>
        <div>
        `
    });
}

const displaySkills = () => {
    skillArea
}

displayProjects();
displaySkills();