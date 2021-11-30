import AppBarHeader from "../Components/AppBarHeader";
import Footer from "../Components/Footer";
import "./LandingPage.css";

import template_1 from "../static/template_1.png";

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
  /*
    Global Variables
*/
  const toggleMenu = document.querySelectorAll(
    ".navbar .toggle-menu"
  ) as NodeListOf<Element>;
  const navLinks = document.querySelector(".nav-links") as Element;
  const links = document.querySelectorAll(
    ".nav-links a"
  ) as NodeListOf<Element>;

  /*
    Main Function
*/
  function toggleLinks(ourArray: any, ourFubction: any) {
    ourArray.forEach((element: any) => {
      element.addEventListener("click", () => {
        ourFubction();
      });
    });
  }
  /*
    Show & Hide Links Sidebar
*/
  function toggleNavLinks(): void {
    navLinks.classList.toggle("active");
  }

  toggleLinks(toggleMenu, toggleNavLinks);
  toggleLinks(links, toggleNavLinks);

  return (
    <>
      <AppBarHeader />
      {/* <!-- Landing Section --> */}
      <section className="landing" id="welcome-section">
        <div className="container">
          <div className="text">
            <h1>welcome to the Free & Open Source Resume Builder.</h1>
            <span>build your resume now, no sign in required</span>
            <p>
              I have made up this resume builder as a side project and for
              getting my my resume built the way I wanted. Don't forget to give
              me your feedbacks. your feedbacks will make this site much more
              elegant & better.
            </p>
            <div className="btns-group">
              <a href="#templates" className="btn btn-primary">
                Build Your Resume
              </a>
            </div>
          </div>
          <div className="image">
            {/* <img src="https://image.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg" alt="Coding Illsturation"> */}
          </div>
        </div>
      </section>

      {/* <!-- Projects Section --> */}
      <section className="projects" id="templates">
        <h2 className="section-title fill">Templates</h2>
        <div className="container">
          <div className="projects-content">
            <div className="project">
              <div className="project-image">
                <img
                  // src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  src={template_1}
                  alt="Template 1 Image"
                />
              </div>
              <div className="project-details">
                <h3 className="project-tile">Template one</h3>
                <p className="project-description">
                  One of the templates to choose from. Accent colors(headings &
                  pills) can be changed.
                </p>
                <div className="btns-group">
                  <a href="/form" className="btn btn-primary">
                    Use Template
                  </a>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="project-image">
                {/* <img src="https://images.unsplash.com/photo-1421757295538-9c80958e75b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" alt="Project Image"> */}
              </div>
              <div className="project-details">
                <h3 className="project-tile">project name</h3>
                <p className="project-description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Optio, quos recusandae. Vitae hic sit accusantium!
                </p>
                <div className="btns-group">
                  <a href="#" className="btn btn-primary">
                    view project
                  </a>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="project-image">
                {/* <img src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80" alt="Project Image"> */}
              </div>
              <div className="project-details">
                <h3 className="project-tile">project name</h3>
                <p className="project-description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Optio, quos recusandae. Vitae hic sit accusantium!
                </p>
                <div className="btns-group">
                  <a href="#" className="btn btn-primary">
                    view project
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="more-projects">
            <a
              href="https://codepen.io/FedLover/"
              target="_blank"
              className="btn btn-primary"
              id="profile-link"
            >
              show more <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
};

export default LandingPage;
