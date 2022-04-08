import React from "react";
import web from "../src/images/fotis.jpg";
const Home = () => {

    return (
        <>
         <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={web}  className="img -fluid animated" alt="home"/>
                    </div>
            <div>
                    <div className="container-fluid ">
                        <div className="row">
                            <div className="col-12 mx-auto">
                                <div className="row">
                                    <div className="col-md-6 pt-5 pt-lg-0 order order-lg-1 d-flex justify-content-center flex-column">
                                        <p><h4><b>Multimodal Digital Graphics on Touchscreens</b></h4><b><a href="https://sites.google.com/slu.edu/gorlewicz-lab/research/multimodal-graphics#h.p_M_gRI7sjy7W5">@Multimodal Digital Graphics</a></b></p>
                                        <p><b></b><b><a href="https://twitter.com/vital4education" >@vital4education</a></b></p>
                                        <p>Touchscreens with vibratory capabilities are extremely common today. They are our tablets and smartphones, and in some cases, our computer screens and laptops. These devices are highly interactive and help us stay connected as we go about our daily lives. Touchscreens are best known for their significant visual component, however, leaving them largely inaccessible without being able to view the screen. Think of how often you look at the screen when interacting with such devices. This visual input/output is particularly problematic for individuals with disabilities. 

In the CHROME Lab, we are addressing this challenge, particularly in the context of Science, Technology, Engineering, and Math Education. We are exploring how vibrations and additional multisensory feedback can be used to enhance the accessibility and usability of touchscreens, particularly in visual content such as graphics. In doing so, we are opening up new pathways of multimodal learning while increasing the accessibility and equal opportunities of STEM disciplines for learners of all styles, with the goal of creating an inclusive, accessible touchscreen interface for all users.</p>
<p><b>Check out our exciting efforts to translate this research out of our lab and into the EdTech industry: </b><b><a href="https://www.vital.education/" >www.vital-ed.com</a></b></p>
<p><b><i>What sources do you follow on Twitter?</i></b></p>
<p><b>Vital</b><b><a href="https://twitter.com/vital4education" >@vital4education</a></b></p>
                                        <p><b>Perkins School for the Blind </b><b><a href="https://twitter.com/perkinsvision" >@perkinsvision</a></b></p>
                                        <p>&nbsp;</p>
                                        
                                       
                                    </div>
                                    
                                </div>
                                
                                    
                            

                            </div>
                        </div>

                    </div>
            </div>
        </>
    );
};

export default Home;