// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import LearningOptions from './widgets/LearningOptions';
import LinkList from './widgets/LinkList';
const botName = 'Freelanced';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`),
   createChatBotMessage(
          "Here's a quick overview of what I can help you with. You can also type in.",
          {
            withAvatar: false,
            delay: 500,
            widget: "overview"
          }
        ),
       
    ],
    // widgets: [
    //     {
    //         widgetName: 'learningOptions',
    //         widgetFunc: (props) => <LearningOptions {...props} />
    //     },
    //     {
    //         widgetName: 'javascriptLinks',
    //         widgetFunc: (props) => <LinkList {...props} />,
    //         props: {
    //             options: [
    //                 {
    //                     text: 'Introduction to JS',
    //                     url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/',
    //                     id: 1
    //                 },
    //                 {
    //                     text: 'Mozilla JS Guide',
    //                     url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
    //                     id: 2
    //                 },
    //                 {
    //                     text: 'Frontend Masters',
    //                     url: 'https://frontendmasters.com',
    //                     id: 3
    //                 }
    //             ]
    //         }
    //     }
    // ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#FFA33E',
    },
    chatButton: {
      backgroundColor: '#FFA33E',
    },
  },
  state: {},
  // customComponents: { botAvatar: (props) => <CoBotAvatar {...props} /> },
//   widgets: [
//     {
//       widgetName: "overview",
//       widgetFunc: (props) => <Overview {...props} />,
//       mapStateToProps: ["messages"]
//     },
//     {
//      widgetName: "ContactLink",
//       widgetFunc: (props) => <ContactLink />
//     },
// ]
  
};

export default config;
// import { createChatBotMessage } from "react-chatbot-kit";
// import Overview from "./widgets/Overview";
// import GlobalStatistics from "./widgets/GlobalStatistics";
// import LocalStatistics from "./widgets/LocalStatistics";
// import Contact from "./widgets/Contact";
// import MedicineDelivery from "./widgets/MedicineDelivery";
// import CoBotAvatar from "./CoBotAvatar";

// const config = {
//   lang: "no",
//   botName: "CoBot",
//   customStyles: {
//     botMessageBox: {
//       backgroundColor: "#04668a"
//     },
//     chatButton: {
//       backgroundColor: "#0f5faf"
//     }
//   },
//   initialMessages: [
//     createChatBotMessage(
//       `Hi, I'm here to provide you with latest COVID 19 data to keep you safe!`
//     ),
//     createChatBotMessage(
//       "Here's a quick overview of what I can help you with. You can also type in.",
//       {
//         withAvatar: false,
//         delay: 400,
//         widget: "overview"
//       }
//     )
//   ],
//   state: {},
//   customComponents: { botAvatar: (props) => <CoBotAvatar {...props} /> },
//   widgets: [
//     {
//       widgetName: "overview",
//       widgetFunc: (props) => <Overview {...props} />,
//       mapStateToProps: ["messages"]
//     },
//     {
//       widgetName: "globalStatistics",
//       widgetFunc: (props) => <GlobalStatistics />
//     },
    // {
    //   widgetName: "localStatistics",
    //   widgetFunc: (props) => <LocalStatistics />
    // },
    // {
    //   widgetName: "emergencyContact",
    //   widgetFunc: (props) => <Contact />
    // },
    // {
    //   widgetName: "medicineDelivery",
    //   widgetFunc: (props) => <MedicineDelivery />
    // }
//   ]
// };

// export default config;
