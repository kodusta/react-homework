// App.js
import React, {useState, useEffect} from 'react';
import DonationForm from './DonationForm';
import DonationList from './DonationList';

const App = () => {
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/donations');
            const data = await response.json();
            setDonations(data);
        } catch (error) {
            console.error('Error fetching donations:', error);
        }
    };

    const addDonation = (newDonation) => {
        setDonations([...donations, newDonation]);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Donation System</h1>
            <DonationForm onAddDonation={addDonation}/>
            <DonationList donations={donations}/>
        </div>
    );
};

export default App;
