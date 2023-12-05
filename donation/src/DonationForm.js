// DonationForm.js
import React, { useState } from 'react';

const DonationForm = ({ onAddDonation }) => {
    const [donorName, setDonorName] = useState('');
    const [amount, setAmount] = useState('');

    const handleAddDonation = async () => {
        if (donorName && amount) {
            const newDonation = {
                donorName,
                amount: parseFloat(amount),
            };

            try {
                const response = await fetch('http://localhost:3000/donations', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newDonation),
                });

                const data = await response.json();

                onAddDonation(data);
                setDonorName('');
                setAmount('');
            } catch (error) {
                console.error('Error adding donation:', error);
            }
        }
    };

    return (
        <div className="mb-4">
            <h2>Donation Form</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Donor Name:</label>
                    <input type="text" className="form-control" value={donorName} onChange={(e) => setDonorName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Amount:</label>
                    <input type="number" className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleAddDonation}>
                    Add Donation
                </button>
            </form>
        </div>
    );
};

export default DonationForm;
