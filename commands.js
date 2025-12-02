const DATA = {
  name: "Carly Jazwin",
  email: "cjazwin@asu.edu",
  about:
    "Hi! I’m Carly, a CS student and software engineer who loves building things that are useful, intuitive, and a little bit fun. I work across full-stack, iOS, and machine learning, and I’m always excited about turning ideas into real products.",
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
    title: "$ Carly's Run Club",
    image: "./assets/screenshots/runclub.png",
    description: `
> Serverless RSVP app for local running events in Tempe.
> Built with HTML/CSS/JavaScript and a Node.js AWS Lambda backend.
> Uses API Gateway, MySQL (RDS), and DynamoDB for fast event + RSVP handling.
> Globally deployed on S3 + CloudFront for low-latency performance.

`,
  live: "https://carlys-run-club.com/",
   github: "https://d2u9ocgx4ho4qa.cloudfront.net/"
  },
  {
    id: "p2",
    title: "$ LocalGrounds",
    image: "./assets/screenshots/local.png",
    description:`
> SwiftUI iOS cafe finder using MVVM architecture and real Yelp API data.
> Firebase Auth + Firestore store favorites, notes, and user profiles.
> Integrates OpenAI API to summarize cafe notes with AI-powered sentiment.
> Includes MapKit and live location filtering to show nearby cafes.
      `,
    github: "https://github.com/gnarlycrly/localgrounds",
    imgWidth: "520px"
  },
   {
    id: "p3",
    title: "$ Housing Price Regression MLE",
    image: "./assets/screenshots/housing.png",
    description: `
> Built a full ML pipeline including preprocessing, feature engineering, and time-aware train/test splits.
> Used Great Expectations to validate dataset quality and prevent leakage.
> Trained and optimized an XGBoost regression model using Optuna; tracked metrics with MLflow.
> Packaged the model in Docker and deployed a scalable FastAPI service on AWS ECS Fargate with S3-backed storage.
> Built a Streamlit + Plotly dashboard to visualize predictions, errors, and model performance over time.
`,
  live: "https://housing-ml.carlyjazwin.com/dashboard/", 
   github: "https://github.com/gnarlycrly/ml-housing-regression",
  imgWidth: "260px"

  },
  {
    id: "p4",
    title: "$ Byte & Slice",
    image: "./assets/screenshots/byte.png",
    description:
      `
> Full-stack pizza ordering system with HTML/CSS/JavaScript frontend and Flask backend.
> Built menu selection, custom toppings, and dynamic price calculation.
> Stores orders, customers, and inventory in a PostgreSQL database.
> Includes admin views for reviewing orders and managing order flow.
      `,
    github: "https://github.com/gnarlycrly/byte-and-slice",
    imgWidth: "380px"
  },
  {
    id: "p5",
    title: "$ Pokédoro Timer",
    image: "./assets/screenshots/poke.png",
    description:`
> A desktop Pomodoro productivity app with a nostalgic Pokémon aesthetic, built with React, Node.js, and Electron.
> Features customizable focus and break intervals, animated UI components, and themed sound effects.
> Tracks completed cycles and session history so users can monitor their productivity.
> Uses Electron to package the app into a cross-platform desktop application with local state persistence.

    `,
    github: "https://github.com/gnarlycrly/pokedoro-timer",
    imgWidth: "260px"
  }
],

  achievements: [
    {
    id: "a1",
    title: "Dean’s List",
    description: "ASU Dean’s List (2022–2025)",
    url: ""
  },
  {
    id: "a2",
    title: "NSF IRES Research Fellow",
    description: "Selected for competitive international ML research program in Dublin (2024)",
    url: ""
  },
  {
    id: "a3",
    title: "Research Presentation",
    description: "Presented biomaterial ML results at NSF IRES International Symposium",
    url: ""
  },
  {
    id: "a4",
    title: "Imaging Lab Research",
    description: "Contributed to CLIP-regularized Restormer/DATUM image reconstruction pipeline",
    url: ""
  },
  {
    id: "a5",
    title: "FIRST Robotics",
    description: "Three years competitive FTC/FRC robotics experience",
    url: ""
  }
    
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
  let html = `<div class="command-result">`;

  DATA.projects.forEach(p => {
    html += `
      <div class="project-card">
        <h3 class="project-title">${p.title}</h3>

        <div class="project-links">
    ${p.github ? `<a href="${p.github}" target="_blank" class="data-link">&lt;GitHub&gt;</a>` : ""}
    ${p.live ? `<a href="${p.live}" target="_blank" class="data-link">&lt;Live&nbsp;Site&gt;</a>` : ""}

    </div>


        <img 
          src="${p.image}" 
          class="project-image"
          style="width: ${p.imgWidth || '400px'}"
        />

        <p class="project-description">${p.description}</p>
      </div>
    `;
  });

  html += `</div>`;
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
const skillsSectionHTML = `
<div class="command-result">
  <pre class="skills-pre">
<span class="skill-label"> Languages:</span>          <span class="skill-value">Python, JavaScript, TypeScript, C/C++, Java, SQL, NoSQL</span>
<span class="skill-label"> Web:</span>                <span class="skill-value">React, Next.js, Node.js, HTML, CSS</span>
<span class="skill-label"> Mobile:</span>             <span class="skill-value">Swift, SwiftUI (MVVM), Firebase</span>
<span class="skill-label"> Databases:</span>          <span class="skill-value">PostgreSQL, MySQL, DynamoDB, Firestore</span>
<span class="skill-label"> Machine Learning:</span>   <span class="skill-value">PyTorch, TensorFlow, Hugging Face, XGBoost, Optuna, MLflow</span>
<span class="skill-label"> Cloud & DevOps:</span>     <span class="skill-value">AWS (Lambda, API Gateway, S3, RDS, DynamoDB, ECS), Docker, Git</span>
<span class="skill-label"> Tools:</span>              <span class="skill-value">GitLab CI/CD, Linux, Bash, Jira</span>
  </pre>
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
