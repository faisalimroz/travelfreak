import React from 'react';
import { useEffect, useState } from 'react';

import axios from 'axios';
const Adminhome = () => {
    const [userHistory, setUserHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchUserHistory = async () => {
            try {
                const response = await axios.get('http://localhost:5000/allorder');
                setUserHistory(response.data); // Set the entire array of transactions
                setLoading(false);
            } catch (error) {
                setError('Error fetching user history');
                setLoading(false);
            }
        };

        fetchUserHistory();
    }, []);
    return (
        <div>
            <div className='mt-4 mb-4' style={{ border: '1px solid black', padding: '10px' }}>
                <h1>All User Order History</h1>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {userHistory.length > 0 && (
                    <div>

                        <ul>
                            {userHistory.map((transaction) => (
                                <li style={{ border: '1px solid black', padding: '5px' }} key={transaction._id}>
                                    <p>Transaction ID: {transaction.transactionId}</p>
                                    <p>Product ID: {transaction.id}</p>
                                    <p>Date: {transaction.date}</p>
                                    <p>User: {transaction.user}</p>
                                    {/* Add other transaction details you want to display */}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Adminhome;