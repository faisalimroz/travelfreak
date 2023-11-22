import Banner from '../../../Banner/Banner';
import SearchForm from '../SearchForm/SearchForm';
import Tourguide from '../../../Tourguide/Tourguide';
import Counterup from '../Counterup/Counterup';

import Demo from '../../../Review/Demo/Review';


const Home = () => {
    return (
        <div>
              <Banner></Banner>
            <SearchForm></SearchForm>
            <Tourguide></Tourguide>
            <Counterup></Counterup>
            <Demo></Demo>
            {/* <Reviews></Reviews> */}

            

        </div>
    );
};

export default Home;