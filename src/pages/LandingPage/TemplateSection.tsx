import React, { FC } from "react";
import template_1 from "../../static/images/templates/template_1.jpg";
import template_2 from "../../static/images/templates/template_2.jpg";
import template_3 from "../../static/images/templates/template_3.jpg";
import { template1, template2, template3, templateN } from "./TemplateData";

const templates = [
  {
    templateTitle: "Template one",
    templateImage: template_1,
    templateData: template1,
  },
  {
    templateTitle: "Template Two",
    templateImage: template_2,
    templateData: template2,
  },
  {
    templateTitle: "Template Three",
    templateImage: template_3,
    templateData: template3,
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
                        localStorage.setItem("ItemsArray", JSON.stringify(eachTemplate.templateData.layout));
                        localStorage.setItem("FormStyles", JSON.stringify(eachTemplate.templateData.formStyles));
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
