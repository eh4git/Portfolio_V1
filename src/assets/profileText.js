const profileText =
{
    "aboutMe": "My name is Erik Hirsch, I am a full stack developer who incorporates technical ability with collaborative skills to produce innovative web and mobile applications. I truly enjoy collaborating and team environments and I have a passion for learning and problem solving. A few of my technical skills include HTML, CSS, JavaScript, JQuery, ES6, Node, MySQL, MongoDB, React, React Native, and Redux. I completed the Web Development Coding Boot Camp at UCLA Extension. The course has given me a solid foundation of technical skills as well as improved my ability to adapt to and learn new ideas and concepts. I am excited to transition into a new career that will challenge me and help me to develop my skills. ",

    "repositories": [
        {
            "name": "YouMdB Movie Application",
            "href": "https://github.com/abazrafshan/YouMDb-Movie-App.git"
        },
        {
            "name": "Weather Forecast Application",
            "href": "https://github.com/eh4git/WeatherApp"
        },
        {
            "name": "Coding Quiz Challenge Application",
            "href": "https://github.com/eh4git/CodingQuiz"
        }
    ],

    "profiles": [
        {
            "name": "LinkedIn",
            "href": "https://www.linkedin.com/in/e-hirsch/"
        },
        {
            "name": "Github",
            "href": "https://github.com/eh4git"
        },
    ],

    "profileSections": [
        {
            "name": "Profile",
            "href": "/profile"
        },
        {
            "name": "Projects",
            "href": "/projects"

        },
        {
            "name": "Contact",
            "href": "/contact"
        },
    ],

    "projects": [
        {
            "name": "YouMdB Movie Application",
            "description": "This application was built to provide internet users with a centralized location to look up information on movies and to be presented with movie trailers and similar movie recommendations. This project was a great exercise in utilizing multiple entertainment API's to present the user with useful information relevant to the scope of the application. Additionally, building this application helped reinforce skills with jquery, HTML, and CSS..",
            "repository": "https://github.com/eh4git/YouMDb-Movie-App",
            "deployed":"https://eh4git.github.io/YouMDb-Movie-App/",
            "image": require("../assets/images/YouMBdApp.png")
        },
        {
            "name": "Weather Forecast Application",
            "description": "In this application I have created a weather dashboard. The dashboard contains a search box that the user will input their desired city name, when the search button is clicked the weather for the city will be displayed as well as a five day forecast below it.",
            "repository": "https://github.com/eh4git/WeatherApp",
            "deployed":"https://eh4git.github.io/WeatherApp/",
            "image": require("../assets/images/WeatherDashboard4.png")
        },
        {
            "name": "Story Time Adventure Application",
            "description": "In this application that I created, in collaboration with fellow students, the user is able to create an account and sign in using a password that is encrypted and stored in a database. After signing in the user can add children to their account and provide information specific to each child. The user can then create a unique story that incorporates the information for the child.",
            "repository": "https://github.com/eh4git/StoryTime",
            "deployed":"https://fathomless-waters-70908.herokuapp.com/",
            "image": require("../assets/images/storyTime.png")
        },
        {
            "name": "Once Upon an Adventure",
            "description": "This full stack application incorporates MongoDB, Express, React, Node.js. The application give users the ability to create a unique story while playing a game that contains educational mini games. Save the king then challenge him to a game!",
            "repository": "https://github.com/eh4git/once-upon-an-adventure",
            "deployed":"https://www.onceuaa.com/",
            "image": require("../assets/images/onceUponAnAdventure.png")
        },
        
    ],
    "resume":
    {
        "pdf": "../../public/docs/WebDevResume.pdf",
        "word": "../../public/docs/WebDevResume.docx"
    },
    "name": "Erik Hirsch",
    "email": "ehirsch760@gmail.com",
    "phone": "760 420-4308",
    "location": "Apple Valley, CA 92308",

    "homePage": "/",
    "profilePage": "/profile",
    "profilePicture": require("../assets/images/Optimized-ProfilePic.jpg"),
    "skills":{
        technical:['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'MySQL', 'MongoDB', 'Ajax', 'Express', 'Nodejs', 'React', 'React Native', 'Redux', 'Bootstrap', ],
        other:["Communication", "Teamwork", "Leadership", "Reliable", "Strong Work Ethic", "Adaptable"]
    }
}

export default profileText;