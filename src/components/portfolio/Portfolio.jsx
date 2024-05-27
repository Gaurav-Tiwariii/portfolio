import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "react social-chat ",
        img: "/socialChat.png",
        desc: "tech stake: React ,Firebase . Crafted a social media web app enabling users to connect and share content.",

    },
    {
        id: 2,
        title: "Object tracking with SORT Algorithm ",
        img: "/peopleCount.png",
        desc: "TechStack: Python, NumPy, Matplotlib ,OpenCV.Implemented the Simple Online and Realtime Tracking (SORT) algorithm for object tracking across video frames.Utilized Python programming language along with NumPy and Matplotlib libraries. Developed  module to perform data association between detections, predict object motion, and update object states using Kalman filters. ",


    },
    {
        id: 3,
        title: " Gym Management System ",
        img: "/gym.png",
        desc: "TechStack: Java, SQL, JDBC, Swing Developed a Gym Management System facilitating seamless administration and member management. Utilized Java for backend development, JDBC for database connectivity, and Swing for building the user interface.. Implemented comprehensive features including membership management, attendance tracking, class scheduling, billing, and reporting functionalities..",


    },
    {
        id: 4,
        title: "portfolio ",
        img: "/portfolio.png",
        desc: "my portfolio using react and libraries like framer-motion. ",


    },

];


const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset:["start start","end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
    <section >
        <div className="container" >
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt={item.title} />
                </div>
                <motion.div className="textContainer" style={{ y }}>
                    <h2 >{item.title}</h2>
                    <p> {item.desc}</p>
                    {/* <button>See Demo</button> */}
                    <a href="https://github.com/Gaurav-Tiwariii" target="_blank" rel="noopener noreferrer">
                            <button >See Demo</button>
                        </a>
                </motion.div>
            </div>
        </div>
    </section>
    )
};

const Portfolio = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });


    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>
                    Project Works
                </h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>

            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
};

export default Portfolio