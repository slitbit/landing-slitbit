import { AstroJsIcon, CSharpIcon, CSSIcon, FlutterIcon, HTMLIcon, JavaScriptIcon, MysqlIcon, NestJsIcon, NetCoreIcon, NextJsIcon, PostgresIcon, ReactIcon } from "./svgIcons.component";
import{ useState, useEffect } from "react";
import { motion } from "framer-motion";


export const TechnologiesContainer = () => {
    const [leftItems, setLeftItems] = useState(TechnologiesMap.slice(0, 5));
    const [rightItems, setRightItems] = useState(TechnologiesMap.slice(5, 10));
  
    useEffect(() => {
      const interval = setInterval(() => {
        setLeftItems((prev) => [...prev.slice(1), prev[0]]);
        setRightItems((prev) => [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)]);
      }, 5000);
  
      return () => clearInterval(interval);
    }, []);

  
    return (
      <div className="tecnologies-container">
        <h2>Tecnologías que usamos</h2>
        <h3 className="tecnologies-description">
            En SLITBIT no solo adoptamos la evolución tecnológica, <span>la impulsamos</span>. 
            Nuestra actualización constante nos permite ofrecer soluciones innovadoras diseñadas para superar expectativas, 
            garantizando rendimiento máximo, eficiencia inteligente y escalabilidad adaptada a tus desafíos
        </h3>
        <div className="tecnologies-section">
          <motion.div className="tecnologies-carousel left">
            {leftItems.map((tech, index) => (

              <motion.div key={index} animate={{ x: [0, -20, 0] }} transition={{ duration: 1 }}>
                {tech.icon}
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="tecnologies-carousel right">
            {rightItems.map((tech, index) => (
              <motion.div key={index} animate={{ x: [0, 20, 0] }} transition={{ duration: 1 }}>
                {tech.icon}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    );
  };



  
export const TechnologiesMap : {name: string, icon: any}[] = [
    {
        name: "Next.js",
        icon: <NextJsIcon style={{width: "70px", height: "70px", fill: "white"}}  />
    },
    {
        name: "Astro.js",
        icon: <AstroJsIcon style={{width: "55px", height: "55px", fill: "white", background: "white", borderRadius: "10px" }}  />
    },
    {
        name: "Flutter",
        icon: <FlutterIcon style={{width: "70px", height: "70px", fill: "white"}}  />
    },
    {
        name: "Nest.js",
        icon: <NestJsIcon style={{width: "70px", height: "70px", fill: "white"}}  />
    },
    {
        name: "React",
        icon: <ReactIcon style={{width: "70px", height: "70px", fill: "white"}}  />
    },
    {
        name: "C#",
        icon: <CSharpIcon style={{width: "70px", height: "70px", fill: "white"}}  />
    },
    {
        name: "HTML",
        icon: <HTMLIcon style={{width: "70px", height: "70px", fill: "white"}}  />
    },
    {
        name: "CSS",
        icon: <CSSIcon style={{width: "70px", height: "70px", fill: "white"}}  />
    },
    {
        name: "JavaScript",
        icon:  <JavaScriptIcon style={{width: "70px", height: "70px", fill: "white"}}  />
    },
    {
        name: "Mysql",
        icon: <MysqlIcon style={{width: "70px", height: "70px", fill: "white"}}  />
    },
    {
        name: "Postgres",
        icon: <PostgresIcon style={{width: "70px", height: "70px", fill: "white"}}  />
    },
    {
        name: "Net Core",
        icon: <NetCoreIcon style={{width: "70px", height: "70px", fill: "white"}}  />
    },
]