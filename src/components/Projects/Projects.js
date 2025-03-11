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
