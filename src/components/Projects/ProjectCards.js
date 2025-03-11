import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaJsSquare, FaJava, FaAndroid, FaEthereum  } from "react-icons/fa";
import { DiReact, DiMongodb } from "react-icons/di";
import { SiTailwindcss, SiSocketdotio, SiExpress, SiSolidity, SiGradle, SiSpringboot, SiMysql, SiAndroidstudio} from 'react-icons/si';


const renderTechnologyIcons = (technologies) => {
  const technologyIcons = {
  js: <div style={{ margin: '0 15px' }}><FaJsSquare size={40} color="#F7DF1E" /></div>,
  react: <div style={{ margin: '0 15px' }}><DiReact size={40} color="#61DAFB" /></div>,
  mongodb: <div style={{ margin: '0 15px' }}><DiMongodb size={40} color="#4DB33D" /></div>,
  socketio: <div style={{ margin: '0 15px' }}><SiSocketdotio size={40} color="#ffffff" /></div>,
  tailwind: <div style={{ margin: '0 15px' }}><SiTailwindcss size={40} color="#38B2AC" /></div>,
  express: <div style={{ margin: '0 15px' }}><SiExpress size={40} color="#ffffff" /></div>,
  solidity: <div style={{ margin: '0 15px' }}><SiSolidity size={40} color="#ffffff" /></div>,
  springboot: <div style={{ margin: '0 15px' }}><SiSpringboot size={40} color="#6DB33F" /></div>,
  mysql: <div style={{ margin: '0 15px' }}><SiMysql size={40} color="#ffffff" /></div>,
  java: <div style={{ margin: '0 15px' }}><FaJava size={40} color="#F8981D" /></div>,
  gradle: <div style={{ margin: '0 15px' }}><SiGradle size={40} color="#ffffff" /></div>,
  android: <div style={{ margin: '0 15px' }}><FaAndroid size={40} color="#3DDC84" /></div>,
  etharium: <div style={{ margin: '0 15px' }}><FaEthereum size={40} color="#cccccc" /></div>,
  androidstudious: <div style={{ margin: '0 15px' }}><SiAndroidstudio size={40} color="#61DAff" /></div>,
  };

  return technologies.map((tech, index) => {
    return technologyIcons[tech.toLowerCase()] || null;
  });
};

function ProjectCards(props) {
  return (
    <Card
      className="project-card-view"
      style={{
        borderRadius: "15px",
        background: "rgba(108, 0, 249, 0.8)",
        boxShadow: "0px 5px 15px rgba(130, 50, 255, 0.4)",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0px 10px 25px rgba(130, 50, 255, 0.6)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0px 5px 15px rgba(252, 252, 252, 0.4)";
      }}
    >
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
          padding: "10px",
          opacity: "0.9",
        }}
      />
      <Card.Body style={{ textAlign: "center", padding: "20px" }}>
        <Card.Title
          style={{
            fontWeight: "700",
            fontSize: "1.4rem",
            color: "#ffffff",
            textShadow: "1px 1px 3px rgb(0, 0, 0)",
          }}
        >
          {props.title}
        </Card.Title>
        <Card.Text
          style={{
            textAlign: "justify",
            fontSize: "1rem",
            marginBottom: "15px",
            color: "#cccccc",
          }}
        >
          {props.description}
        </Card.Text>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px"}}>
          {renderTechnologyIcons(props.technologies)}
        </div>

        <Button
          variant="dark"
          href={props.ghLink}
          target="_blank"
          style={{
            margin:"5px",
            color:"#000000",
            borderRadius: "15px",
            background: "rgb(183, 101, 255)", 
            border: "2px solid black", 
            boxShadow: "0px 5px 15px rgba(255, 255, 255, 0.3)",
            transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            overflow: "hidden",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5B30E0")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#B765FF")}
        >
          <BsGithub size={20} /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>

        {!props.isBlog && props.demoLink && (
          <Button
            variant="dark"
            href={props.demoLink}
            target="_blank"
            style={{
              margin:"5px",
              color:"#000000",
              borderRadius: "15px",
              background: "rgb(183, 101, 255)",
              border: "2px solid black",
              boxShadow: "0px 5px 15px rgba(255, 255, 255, 0.3)",
              transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5B30E0")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#B765FF")}
          >
            <CgWebsite size={20} /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
