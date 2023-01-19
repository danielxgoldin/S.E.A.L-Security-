import {stats} from '../constants';
import styles from '../style';

const industryexperiance = () => (
   <section className={`${styles.flexCenter} 
   flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex jusify-start items-center flex-row m-3`}>
        <h4 className='font-poppins font-semibold xs:text-[40px]
        tex-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
        <p className='font-poppins font-semibold xs:text-[20px]
        tex-[15px] xs:leading-[26px] leading-[21px] text-yellow-400 uppercase ml-3'>{stat.title}</p>
      </div>

    ))}
   
   </section>
  )


export default industryexperiance