import React, { FC } from "react";
import template_1 from "../../static/images/templates/template_1.png";
import template_2 from "../../static/images/templates/template_2.png";

const template2 = [
  {
    name: "about1",
    x: 0,
    y: 0,
    w: 8,
    h: 8,
    data: {
      name: "",
      profession: "",
      about: "",
      style: {
        bgColor: "#ffffff",
        textColor: "#000000",
      },
    },
  },
  {
    name: "contact1",
    x: 8,
    y: 0,
    w: 4,
    h: 8,
    data: {
      title: "",
      flipped: false,
      data: {
        address: [""],
        emails: [""],
        phno: "",
      },
      style: {
        bgColor: "#ffffff",
        textColor: "#000000",
      },
    },
  },
  {
    name: "educations1",
    x: 0,
    y: 8,
    w: 8,
    h: 11,
    data: {
      title: "",
      data: [
        {
          id: "education1663996298146",
          courseName: "",
          courseResults: "",
          organizationName: "",
          courseDuration: "",
        },
      ],
      style: {
        bgColor: "#ffffff",
        textColor: "#000000",
      },
    },
  },
  {
    name: "skills1",
    x: 8,
    y: 8,
    w: 4,
    h: 13,
    data: {
      color: "#123456",
      title: "",
      chipRadius: 10,
      chipSize: 3,
      filled: true,
      flipped: false,
      data: [],
      style: {
        bgColor: "#ffffff",
        textColor: "#000000",
      },
    },
  },
  {
    name: "works1",
    x: 0,
    y: 19,
    w: 8,
    h: 12,
    data: {
      title: "",
      data: [
        {
          id: "work1663996298146",
          workOrganizationName: "",
          workLocation: "",
          jobTitle: "",
          workDetails: [""],
          workDuration: "",
        },
      ],
      style: {
        bgColor: "#ffffff",
        textColor: "#000000",
      },
    },
  },
  {
    name: "projects1",
    x: 0,
    y: 31,
    w: 8,
    h: 15,
    data: {
      title: "",
      data: [
        {
          id: "project1663996298146",
          projectName: "",
          projectDetails: [""],
        },
      ],
      style: {
        bgColor: "#ffffff",
        textColor: "#000000",
      },
    },
  },
  {
    name: "others1",
    x: 8,
    y: 42,
    w: 4,
    h: 11,
    data: {
      title: "",
      bullet: -1,
      data: [""],
      style: {
        bgColor: "#ffffff",
        textColor: "#000000",
      },
    },
  },
  {
    name: "ratings2",
    x: 8,
    y: 21,
    w: 4,
    h: 11,
    data: {
      title: "",
      ratingType: "star",
      icon: "circle",
      flipped: false,
      data: [],
      style: {
        bgColor: "#ffffff",
        textColor: "#000000",
      },
    },
  },
];

const templates = [
  {
    templateTitle: "Template one",
    templateImage: template_1,
    templateData: template2,
  },
  {
    templateTitle: "Template Two",
    templateImage: template_2,
    templateData: template2,
  },
  {
    templateTitle: "Template Three",
    templateImage: template_1,
    templateData: template2,
  },
];

interface TemplateSectionProps {}

const TemplateSection: FC<TemplateSectionProps> = () => {
  return (
    <>
      {/* <!-- Projects Section --> */}
      <section className="templates" id="templatesSection">
        <h2 className="section-title fill">Templates</h2>
        <div className="container">
          <div className="templatesSectionContent">
            {templates.map((eachTemplate) => {
              return (
                <div key={eachTemplate.templateTitle} className="eachTemplate">
                  <div className="templateImage">
                    <img
                      height={297}
                      width={210}
                      src={eachTemplate.templateImage}
                      alt={`${eachTemplate.templateTitle} Image`}
                    />
                  </div>
                  <div className="templateDetails">
                    <h3 className="templateTitle">{eachTemplate.templateTitle}</h3>
                    <p className="templateDescription">
                      One of the templates to choose from. Templates can be modified.
                    </p>
                    <button
                      className="useTemplateButton"
                      onClick={() => {
                        localStorage.setItem("ItemsArray", JSON.stringify(eachTemplate.templateData));
                        window.open("/create", "_self");
                      }}
                    >
                      Use Template
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="moreTemplates">
            <a href="https://codepen.io/FedLover/" target="_blank" className="button-secondary" id="profile-link">
              Show More <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
        <div style={{ height: "24px" }}>&nbsp;</div>
      </section>
    </>
  );
};

export default TemplateSection;
