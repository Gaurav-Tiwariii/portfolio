import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
    initail: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity,
        }
    }
};

const SliderVariants = {
    initail: {
        x: 0,
    },
    animate: {
        x: "-220%",
       
        transition: {
            duration: 20,
            repeat:Infinity,
            repeatType:"mirror",
        }
    },
};
const Hero = () => {

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initail" animate="animate">
                    <motion.h2 variants={textVariants}>GAURAV TIWARI</motion.h2>
                    <motion.h1 variants={textVariants}>Software and Web developer</motion.h1>
                    <motion.div className="buttons">
                        <motion.button variants={textVariants} onClick={() => scrollToSection('Portfolio')}>See the latest Works</motion.button>
                        
                        <a href="./gauravtiwaricv.pdf" download={"Gaurav_Tiwari_resume.pdf"} >
                            <motion.button variants={textVariants}>Download Resume</motion.button>
                        </a>
                        <motion.button variants={textVariants} onClick={() => scrollToSection('Contact')}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="scroll" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={SliderVariants} initail="initial" animate="animate">
                Passionate Coder - Tech Enthusiast - Continuous Learner
            </motion.div>
            <div className="imageContainer">
                <img src="/hero.png" alt="" />
            </div>
        </div>
    )
}
export default Hero;