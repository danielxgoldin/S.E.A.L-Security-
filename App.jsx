import styles from './style';
import { Navbar, Hero, Business, AboutUs, Careers, Footer, Industryexperiance, Services, 
  Testimonials} from './components';
import { steel } from './assets';
  

const App = () => (
    <div className="bg-primary w-flex overflow-hidden">
      <div style={{backgroundImage:`url(${steel})`}}className={`${styles.paddingX} } ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-black ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}> 
          <Services /> 
          <Industryexperiance />
          <AboutUs />
          <Business />  
          <Careers />
          <Testimonials />
          <Footer />
        
        </div>
      </div>
    </div>

    
);


export default App