import React, { useContext, useEffect, useState } from 'react';

import axios from 'axios';
import { AuthContext } from '../../contexts/AuthProvider';



const Orders = () => {
    const { user } = useContext(AuthContext);
    console.log('my name',user.email)
    const [userHistory, setUserHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserHistory = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/orders/${user.email}`);
                setUserHistory(response.data); // Set the entire array of transactions
                setLoading(false);
            } catch (error) {
                setError('Error fetching user history');
                setLoading(false);
            }
        };

        fetchUserHistory();
    }, [user.email]);

    return (
        <div style={{ border: '2px solid black', padding: '20px', borderRadius: '10px' }}>
            <h1>User Order History</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {userHistory.length > 0 && (
                <div>
                    <h1>Email: {user.email}</h1>
                    <ul>
                        {userHistory.map((transaction) => (
                            <li style={{ border: '2px solid black', padding: '5px' }} key={transaction._id}>
                                <h2>Transaction ID: {transaction.transactionId}</h2>
                                {/* Add other transaction details you want to display */}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Orders;
