// ======================================================================================
// ======================================================================================
// ======================================================================================
// ======================================================================================
// TEMPLATE 1
export const template1 = {
  formStyles: {
    titleFilled: false,
    titleFullWidth: true,
    titleUnderline: true,
    titleColor: "#000000",
    titleFillColor: "#ccffcc",
    accentColor: "#991ffe",
    fontFamily: "sans-serif",
  },
  layout: [
    {
      name: "aboutwithcontact1",
      x: 0,
      y: 0,
      w: 12,
      h: 9,
      data: {
        name: "",
        profession: "",
        address: [""],
        cityZip: "",
        phno: "",
        emails: [],
        about: "",
        style: { bgColor: "#ffffff", textColor: "#000000" },
      },
    },
    {
      name: "educations1",
      x: 0,
      y: 9,
      w: 12,
      h: 11,
      data: {
        title: "",
        data: [],
        style: { bgColor: "#ffffff", textColor: "#000000" },
      },
    },
    {
      name: "works2",
      x: 0,
      y: 20,
      w: 12,
      h: 14,
      data: {
        title: "",
        data: [],
        style: { bgColor: "#ffffff", textColor: "#000000" },
      },
    },
    {
      name: "projects2",
      x: 0,
      y: 34,
      w: 12,
      h: 12,
      data: {
        title: "",
        data: [],
        style: { bgColor: "#ffffff", textColor: "#000000" },
      },
    },
    {
      name: "others1",
      x: 0,
      y: 46,
      w: 12,
      h: 8,
      data: {
        title: "",
        bullet: -1,
        data: [],
        style: { bgColor: "#ffffff", textColor: "#000000" },
      },
    },
  ],
};

// ======================================================================================
// ======================================================================================
// ======================================================================================
// ======================================================================================
// TEMPLATE 2
export const template2 = {
  formStyles: {
    titleFilled: false,
    titleFullWidth: true,
    titleUnderline: true,
    titleColor: "#000000",
    titleFillColor: "#ccffcc",
    accentColor: "#991ffe",
    fontFamily: "sans-serif",
  },
  layout: [
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
  ],
};

// ======================================================================================
// ======================================================================================
// ======================================================================================
// ======================================================================================
// TEMPLATE 3
export const template3 = {
  formStyles: {
    titleFilled: false,
    titleFullWidth: true,
    titleUnderline: true,
    titleColor: "#000000",
    titleFillColor: "#ccffcc",
    accentColor: "#430084",
    fontFamily: "sans-serif",
  },
  layout: [
    {
      name: "aboutwithcontact2",
      x: 0,
      y: 0,
      w: 12,
      h: 11,
      data: {
        name: "",
        profession: "",
        address: [""],
        cityZip: "",
        phno: "",
        emails: [],
        about: "",
        style: { bgColor: "#991ffe", textColor: "#ffffff" },
      },
    },
    {
      name: "skills1",
      x: 0,
      y: 11,
      w: 4,
      h: 14,
      data: {
        color: "#991ffe",
        title: "",
        chipRadius: 16,
        chipSize: 4,
        filled: true,
        flipped: true,
        data: [],
        style: { bgColor: "#ffffff", textColor: "#000000" },
      },
    },
    {
      name: "ratings1",
      x: 0,
      y: 25,
      w: 4,
      h: 9,
      data: {
        title: "",
        ratingType: "star",
        icon: "square",
        flipped: true,
        data: [],
        style: { bgColor: "#ffffff", textColor: "#000000" },
      },
    },
    {
      name: "works2",
      x: 4,
      y: 11,
      w: 8,
      h: 23,
      data: {
        title: "",
        data: [
          {
            id: "work1664549014174",
            workOrganizationName: "",
            workLocation: "",
            jobTitle: "",
            workDetails: [],
            workDuration: "",
          },
          {
            id: "work1664552126131",
            workOrganizationName: "",
            workLocation: "",
            jobTitle: "",
            workDetails: [],
            workDuration: "",
          },
          {
            id: "work1664552169244",
            workOrganizationName: "",
            workLocation: "",
            jobTitle: "",
            workDetails: [],
            workDuration: "",
          },
        ],
        style: { bgColor: "#ffffff", textColor: "#000000" },
      },
    },
    {
      name: "educations2",
      x: 0,
      y: 34,
      w: 12,
      h: 9,
      data: {
        title: "",
        data: [
          {
            id: "education1664549014174",
            courseName: "",
            courseResults: "",
            organizationName: "",
            courseDuration: "",
          },
          {
            id: "education1664550618549",
            courseName: "",
            courseDuration: "",
            organizationName: "",
            courseResults: "",
          },
          {
            id: "education1664550653365",
            courseName: "",
            courseDuration: "",
            organizationName: "",
            courseResults: "",
          },
        ],
        style: { bgColor: "#ffffff", textColor: "#000000" },
      },
    },
    {
      name: "others1",
      x: 0,
      y: 43,
      w: 12,
      h: 10,
      data: {
        title: "",
        bullet: -1,
        data: [""],
        style: { bgColor: "#ffffff", textColor: "#000000" },
      },
    },
  ],
};

// ======================================================================================
// ======================================================================================
// ======================================================================================
// ======================================================================================
// TEMPLATE 3
export const templateN = {
  formStyles: {
    titleFilled: false,
    titleFullWidth: true,
    titleUnderline: true,
    titleColor: "#000000",
    titleFillColor: "#ccffcc",
    accentColor: "#991ffe",
  },
  layout: [
    {
      name: "educations2",
      x: 0,
      y: 34,
      w: 12,
      h: 9,
      data: {
        title: "Educations",
        data: [
          {
            id: "education1664549014174",
            courseName: "Electrical Engg & Computer Science",
            courseResults: "Cumulative CGPA 3.70",
            organizationName: "University of Cambridge",
            courseDuration: "JUNE 2018 - JULY 2022",
          },
          {
            id: "education1664550618549",
            courseName: "Bachelors in Computer Science",
            courseDuration: "JUNE 2015 - JULY 2018",
            organizationName: "University of Oxford",
            courseResults: "Cumulative CGPA 3.50",
          },
          {
            id: "education1664550653365",
            courseName: "Higher Sceondary Science Course",
            courseDuration: "MAY 2015",
            organizationName: "Palo Alto High School",
            courseResults: "85% Marks",
          },
        ],
        style: { bgColor: "#ffffff", textColor: "#000000" },
      },
    },
    {
      name: "skills1",
      x: 0,
      y: 11,
      w: 4,
      h: 14,
      data: {
        color: "#9200f2",
        title: "Skills",
        chipRadius: 16,
        chipSize: 4,
        filled: true,
        flipped: true,
        data: [
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "ReactJS",
          "NextJS",
          "Flutter",
          "NodeJS",
          "ExpressJS",
          "Python",
          "MySql",
          "MongoDB",
          "Sqlite",
        ],
        style: { bgColor: "#ffffff", textColor: "#000000" },
      },
    },
    {
      name: "works2",
      x: 4,
      y: 11,
      w: 8,
      h: 23,
      data: {
        title: "Work Experience",
        data: [
          {
            id: "work1664549014174",
            workOrganizationName: "Company",
            workLocation: "Location",
            jobTitle: "Job Title",
            workDetails: [
              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh. ",
              " Excepturi, reprehenderit at doloremque eaque aperiam.",
            ],
            workDuration: "MAR 2020 - PRESENT",
          },
          {
            id: "work1664552126131",
            workOrganizationName: "Company",
            workLocation: "Location",
            jobTitle: "Job Title",
            workDetails: [
              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh. ",
              " Excepturi, reprehenderit at doloremque eaque aperiam.",
            ],
            workDuration: "APR 2018 - MAR 2020",
          },
          {
            id: "work1664552169244",
            workOrganizationName: "Company",
            workLocation: "Location",
            jobTitle: "Job Title",
            workDetails: [
              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh. ",
              " Excepturi, reprehenderit at doloremque eaque aperiam.",
            ],
            workDuration: "JAN 2015 - APR 2018",
          },
        ],
        style: { bgColor: "#ffffff", textColor: "#000000" },
      },
    },
    {
      name: "ratings1",
      x: 0,
      y: 25,
      w: 4,
      h: 9,
      data: {
        title: "Languages",
        ratingType: "star",
        icon: "square",
        flipped: true,
        data: [
          { id: "rating1664552367539", ratingSubject: "Language", rateInPercentage: 100 },
          { id: "rating1664552411504", ratingSubject: "Language", rateInPercentage: 80 },
          { id: "rating1664552412260", ratingSubject: "Language ", rateInPercentage: 100 },
        ],
        style: { bgColor: "#ffffff", textColor: "#000000" },
      },
    },
    {
      name: "aboutwithcontact2",
      x: 0,
      y: 0,
      w: 12,
      h: 11,
      data: {
        name: "John Doe",
        profession: "Software Engineer",
        address: ["123 Street, City, State"],
        cityZip: "",
        phno: "+00 1234567890",
        emails: ["abc@example.com ", " Github.com/LoremIpsum"],
        about:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quae expedita architecto, doloribus recusandae iste harum fugit, maxime ipsa nemo magnam provident amet voluptate eveniet unde illo! Dolores, alias porro.\n  ",
        style: { bgColor: "#9b20ff", textColor: "#ffffff" },
      },
    },
    {
      name: "others1",
      x: 0,
      y: 43,
      w: 12,
      h: 10,
      data: {
        title: "Others",
        bullet: 9679,
        data: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quae expedita architecto, doloribus recusandae iste harum fugit.",
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quae expedita architecto, doloribus recusandae iste harum fugit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quae expedita architecto, doloribus recusandae iste harum fugit",
        ],
        style: { bgColor: "#ffffff", textColor: "#000000" },
      },
    },
  ],
};
