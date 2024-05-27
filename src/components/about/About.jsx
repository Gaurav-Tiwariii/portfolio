import React from "react";
import "./about.scss";
import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <section className="about-me">
            <div className="container">
                <motion.div
                    className="content"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>About Me</h2>
                    <p>
                        I am passionate about web and software development. I love creating
                        innovative solutions and continuously improving my skills to stay up
                        to date with the latest technologies. <br />  Currently, I am pursuing my MCA from Graphic Era Hill University in
                        Dehradun. I am always eager to take on new challenges and collaborate
                        with others to build amazing projects.<br />  I have experience working with various technologies including React, Firebase, Java, c# and more.
                    </p>
                </motion.div>
                <div className="icons">
                    <motion.div
                        className="icon"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="48"
                            height="48"
                            fill="#00796b"
                        >
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.07c-5.565 0-10.07-4.505-10.07-10.07S6.435 1.93 12 1.93 22.07 6.435 22.07 12 17.565 22.07 12 22.07zm-.5-16.36H9.5v10.14h2V5.71zm4.49 4.5h-2v-1.16h2v1.16zm-2.72 4.99h2v2.66h-2z" />
                        </svg>
                    </motion.div>
                    <motion.div
                        className="icon"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="48"
                            height="48"
                            fill="#00796b"
                        >
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.07c-5.565 0-10.07-4.505-10.07-10.07S6.435 1.93 12 1.93 22.07 6.435 22.07 12 17.565 22.07 12 22.07zm.5-16.36H14.5v10.14h-2V5.71zm-4.49 4.5h2v-1.16h-2v1.16zm2.72 4.99h-2v2.66h2z" />
                        </svg>
                    </motion.div>
                    <motion.div
                        className="icon"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="48"
                            height="48"
                            fill="#00796b"
                        >
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.07c-5.565 0-10.07-4.505-10.07-10.07S6.435 1.93 12 1.93 22.07 6.435 22.07 12 17.565 22.07 12 22.07zm.5-16.36H14.5v10.14h-2V5.71zm-4.49 4.5h2v-1.16h-2v1.16zm2.72 4.99h-2v2.66h2z" />
                        </svg>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
