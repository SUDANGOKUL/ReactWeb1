import React from "react";
import web1 from "../src/images/img4.jpg";
import web2 from "../src/images/images.jpg";
import web3 from "../src/images/img6.png";
import web4 from "../src/images/img7.png";
import web5 from "../src/images/img9.jpg";


const Research = (props) => {

    return (
        <>
           <div className="my-5">
                <h1 className="text-center">Research Projects</h1>
            </div>
            <div className="container-fluid ">
            <div className="col-12 mx-auto">
               
                   
                       
                    
                        
                        
                  
                    

                

</div>
               
                      
                                
                                    
                                    <span style={{ fontSize: '11pt', verticalAlign: 'baseline' }}><b>Non-visual Perception of Lines on a Multimodal Touchscreen Tablet</b><br/>
                                    While text-to-speech software has largely made textual information accessible in the digital space, analogous access to graphics still remains an unsolved problem. Because of their portability and ubiquity, several studies have alluded to touchscreens as a potential platform for such access, yet there is still a gap in our understanding of multimodal information transfer in the context of graphics. The current research demonstrates feasibility for following lines, a fundamental graphical concept, via vibrations and sounds on commercial touchscreens                                        </span><br/>
                                        <div class="cat">
                                        <img src={web2}  className="img -fluid animated" alt="home"/>
                                        </div>
                               <span style={{ fontSize: '11pt', verticalAlign: 'baseline' }}><b>Haptic Information Access Using Touchscreen Devices: Design Guidelines for Accurate Perception of Angular Magnitude and Line Orientation</b><br/>
                               he overarching goal of our research program is to address the long-standing issue of non-visual graphical accessibility for blind and visually-impaired (BVI) people through development of a robust, low-cost solution. This paper contributes to our research agenda aimed at studying key usability parameters governing accurate rendering and perception of haptically-accessed graphical materials via commercial touchscreen-based smart devices, such as smart phones and tablets. The current work builds on the findings from our earlier studies by empirically investigating the minimum angular magnitude that must be maintained for accurate detection and angular judgment of oriented vibrotactile lines                                        <br/>
                                        <div class="cat">
                                        <img src={web1}  className="img -fluid animated" alt="home"/>
                                         </div>
                               <span style={{ fontSize: '11pt', verticalAlign: 'baseline' }}><b>Toward Non-visual Graphics Representations on Vibratory Touchscreens: Shape Exploration and Identification</b><br/>
                               Considerable advancements in vibratory and auditory feedback have transformed the touchscreen from a simple visual input/output device to one that is highly interactive and multimodal. While auditory feedback is useful in tasks where dictation is sufficient, it can be tedious and limited in tasks that require interpretation of graphics. In this work, we focus on exploration procedures, identification accuracy of graphics, and how repetition at smaller scales may help users identify similar graphics when only vibratory feedback is used on touchscreens.</span>
                                        <br/>
                                        <div class="cat">
                                        <img src={web3}  className="img -fluid animated" alt="home"/>
                     </div>
                               <span style={{ fontSize: '11pt', verticalAlign: 'baseline' }}><b>Visual, tangible, and touch-screen: Comparison of platforms for displaying simple graphics</b><br/>
                               Four different platforms were compared in a task of exploring an angular stimulus and reporting its value. The angle was explored visually, tangibly as raised fine-grit sandpaper, or on a touch-screen with a frictional or vibratory signal. All platforms produced highly accurate angle judgments. Differences were found, however, in exploration time, with vision fastest as expected, followed by tangible, vibration, and friction. Relative to the tangible display, touch-screens evidenced greater noise in the perceived angular value, with a particular disadvantage for friction.</span>                                        <br/>
                                        <div class="cat">
                                        <img src={web4}  className="img -fluid animated" alt="home"/>    </div>
                               <span style={{ fontSize: '11pt', verticalAlign: 'baseline' }}><b>Evaluation of non-visual panning operations using touch-screen devices</b><br/>
                               This paper summarizes the implementation, evaluation, and usability of non-visual panning operations for accessing graphics rendered on touch screen devices. Four novel non-visual panning techniques were implemented and experimentally evaluated on our experimental prototype, called a Vibro-Audio Interface (VAI), which provides completely non-visual access to graphical information using vibration, audio, and kinesthetic cues on a commercial touch screen device. This demonstration will provide an overview of our system's functionalities and will discuss the necessity for developing non-visual panning operations enabling visually-impaired people access to large-format graphics (such as maps and floor plans).</span>
                               <div class="cat">
                                        <img src={web5}  className="img -fluid animated" alt="home"/>    </div>
                                       
                                

    </span> 
    </div>              
    </>
    );
};

export default Research;