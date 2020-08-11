const profileText =
{
    "aboutMe": "My name is Erik Hirsch, I am a full stack developer who incorporates technical ability with collaborative skills to produce produce innovative applications. I graduated the Web Development Coding Boot Camp at UCLA Extension. The course has given me a solid foundation of technical skills as well as improved my ability to adapt to new ideas and concepts. I am very motivated to get a job using the skill that I am learning now. I like to code and I would love to be able to have a career that I can enjoy! I have learned HTML, CSS, Java Script/ JQuery, ES6, Node, MySQL, MongoDB, and ReactJs. I am currently learning React Native and Redux. Please checkout the links below to view some of the projects and assignments I have created so far.",

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
            "href": "https://www.linkedin.com/in/erik-hirsch-b8aa251a5/"
        },
        {
            "name": "Github",
            "href": "https://github.com/eh4git"
        },
    ],

    "profileSections": [
        {
            "name": "About Me",
            "href": "#aboutMe"
        },
        {
            "name": "Projects",
            "href": "#projects"
        },
        {
            "name": "Contact",
            "href": "#contact"
        },
    ],

    "projects": [
        {
            "name": "YouMdB Movie Application",
            "description": "This project consists of a movie application that provides recommendations for movies based on user search inputs. The application makes several ajax calls to retrieve data from multiple API in order to provide the user with information about the searched title as well as providing a list of recommendations. All searches are saved for future reference.",
            "repository": "https://github.com/abazrafshan/YouMDb-Movie-App.git",
            "deployed":"",
            "image": require("../assets/images/YouMBdApp.png")
        },
        {
            "name": "Weather Forecast Application",
            "description": "This application contains a weather dashboard that will allow the user to search for weather conditions by city name. The dashboard will display the current weather as well as a five day forecast. Searches will produce buttons allowing the user to easily switch between cities of their choice.",
            "repository": "https://github.com/eh4git/WeatherApp",
            "deployed":"",
            "image": require("../assets/images/WeatherDashboard4.png")
        },
        {
            "name": "Story Time Adventure Application",
            "description": "In this application that I created, in collaboration with fellow students, the user is able to create an account and sign in using a password that is encrypted and stored in a database. After signing in the user can add children to their account and provide information specific to each child. The user can then create a unique story that incorporates the information for the child.",
            "repository": "https://github.com/vinnielo/StoryTime",
            "deployed":"",
            "image": require("../assets/images/storyTime.png")
        },
        {
            "name": "Once Upon an Adventure",
            "description": "This full stack application incorporates the MERN stack. The application give users the ability to create a unique story while playing a game that contains educational mini games. Save the king then challenge him to a game!",
            "repository": "https://github.com/AnnaxGrace/react-rpg",
            "deployed":"",
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

    "homePage": "/React_Profile",
    "profilePage": "/profile"
}

export default profileText;