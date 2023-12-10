import { meta, shopify, starbucks, tesla, fsoft, white } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    swift
} from "../assets/icons";

export const skills = [
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },

    {
        imageUrl: swift,
        name: "swift",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "iOS Team Leader",
        company_name: "FPT Software",
        icon: white,
        iconBg: "#accbe1",
        date: "Oct 2022 - Now",
        points: [
            "I work as an iOS Developer for FPT Software in Hoa Lac. I lead a team of 6 members, part of a larger team of 20 people",
            "Collaborating with cross-functional teams including Bridge SE, and other developers to create high-quality products.",
            "Developing new features, maintaining the application.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "iOS Developer",
        company_name: "ITSol",
        icon: white,
        iconBg: "#fbc3bc",
        date: "June 2020 - Sep 2022",
        points: [
            "Collaborating with cross-functional teams including Bridge SE, and other developers to create high-quality products.",
            "Developing new features, maintaining the application.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "iOS Developer",
        company_name: "Minh Phuc Software",
        icon: white,
        iconBg: "#b7e4c7",
        date: "Oct 2019 - June 2020",
        points: [
            "Collaborating with cross-functional teams including Bridge SE, and other developers to create high-quality products.",
            "Developing new features, maintaining the application.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "iOS Developer",
        company_name: "NTQ-Solution",
        icon: white,
        iconBg: "#a2d2ff",
        date: "Sep 2018 - July 2019",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "iOS Developer",
        company_name: "Smart Media",
        icon: white,
        iconBg: "#a2d2ff",
        date: "Nov 2017 - Sep 2018",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/do-lac-tuan-b75a2a167/',
    }
];

export const projects = [
    {
        iconUrl: white,
        theme: 'btn-back-red',
        name: 'Nitori',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://apps.apple.com/jp/app/%E3%83%8B%E3%83%88%E3%83%AA%E3%82%A2%E3%83%97%E3%83%AA-%E5%AE%B6%E5%85%B7-%E3%82%A4%E3%83%B3%E3%83%86%E3%83%AA%E3%82%A2%E3%81%AE%E6%AC%B2%E3%81%97%E3%81%84%E3%81%8C%E8%A6%8B%E3%81%A4%E3%81%8B%E3%82%8B/id814928018',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];