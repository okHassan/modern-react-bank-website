import { stats } from '../constants'
import styles from '../../style'

const Stats = () => {
    return (
        <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
            {
                stats?.map(
                    (stat) => (
                        <div key={stat.id} className={`flex-1 flex  justify-start items-center flex-row m-3`}>
                            <h4 className='font-poppins font-semibold text-[30px] xs:text-[40px] xs:leading-[53px] leading-[43px] text-white mr-3'>{stat.value}</h4>
                            <p className='font-poppins font-normal text-[15px] xs:text-[20px] xs:leading-[26px] leading-[21px] text-gradient uppercase'>{stat.title}</p>
                        </div>
                    )
                )
            }
        </section>
    )
}

export default Stats