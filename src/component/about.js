import '../styles/about.css'
import img1 from '../images/about.jpg'

const About = () => {
    return ( 
        <div className="about  px-5">
       
            <div className='about-image '>
            <h2>ABOUT</h2>
            <img src={img1} alt="" />
        </div>
            
            <div class="para px-5 ">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ad odio magni. Rerum animi quasi quibusdam iste aperiam ea incidunt, porro consectetur nisi mollitia quaerat at blanditiis nesciunt laudantium necessitatibus.</p>
           
        </div>
        
        </div>
     );
}
 
export default About;