import react from 'react';


// function About(){
//     return(
//         <section id = "about">
//             <div>
//                 Test
//             </div>
//         </section>
//     );
// }

// export default About;

const About = (props) => {
    return (
            <div className="container">
                <div className="row align-items-center">
                   <h1 className="site-heading"> About Me </h1>
                    <div className="col">
                        <p>Test</p>
                    </div>
                    <div className= "col">
                        <p >Hello</p>
                    </div>
                </div>
            </div>
    );
};

export default About;