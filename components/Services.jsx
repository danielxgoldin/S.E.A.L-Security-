import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './button';
import { seal, bg} from '../assets';

const Services = () =>  (
  <section  id="services" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You handle the business, <br className="sm:block hidden" /> we’ll handle
        the security.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      We offer a wide array of the most advanced security options for our clients and their assets. 
      This includes Uniformed Security Officer Services, Public Events, Private Security Services & Officer Training,
      Hotel and Resort Security, and High Value Targets.
      </p>
    </div>
    <div>
      <Button styles={`mt-10 align center flex bottom`} />
    </div>

    <div>
      <video width="600" height="500" controls>
        <source src={seal} type="video/mp4" />
      </video>
    </div>

  </section>
);

export default Services