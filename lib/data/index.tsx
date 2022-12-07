import {IoIosNotificationsOutline} from "react-icons/io"
import {IoSettingsOutline} from "react-icons/io5"
import {CiSearch} from "react-icons/ci"

interface DataElm{
  src? : string;
}

interface Menu{
  name : string,
  elm : (dataElm : DataElm)=>React.ReactElement
}


export const menus : Menu[] = [
  {
    name : "search",
    elm : (data)=><CiSearch />,
  },
  {
    name : "setting",
    elm : (data)=><IoSettingsOutline />
  },
  {
    name : "notification",
    elm : (data)=><IoIosNotificationsOutline  />
  },
  {
    name : "profile",
    elm : (data)=> <img src={data.src}   className="w-[1.7rem] md:w-[2rem] aspect-square rounded-full" alt="" />
  },
]

export const educations = [
    {
      institution : "Universitas Negeri Malang (2017-2021)",
      major : "S1 Fisika - IPK 3,86",
      logo : "https://i1.wp.com/buk.um.ac.id/wp-content/uploads/2016/02/cropped-avatar.png",
      activities : [
        "PPA scholarship recipients for 2018-2019 period.",
        "PPA scholarship recipients for 2019-2020 period.",
        "Adora scholarship recipients for 2020-2021 period.",
        "The best graduate majoring in physics, the 109th graduate"
      ]
    },
    {
      institution : "Universitas Negeri Malang (2017-2021)",
      major : "S1 Fisika - IPK 3,86",
      logo : "https://i1.wp.com/buk.um.ac.id/wp-content/uploads/2016/02/cropped-avatar.png",
      activities : [
        "PPA scholarship recipients for 2018-2019 period.",
        "PPA scholarship recipients for 2019-2020 period.",
        "Adora scholarship recipients for 2020-2021 period.",
        "The best graduate majoring in physics, the 109th graduate"
      ]
    },
    {
      institution : "Universitas Negeri Malang (2017-2021)",
      major : "S1 Fisika - IPK 3,86",
      logo : "https://i1.wp.com/buk.um.ac.id/wp-content/uploads/2016/02/cropped-avatar.png",
      activities : [
        "PPA scholarship recipients for 2018-2019 period.",
        "PPA scholarship recipients for 2019-2020 period.",
        "Adora scholarship recipients for 2020-2021 period.",
        "The best graduate majoring in physics, the 109th graduate"
      ]
    }
]

export const experiances = [
  {
    posisi : "Frontend Engineer",
    startDate : Date.now(),
    endDate : Date.now(),
    currentPosition : true,
    institution : "SIGMATECT",
    logo : "https://i1.wp.com/buk.um.ac.id/wp-content/uploads/2016/02/cropped-avatar.png",
    activities : [
      "Aplikasi OCEAN --> Project Penutupan POS, Project History Penutupan Dealer, Project Penambahan Gudang",
      "Aplikasi OCEAN --> Project Penutupan POS, Project History Penutupan Dealer, Project Penambahan Gudang",
      "Aplikasi OCEAN --> Project Penutupan POS, Project History Penutupan Dealer, Project Penambahan Gudang"
    ]
  },
  {
    posisi : "Frontend Engineer",
    startDate : Date.now(),
    endDate : Date.now(),
    currentPosition : true,
    institution : "SIGMATECT",
    logo : "https://i1.wp.com/buk.um.ac.id/wp-content/uploads/2016/02/cropped-avatar.png",
    activities : [
      "Aplikasi OCEAN --> Project Penutupan POS, Project History Penutupan Dealer, Project Penambahan Gudang",
      "Aplikasi OCEAN --> Project Penutupan POS, Project History Penutupan Dealer, Project Penambahan Gudang",
      "Aplikasi OCEAN --> Project Penutupan POS, Project History Penutupan Dealer, Project Penambahan Gudang"
    ]
  },
  {
    posisi : "Frontend Engineer",
    startDate : Date.now(),
    endDate : Date.now(),
    currentPosition : true,
    institution : "SIGMATECT",
    logo : "https://i1.wp.com/buk.um.ac.id/wp-content/uploads/2016/02/cropped-avatar.png",
    activities : [
      "Aplikasi OCEAN --> Project Penutupan POS, Project History Penutupan Dealer, Project Penambahan Gudang",
      "Aplikasi OCEAN --> Project Penutupan POS, Project History Penutupan Dealer, Project Penambahan Gudang",
      "Aplikasi OCEAN --> Project Penutupan POS, Project History Penutupan Dealer, Project Penambahan Gudang"
    ]
  }
]

export const projects = [
  {
      "title" : "DeweTour Website",
      "name" :"DeweTour",
      "image": "https://res.cloudinary.com/university-state-of-malang-city/image/upload/v1660978153/Portofolio%20%28website%29/Projects/dewetour/cover_dnlmow.png",
      "stacks" :["React", "Bootstrap", "React Context", "Express JS","My SQL"],
      "about":"The DeweTour app is the first fullstack app I made to fulfill a task while joining dumbways bootcamp. This application is made using react js as a frontend library, bootstrap as a css framework, react context as state management, express js as the backend framework, and MySQL as the database. I also use some libraries to help build this website such as axios, react-icos, react-context and sweetalert2 for the frontend and cloudinary, jsonwebtoken, bcrypt, and multer for the backend.",
      "linkGithub":"https://github.com/siska199?tab=repositories&q=dewe&type=&language=&sort=",
      "link":"https://dewetour199.vercel.app/"
  }
  ,
  {
      "title" : "Literature Website",
      "name" :"Literature",
      "image" : "https://res.cloudinary.com/university-state-of-malang-city/image/upload/v1660979047/Portofolio%20%28website%29/Projects/literature/cover_udzqjj.png",
      "stacks" :["React", "Bootstrap", "React Context", "Express JS","My SQL"],
      "about":"Literature app is a fullstack application that i made to fulfill the final project of the dumbways bootcamp. This application is made using react js as a frontend library, bootstrap as a css framework, react context as state management, express js as the backend framework, and MySQL as the database. I also use some libraries to help build this website such as axios, react-pdf, react-icos, and sweetalert2 for the frontend and cloudinary, jsonwebtoken, bcrypt, and multer for the backend. In this application I added a chat system using socket.io.",
      "linkGithub":"https://github.com/siska199?tab=repositories&q=literature&type=&language=&sort=",
      "link":"https://literature199.vercel.app/"
  }
  ,
  {
      "title" : "Clone Instagram",
      "name" :"clone-instagram-199",
      "image" : "https://res.cloudinary.com/university-state-of-malang-city/image/upload/v1660979318/Portofolio%20%28website%29/Projects/clone-instagram/cover_wzco66.png",
      "stacks" :["React", "Bootstrap", "React Context", "Express JS","My SQL"],
      "about":"Clone instagram is the first application I made with the aim of learning the Next JS framework and tailwind css. In this application i also use redux as state management but the reason why i use redux in this app just to recall my memory and understanding about how to use konvensional redux and the last is i use firebase as the database. The authentication system used is NextAuth with Google as the provider. Unfortunately for now, the clone-instagram-199 application can only add posts, likes and comments. Libraries used to help build this application include emoji-picker-react, react-icons and redux-thunk.",
      "linkGithub":"https://github.com/siska199/clone-instagram",
      "link":"https://clone-ig199.vercel.app/"
  }
]

export const skills = [
  {
    name : "MongoDB",
    level : "Intermediet",
    type : "Backend"
  },
  {
    name : "Tailwind CSS",
    level : "Intermediet",
    type : "Frontend"
  }
]

export const skillLevel = [
  "Beginner",
  "Intermediet",
  "Advance"
]


