import  { useState } from 'react';
import './Counterup.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useLoaderData } from 'react-router-dom';
const Counterup = () => {
    const [counterStart, setCounterStart] = useState(false)
    const { totalUser } = useLoaderData();
    return (
        <>
          
           <ScrollTrigger onEnter={() => setCounterStart(true)} onExit={() => setCounterStart(false)}>
            <div className='counter-container '>
                <div className='counter'>
                    <h1 className='value'>
                        {counterStart && <CountUp start={0} end={200} duration={2} delay={0}></CountUp>}+
                    </h1>
                    <h1 className='counter-label'>Awesome Tour</h1>
                </div>
                <div className='counter'>
                    <h1 className='value'>
                        {counterStart && <CountUp start={0} end={10} duration={2} delay={0}></CountUp>}+
                    </h1>
                    <h1 className='counter-label'>10 Years Experience</h1>
                </div>
                <div className='counter'>
                    <h1 className='value'>
                        {counterStart && <CountUp start={0} end={totalUser} duration={2} delay={0}></CountUp>}+
                    </h1>
                    <h1 className='counter-label'>User</h1>
                </div>
            </div>
        </ScrollTrigger>

        </>
    );
};

export default Counterup;