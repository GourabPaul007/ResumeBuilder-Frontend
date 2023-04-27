import React from "react";

import { FormStyles } from "../interfaces/FormStyles";
import { AboutBlueprint1 } from "../pages/DownloadPage/blueprints/aboutBlueprints";
import {
  AboutWithContactBlueprint1,
  AboutWithContactBlueprint2,
} from "../pages/DownloadPage/blueprints/AboutWithContactBlueprints";
import {
  ContactBlueprint1,
  ContactBlueprint2,
  ContactBlueprint3,
} from "../pages/DownloadPage/blueprints/ContactBlueprints";
import { EducationsBlueprint1, EducationsBlueprint2 } from "../pages/DownloadPage/blueprints/EducationBlueprints";
import { NameBlueprint1 } from "../pages/DownloadPage/blueprints/NameBlueprints";
import { OthersBlueprint1 } from "../pages/DownloadPage/blueprints/OthersBlueprints";
import { ProjectsBlueprint1, ProjectsBlueprint2 } from "../pages/DownloadPage/blueprints/ProjectBlueprints";
import { RatingsBlueprint1, RatingsBlueprint2 } from "../pages/DownloadPage/blueprints/RatingsBlueprints";
import { SkillsBlueprint1, SkillsBlueprint2 } from "../pages/DownloadPage/blueprints/SkillsBlueprints";
import { WorksBlueprint1, WorksBlueprint2 } from "../pages/DownloadPage/blueprints/WorksBlueprints";
import { log } from "./logger";
import { CertificationsBlueprint1 } from "../pages/DownloadPage/blueprints/CertificationsBlueprints";

/**
 * Gets block name and returns section according to the name
 * @param element single block of resume
 * @param formStyles global styles of resume
 * @returns single section of resume
 */
export const getBlueprint = (element: any, formStyles: FormStyles) => {
  log("element", element);
  switch (element.name) {
    case "aboutwithcontact1":
      return <AboutWithContactBlueprint1 key={element.name} aboutWithContact={element} formStyles={formStyles} />;
    case "aboutwithcontact2":
      return <AboutWithContactBlueprint2 key={element.name} aboutWithContact={element} formStyles={formStyles} />;
    case "about1":
      return <AboutBlueprint1 key={element.name} about={element} formStyles={formStyles} />;
    case "name1":
      return <NameBlueprint1 key={element.name} name={element} formStyles={formStyles} />;
    case "contact1":
      return <ContactBlueprint1 key={element.name} contact={element} formStyles={formStyles} />;
    case "contact2":
      return <ContactBlueprint2 key={element.name} contact={element} formStyles={formStyles} />;
    case "contact3":
      return <ContactBlueprint3 key={element.name} contact={element} formStyles={formStyles} />;
    case "educations1":
      return <EducationsBlueprint1 key={element.name} educations={element} formStyles={formStyles} />;
    case "educations2":
      return <EducationsBlueprint2 key={element.name} educations={element} formStyles={formStyles} />;
    case "skills1":
      return <SkillsBlueprint1 key={element.name} skills={element} formStyles={formStyles} />;
    case "skills2":
      return <SkillsBlueprint2 key={element.name} skills={element} formStyles={formStyles} />;
    case "works1":
      return <WorksBlueprint1 key={element.name} works={element} formStyles={formStyles} />;
    case "works2":
      return <WorksBlueprint2 key={element.name} works={element} formStyles={formStyles} />;
    case "projects1":
      return <ProjectsBlueprint1 key={element.name} projects={element} formStyles={formStyles} />;
    case "projects2":
      return <ProjectsBlueprint2 key={element.name} projects={element} formStyles={formStyles} />;
    case "ratings1":
      return <RatingsBlueprint1 key={element.name} ratings={element} formStyles={formStyles} />;
    case "ratings2":
      return <RatingsBlueprint2 key={element.name} ratings={element} formStyles={formStyles} />;
    case "certifications1":
      return <CertificationsBlueprint1 key={element.name} certifications={element} formStyles={formStyles} />;
    case "others1":
      return <OthersBlueprint1 key={element.name} others={element} formStyles={formStyles} />;
    default:
      return <>{element.name} case does not exist in ResumePage.tsx switch case ChooseBlueprint Helper</>;
  }
};
