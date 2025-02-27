/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "WahajK",
  title: "Hi all, I'm Muhammad Wahaj Khan",
  subTitle: emoji(
    "A passionate Software Developer 🚀 with experience in building Web and Mobile applications backend using Python, JavaScript, Django, Flutter, and other cutting-edge technologies, with a strong background in cybersecurity and networking."
  ),
  resumeLink:
    "https://drive.google.com/file/d/14ExW-rHeN4I0gh6kyTsND3xOx2hrpQSG/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/WahajK",
  linkedin: "https://www.linkedin.com/in/molover/",
  gmail: "wahajkhan788@gmail.com",
  // medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Technical Skills",
  subTitle: "SOFTWARE ENGINEER WITH BACKEND & FULL-STACK EXPERIENCE",
  skills: [
    emoji("⚡ Proficient in designing and developing scalable backend systems"),
    emoji("⚡ Creating RESTful APIs and integrating them into web and mobile applications"),
    emoji("⚡ Working with databases and optimizing SQL queries"),
    emoji("⚡ Deploying and managing containerized applications using Docker"),
    emoji("⚡ Managing server-side development with Django, Flask, and MySQL"),
    emoji("⚡ Knowledge of frontend technologies for full-stack development")
  ],

  softwareSkills: [
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Flask",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Shell Scripting",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "42 Berlin",
      logo: require("./assets/images/42_Berlin.webp"),
      subHeader: "Software Engineering Certification",
      duration: "November 2024 - Present",
      desc: "Project-based learning program focused on software development, algorithms, and system design.",
      descBullets: [
        "Hands-on experience with C programming and system-level development",
        "Collaborative peer-learning environment without traditional instructors",
        "Intensive coding challenges to solve real-world problems"
      ]
    },
    {
      schoolName: "Arden University, Berlin",
      logo: require("./assets/images/Arden.webp"),
      subHeader: "Master of Science in Cyber Security",
      duration: "September 2024 - Present",
      desc: "Advanced coursework in cyber security, digital forensics, and network security.",
      descBullets: [
        "Gaining expertise in ethical hacking and penetration testing",
        "Studying security protocols and risk management strategies"
      ]
    },
    {
      schoolName: "FAST National University of Computer and Emerging Sciences",
      logo: require("./assets/images/National_University_of_Computer_and_Emerging_Sciences_logo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2019 - June 2023",
      desc: "Completed coursework in programming, operating systems, and computer networks.",
      descBullets: [
        "Ranked in the top 10% of the program",
        "Took courses on software engineering, web security, and database systems",
        "Worked on various projects involving backend development and network security"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "C/C++",
      progressPercentage: "70%"
    },
    {
      Stack: "HTML/CSS",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "NED NCCS CTF Winner",
      subtitle:
        "Achieved first place in CTF competition by solving Reverse Engineering, Cryptography and OSINT challenges",
      image: require("./assets/images/nccs_ned_logo.jpeg"),
      imageAlt: "NED NCCS Logo",
      footerLink: [
        {
          name: "Writeup",
          url: "https://github.com/WahajK/NCC_CTF"
        },
      ]
    },
    {
      title: "Using Python to Access Web Data",
      subtitle:
        "Learned the use of python libraries like beautiful soup to create a web crawler and access web data",
      image: require("./assets/images/Coursera.png"),
      imageAlt: "Coursera Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/b9e8ba3eeaa500c2f05afc5c4b65e9a1"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs and Videos",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://42wolfsburgberlin.notion.site/Makefile-in-C-143937251cae80829df9e22ae80e81dc",
      title: "A beginner's guide to writing Makefiles in C",
      description:
        "Learn how Makefiles work in C and how you can write your own Makefiles to make your development more efficient"
    },
    {
      url: "https://42wolfsburgberlin.notion.site/42-Lab-Setup-on-Windows-14e937251cae807da8fccc4c4d669b17",
      title: "How to do 42 lab setup on Windows with GitHub",
      description:
        "Learn how to install francinette, norminette and other tools used by the 42 network and how you can use GitHub to work from school and home simultaneously"
    },
    {
      url: "https://www.youtube.com/watch?v=qcsKGWshRZE",
      title: "How to write your own system call in Ubuntu",
      description:
        "Learn how to create a basic system call and compile a new Kernel!"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+49-17625061000",
  email_address: "wahajkhan788@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
