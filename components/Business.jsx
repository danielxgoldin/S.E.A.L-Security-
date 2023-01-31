import {features} from '../constants';
import styles, {layout} from "../style";
import Button from "./button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="about" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Homeland <br className="sm:block hidden" /> 
        
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      We offer a wide array of the most advanced security options for our clients and their assets. 
      This includes Uniformed Security Officer Services, Public Events, Private Security Services & Officer Training,
      Hotel, Resort Security, and High Value Targets.
      </p>

    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      International<br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Due to the increasing threats of piracy and terrorism in our world today, S.E.A.L. Security Services & Solutions offers our clients a wide array of advanced security protocols that are designed and proven to deter piracy, prevent acts of terrorism, and allow our customers the confidence necessary in any logistics operation.
      </p>

    </div>

    

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>

  

  
);

export default Business;