import { useRef } from "react";
import "./Services.scss"
import { animate, motion, useInView } from "framer-motion"

const variants={
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        
        transition: {
            duration:1,
            staggerChildren:0.1,
        },
    },
};

const Services = () => {
    const ref = useRef();

    const isInView = useInView(ref,{margin:"-100px"});
    return (
        <motion.div className="services" variants={variants} initial="initial" 
        //whileInView="animate"
        ref={ref}
        animate={isInView && "animate"}
        >
            <motion.div className="textContainer" variants={variants}>
                <p>I focus on helping your brand grow
                    <br /> and move forward</p>
                    <hr/>
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                <img src="./people.webp" alt=""/>
                    <h1>
                        <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
                    </h1>
                    <button>WHAT I DO?</button>
                </div>

            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                    <h2>Web Development</h2>
                    <p>
                        I create responsive and dynamic websites using the latest technologies such as HTML, CSS, JavaScript, and React.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}> 
                    <h2>Database Management</h2>
                    <p>
                    Designing and optimizing databases, proficient in both SQL and NoSQL databases to manage and organize data efficiently.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                    <h2>Software Development</h2>
                    <p>
                    Providing custom software solutions tailored to meet your needs, from desktop applications to enterprise systems.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                    <h2>Mobile App Development</h2>
                    <p>
                    Developing mobile applications for Android and iOS platforms using tools like React Native and Flutter.
                    </p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services