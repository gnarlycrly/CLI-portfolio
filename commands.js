/* commands.js — local data only */

const DATA = {
  name: "Carly Jazwin",
  email: "cjazwin@asu.edu",
  about:
    "Hi! I’m Carly,  a CS student and software engineer who loves building things that are useful, intuitive, and a little bit fun. I work across full-stack, iOS, and machine learning, and I’m always excited about turning ideas into real products.",
  website: "https://about-carly-jazwin.netlify.app/",

  skills: [
    { id: "s1", title: "Python" },
    { id: "s2", title: "C/C++" },
    { id: "s3", title: "React" },
    { id: "s4", title: "Node.js" },
    { id: "s5", title: "PyTorch" }
  ],

  projects: [
    {
      id: "p1",
      title: "Carly's Run Club",
      //image: "./assets/projects/pokedoro.png",
      description: "Full-stack web application for organizing local runs in Tempe, featuring HTML/CSS/Javascript frontend, Node.js (AWS Lambda) Backend, MySQL (RDS) + DynamoDB Database, & Hosted with S3 + CloudFront"
",
      url: "https://d2u9ocgx4ho4qa.cloudfront.net/"
    },
    {
      id: "p1",
      title: "Pokédoro Timer",
      //image: "./assets/projects/pokedoro.png",
      description: "Pomodoro productivity app built with React, Node.js, and Electron. Features Pokémon-inspired pixel-art UI, customizable work/break intervals",
      url: "https://github.com/gnarlycrly/pokedoro-timer"
    },
    {
      id: "p1",
      title: "Byte & Slice",
     // image: "./assets/projects/pokedoro.png",
      description: "Full-stack web application for pizza delivery, featuring an HTML/CSS frontend, Flask backend, and PostgreSQL database. Supports location-based ordering, custom toppings, and persistent order management.",
      url: "https://github.com/gnarlycrly/byte-and-slice"
    },
    
  ],

  achievements: [
    {
      id: "a1",
      title: "Dean’s List",
      description: "ASU Dean’s List 2022–2025",
      url: ""
    }
    // add more...
  ],

  contacts: [
    { contactTitle: "email",    contactPlace: "cjazwin@asu.edu" },
    { contactTitle: "github",   contactPlace: "@gnarlycrly" },
    { contactTitle: "linkedin", contactPlace: "carly-jazwin" }
  ]
};

const website = DATA.website;

const getAbout = () =>
  `<div class="command-result"><p class="about-text">${DATA.about}</p></div>`;


const getProjects = () => {
  let html = `<div class="command-result"><table class="data-table">`;
  DATA.projects.forEach(p => {
    html += `
      <tr>
        <th class="data-name-th">
          ${p.url ? `<a href="${p.url}" target="_blank" class="data-link">${p.title}</a>` : `${p.title}`}
        </th>
        <td class="data-description-td">${p.description || ""}</td>
      </tr>`;
  });
  html += `</table></div>`;
  return html;
};

const getAchievements = () => {
  let html = `<div class="command-result"><table class="data-table">`;
  DATA.achievements.forEach(a => {
    html += `
      <tr>
        <th class="data-name-th">
          ${a.url ? `<a href="${a.url}" target="_blank" class="data-link">${a.title}</a>` : `${a.title}`}
        </th>
        <td class="data-description-td">${a.description || ""}</td>
      </tr>`;
  });
  html += `</table></div>`;
  return html;
};

const getContact = () => {
  let html = `<div class="command-result"><dl>`;
  DATA.contacts.forEach(item => {
    html += `<dt class="data-dt">
      <span class="cmd-text">${item.contactTitle}</span>
      <span class="desc-text">${item.contactPlace}</span>
    </dt>`;
  });
  html += `</dl></div>`;
  return html;
};

const getHelp = () => {
  const availableCommands = [
    { command: "about",        description: "show about section" },
    { command: "skills",       description: "list skills" },
    { command: "projects",     description: "list recent projects" },
    { command: "achievements", description: "show achievements" },
    { command: "website",      description: "open portfolio site" },
    { command: "contact",      description: "show contact info" },
    { command: "clear",        description: "clear terminal output" },
    { command: "cmd/ctrl + k", description: "shortcut to clear terminal" },
  ];

  const PAD = Math.max(...availableCommands.map(c => c.command.length)) + 4;

  let renderData = `<div class="command-result"><pre class="help-pre">`;
  availableCommands.forEach(({ command, description }) => {
    const cmdPadded = command.padEnd(PAD, " ");
    renderData += `<span class="cmd-text">${cmdPadded}</span><span class="desc-text">${description}</span>\n`;
  });
  renderData += `</pre></div>`;
  return renderData;
};


const getWebsite = () =>
  `<div class="command-result">Redirecting you to my portfolio website <a href="${website}" target="_blank" class="data-link">${website}</a> ...</div>`;

const aboutSectionHTML        = getAbout();
const projectsSectionHTML     = getProjects();
const achievementsSectionHTML = getAchievements();
const contactSectionHTML      = getContact();
const helpSectionHTML         = getHelp();
const websiteSectionHTML      = getWebsite();
const skillsSectionHTML =
  `<div class="command-result">
     <div class="margin-bottom flex-column flex-row-gap">
       <p class="message-text"><strong>Skills</strong></p>
       <div><strong>Programming Languages:</strong> Python, C/C++, Java, JavaScript</div>
       <div><strong>Frontend:</strong> HTML, CSS, React</div>
       <div><strong>Backend & APIs:</strong> Node.js (Express), Python Flask, REST</div>
       <div><strong>Databases:</strong> PostgreSQL, SQL</div>
       <div><strong>AI/ML:</strong> PyTorch, TensorFlow, Neural Networks, Computer Vision</div>
       <div><strong>Tools & Platforms:</strong> Git, GitLab CI, Jira, Agile, Unix/Linux (Ubuntu)</div>
     </div>
   </div>`;


export {
  aboutSectionHTML,
  skillsSectionHTML,
  projectsSectionHTML,
  achievementsSectionHTML,
  contactSectionHTML,
  helpSectionHTML,
  website,
  websiteSectionHTML
};
