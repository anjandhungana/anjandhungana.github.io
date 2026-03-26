const skills = [
  "Machine Learning",
  "Computer Vision",
  "Data Analysis",
  "Python",
  "R",
  "JavaScript",
  "React",
  "IoT Systems",
  "MetaboAnalyst",
  "Adobe Suite"
];

const projects = [
  {
    title: "Poultry Disease Detection",
    description: "Deep learning system for disease detection from chicken manure images."
  },
  {
    title: "IoT Poultry Monitoring",
    description: "Sensor-based real-time poultry monitoring system."
  },
  {
    title: "Metabolomics Analysis",
    description: "Analysis of livestock metabolism and methane production."
  },
  {
    title: "Poultry Behavior Tracking",
    description: "Computer vision system for tracking poultry behavior."
  }
];

function App() {
  return (
    <>
      <nav>
        <span className="nav-brand">AD</span>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="hero">
        <p className="hero-tag">Hello!</p>
        <h1>I'm Anjan Dhungana</h1>
        <p className="subtitle">
          Graduate Research Assistant working at the intersection of AI, IoT, and computer vision for poultry welfare and precision livestock systems.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Get in Touch</a>
        </div>
      </section>

      <section id="about">
        <h2>About Me</h2>
        <p>
          I am a graduate researcher at the University of Georgia focusing on the application of artificial intelligence and IoT to improve poultry welfare.
        </p>
        <p>
          My work integrates machine learning, computer vision, and sensor systems to develop data-driven solutions for precision livestock management.
        </p>

        <ul>
          <li><b>Location:</b> Athens, GA, USA</li>
          <li><b>Email:</b> anzan@uga.edu</li>
          <li><b>Phone:</b> +1 502 319 7752</li>
        </ul>
      </section>

      <section id="experience">
        <h2>Experience</h2>

        <div>
          <h3>Graduate Research Assistant - University of Georgia</h3>
          <p>Aug 2024 - Present</p>
          <ul>
            <li>Develop AI models for poultry behavior and welfare monitoring</li>
            <li>Integrate IoT sensors for real-time data collection</li>
            <li>Work on precision livestock systems</li>
          </ul>
        </div>

        <div>
          <h3>Graduate Research Assistant - Kentucky State University</h3>
          <p>Aug 2022 - Jul 2024</p>
          <ul>
            <li>Conducted metabolomics and methane production research</li>
            <li>Performed statistical data analysis</li>
          </ul>
        </div>

        <div>
          <h3>Plant Science Instructor</h3>
          <p>2022</p>
        </div>

        <div>
          <h3>Agriculture Technician</h3>
          <p>2020</p>
        </div>
      </section>

      <section id="education">
        <h2>Education</h2>
        <p><b>Ph.D. Poultry Science</b> - University of Georgia (2024-Present)</p>
        <p><b>M.S. Environmental Studies</b> - Kentucky State University (2022-2024)</p>
        <p><b>B.Sc. Agriculture</b> - IAAS, Nepal (2015-2019)</p>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <p>
          {skills.map((skill) => (
            <span key={skill} className="skill-badge">{skill}</span>
          ))}
        </p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        {projects.map((project) => (
          <div key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Let's connect and build something amazing together.</p>
        <p>
          <a href="mailto:anzan@uga.edu">Email: anzan@uga.edu</a>
        </p>
        <p>
          <a href="tel:+15023197752">Phone: +1 502 319 7752</a>
        </p>
      </section>
    </>
  );
}

export default App;
