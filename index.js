const projectArea = document.querySelector("#projects #info");
const skillArea = document.querySelector("#skill-area");
const projects = [
    {
        image: "img/super sticky notes.png",
        name: "Super Sticky Notes",
        description: "Type a beautifully designed sticky note, refresh and it's still there! Also you can modify and delete your notes.",
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
        description: "Want a new piece of cool tech, look no further! Site is layed out easy to find what you are looking for.",
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
    },
    {
        image: "img/github gallery.png",
        name: "GitHub Repo Gallery",
        description: "Want to see the actual code for all of my projects? The site is pulling data from GitHub and displaying it easy to see!",
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
        image: "img/unplugged.png",
        name: "Unplugged",
        description: "Burned out at your job. Easily navigate this site to find out how to relax.",
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
        image: "img/portfolio.png",
        name: "Simple Portfolio Website",
        description: "This simple portfolio site works on mobile tablet and desktop.",
        skills: [
            "FTP & Web Hosting",
        ],
        tools: [
            "FTP Client",
            "Photoshop",
            "Text editors"
        ],
        link: "https://brian-hornbrook.github.io/portfolio/"
    }
]



const displayProjects = () => {
    projects.forEach(project => {
        const skills = project.skills.join(", ");
        const tools = project.tools.join(", ");

        projectArea.innerHTML += `
        <div class="area" >
            <div class="image-area" >
                <a href="${project.link}" target="_blank">
                    <img src="${project.image}" alt="project image">
                </a>

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