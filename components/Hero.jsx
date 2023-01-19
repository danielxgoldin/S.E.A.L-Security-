import styles from  '../style';
//importing videos and images from react 
import {discount,robot,seal} from '../assets';
import ReactPlayer from 'react-player';

const Hero = () =>  (
  //adding styling and the video in to the hero section
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div>
        <video width="750" height="500" controls >
        <source src={seal} type="video/mp4"/>
        </video>
        </div>
    </section>
    
  )


export default Hero