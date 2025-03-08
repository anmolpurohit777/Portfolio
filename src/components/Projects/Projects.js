// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

// function Projects() {
//   return (
//     <Container fluid className="project-section">
//       <Particle />
//       <Container>
//         <h1 className="project-heading">
//           My Recent <strong className="purple">Works </strong>
//         </h1>
//         <p style={{ color: "white" }}>
//           Here are a few projects I've worked on recently.
//         </p>
//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={chatify}
//               isBlog={false}
//               title="Chatify"
//               description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
//               ghLink="https://github.com/soumyajit4419/Chatify"
//               demoLink="https://chatify-49.web.app/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={bitsOfCode}
//               isBlog={false}
//               title="Bits-0f-C0de"
//               description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
//               ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
//               demoLink="https://blogs.soumya-jit.tech/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={editor}
//               isBlog={false}
//               title="Editor.io"
//               description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
//               ghLink="https://github.com/soumyajit4419/Editor.io"
//               demoLink="https://editor.soumya-jit.tech/"              
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={leaf}
//               isBlog={false}
//               title="Plant AI"
//               description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
//               ghLink="https://github.com/soumyajit4419/Plant_AI"
//               demoLink="https://plant49-ai.herokuapp.com/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={suicide}
//               isBlog={false}
//               title="Ai For Social Good"
//               description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
//               ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
//               // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={emotion}
//               isBlog={false}
//               title="Face Recognition and Emotion Detection"
//               description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
//               Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
//               ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
//               // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
//             />
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Projects;

import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaProjectDiagram , FaPlug , FaEthereum ,FaAndroid } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import sync from "../../Assets/Projects/project-1.png"
import crod from "../../Assets/Projects/project-2.png"
import blog from "../../Assets/Projects/project-3.png"
import reader from "../../Assets/Projects/project-4.png"



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <VerticalTimeline>
          {/* SYNC EDITOR */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#400072", color: "#ffffff" }}
            contentArrowStyle={{ borderRight: "7px solid #ff4081" }}
            iconStyle={{ background: "#ff4081", color: "#fff" }}
            icon={<FaPlug  />}
          >
            
            <ProjectCard
              imgPath={sync}
              isBlog={false}
              title="Sync Editor"
              description="Sync Editor is a real-time collaborative text editor built with React and Quill.js. It supports rich text formatting and ensures seamless synchronization across users. Ideal for team collaboration, note-taking, and document editing."
              ghLink="https://github.com/anmolpurohit777/Sync-Editor.git"
              demoLink="https://synceditorfe.onrender.com/"
              technologies={['react', 'socketio', 'js', 'tailwind', 'express','mongodb']}
            />
          </VerticalTimelineElement>

          {/* WEB3 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#400072", color: "#ffffff" }}
            contentArrowStyle={{ borderRight: "7px solid #ff4081" }}
            iconStyle={{ background: "#ff4081", color: "#fff" }}
            icon={<FaEthereum   />}
          >
            <ProjectCard
              imgPath={crod}
              isBlog={false}
              title="Web3 CrowdFunding"
              description="Web3 CrowdFunding is a blockchain-based crowdfunding platform built with React and Solidity. It enables secure, transparent, and decentralized fundraising using smart contracts. Designed for trustless donations and project funding on Web3."
              ghLink="https://github.com/anmolpurohit777/CrowdFunding-web3.git"
              demoLink="https://crowd-funding-web3-peach.vercel.app/"
              technologies={['solidity', 'react', 'etharium']}
            />
          </VerticalTimelineElement>

          {/* BLOG NEST */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#400072", color: "#ffffff" }}
            contentArrowStyle={{ borderRight: "7px solid #ff4081" }}
            iconStyle={{ background: "#ff4081", color: "#fff" }}
            icon={<MdWeb />}
          >
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog Nest"
              description="BlogNest is a modern blogging platform with React frontend and Spring Boot backend. It uses MySQL for data storage and offers seamless blog creation, editing, and viewing. The platform provides an intuitive UI and a robust backend for smooth user experience."
              ghLink="https://github.com/anmolpurohit777/BlogNest.git"
              technologies={['react', 'springboot', 'mysql']}
            />
          </VerticalTimelineElement>

          {/* READER */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#400072", color: "#ffffff" }}
            contentArrowStyle={{ borderRight: "7px solid #ff4081" }}
            iconStyle={{ background: "#ff4081", color: "#fff" }}
            icon={<FaAndroid  />}
          >
            <ProjectCard
              imgPath={reader}
              isBlog={false}
              title="Reader"
              description="Reader is a feature-rich book app that allows users to read EPUB files seamlessly. Built with a clean UI and efficient backend, it ensures a smooth reading experience. Users can manage their book list and access their library anytime."
              ghLink="https://github.com/anmolpurohit777/Reader.git"
              technologies={['java', 'gradle', 'androidstudious']}
            />
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </Container>
  );
}

export default Projects;
