const projectArea = document.querySelector("#projects #info");
const skillArea = document.querySelector("#skill-area");
const projects = [
    {
        image: "img/portfolio.png",
        name: "Simple Portfolio Website",
        description: "Simple and responsive portfolio site for desktop mobile and tablet.",
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
    },
    {
        image: "img/best-buy.png",
        name: "Mock Best Buy Site",
        description: "Look for your dream technology on our once in a year Black Friday Sales!",
        skills: [
            "Responsive Design",
            "React / JSX",
            "JavaScript"
        ],
        tools: [
            "Arrays",
            "Objects",
            "UI"
        ],
        link: "https://brian-hornbrook.github.io/Best-Buy/"
    }
]



const displayProjects = () => {
    projects.forEach(project => {
        const skills = project.skills.join(", ");
        const tools = project.tools.join(", ");

        projectArea.innerHTML += `
        <div class="area" >
            <div class="image-area" >
                <img src="${project.image}" alt="project image">
            </div>
            <h4>${project.name}</h4>
            <div class="project-description-area" >
                <p>${project.description}</p>
            </div>
            <div class="tools">
                <p><strong>Skills:</strong> ${skills}</p>
                <p><strong>Tools:</strong> ${tools}</p>
            </div>
            <div class="live-page-button">
                <a href="${project.link}" target="_blank">
                    <button>Live Page</button>
                </a>
            <div>
        </div>
        `
    });
}

const displaySkills = () => {
    skillArea
}

displayProjects();
displaySkills();