
import './Contactus.css'
import Contactbanner from './Contactbanner/Contactbanner';
import ContactForm from './ContactForm/ContactForm';
import Addreview from '../../../Review/Addreview/Addreview';
const Contactus = () => {
    return (
        <div>

            <div className='d-block'>
                <Contactbanner></Contactbanner>
            </div>
            <div className="hero helpline rounded-full relative grid grid-row-1 md:grid-rows-6 ">
                <div className='helpline-img'>
                    <img src="https://i.ibb.co/qyjbT4L/helpline.webp" className="max-w-sm rounded-lg shadow-2xl max-h-[340px]" alt='help' />
                </div>
                <div className='info'>
               
                  <div  className='mail '>
                    <h1 className='font-black'>Location</h1>
                    <p>travelbug@gmail.com</p>
                    <p>+8801864562819</p>

                  </div>
                  <div className='mail'>
                    <h1  className='font-black'>Let's Talk</h1>
                    <p>168/170, Ave 01, Streets Suite 666 Mirpur DOHS, Bangladesh</p>
                

                  </div>
                  <div className='mail'>
                    <h1  className='font-black'>Visit Us</h1>
                    <p><a target='_blank' href='https://www.facebook.com/egenslab' rel="noreferrer">Facebook: https://www.facebook.com/egenslab</a></p>
                    <p><a target='_blank' href='https://www.twitter.com/egenslab' rel="noreferrer">Twitter: https://www.twitter.com/egenslab</a></p>
           

                  </div>
                </div>

            </div>
          {/* <div className='mb-5'>
              <ContactForm></ContactForm>
          </div> */}
          <div className='mt-5'>
            <Addreview></Addreview>
          </div>
        </div>
    );
};

export default Contactus;