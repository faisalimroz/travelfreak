import { useEffect, useState } from 'react';
import './SearchForm.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
    const [travelinfo, setTravelinfo] = useState({
        from: '',
        to:'',
        date: '',
        transport: 'plane',
    });
    // console.log(travelinfo.from)
    const navigate=useNavigate()
    const [isLoading, setIsLoading] = useState(false);

    const [destinationOptions, setDestinationOptions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get('http://localhost:5000/destinations');
                const data = response.data;
                console.log(data)
                setDestinationOptions(data);
                console.log(destinationOptions)
                
            } catch (error) {
                console.error('Error fetching destinations:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleChange = (event) => {
        event.persist();
        setTravelinfo((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:5000/search', {
            from: travelinfo.from,
            to: travelinfo.to,
            date: travelinfo.date,
          });
          const searchData = response.data;
          console.log('datas',searchData);
          navigate('/results', { state: { searchData } });
        } catch (error) {
          console.error(error);
        }
        console.log('Form Data:', travelinfo);
      };
      
    return (
        <div className="search-form">
            {isLoading && <div className="loading-spinner">Loading...</div>}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="from">From:</label>
                    <select
                        id="from"
                        name="from"
                        value={travelinfo.from}
                        onChange={handleChange}
                       
                    >
                       
                        {destinationOptions.map((option) => (
                            <option key={option._id} value={option.from}>
                                {option.from}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="to">To:</label>
                    <select
                        id="to"
                        name="to"
                        value={travelinfo.to}
                        onChange={handleChange}
                       
                    >
                       
                        {destinationOptions.map((option) => (
                            <option key={option._id} value={option.to}>
                                {option.to}
                            </option>
                        ))}
                    </select>
                </div>
                

                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={travelinfo.date}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="transport">Transport:</label>
                    <select
                        id="transport"
                        name="transport"
                        value={travelinfo.transport}
                        onChange={handleChange}
                    >
                        <option value="plane">Plane</option>
                        <option value="train">Train</option>
                        <option value="bus">Bus</option>
                    </select>
                </div>

                <button className='p-2 bg-green-200' type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchForm;
