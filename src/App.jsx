import styles from './style';
import { Navbar, Hero, Home, AboutUs, Careers, Footer, Industryexperiance, Services, 
  Testimonials } from './components';

const App = () => (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX}} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Home /> 
          <Services /> 
          <Industryexperiance />
          <AboutUs /> 
          <Careers />
          <Testimonials />
          <Footer />
        
        </div>
      </div>
    </div>

    
);


export default App