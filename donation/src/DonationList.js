// DonationList.js
import React, { useState } from 'react';

const DonationList = ({ donations }) => {
    const [sortedDonations, setSortedDonations] = useState([...donations]);

    const sortByAmount = (order) => {
        const sorted = [...donations].sort((a, b) => (order === 'asc' ? a.amount - b.amount : b.amount - a.amount));
        setSortedDonations(sorted);
    };

    const sortByName = (order) => {
        const sorted = [...donations].sort((a, b) => (order === 'asc' ? a.donorName.localeCompare(b.donorName) : b.donorName.localeCompare(a.donorName)));
        setSortedDonations(sorted);
    };

    return (
        <div>
            <h2>Donation List</h2>
            <div className="mb-3">
                <button className="btn btn-primary me-2" onClick={() => sortByAmount('asc')}>
                    Sort by Amount (Low to High)
                </button>
                <button className="btn btn-primary me-2" onClick={() => sortByAmount('desc')}>
                    Sort by Amount (High to Low)
                </button>
                <button className="btn btn-primary me-2" onClick={() => sortByName('asc')}>
                    Sort by Name (A-Z)
                </button>
                <button className="btn btn-primary" onClick={() => sortByName('desc')}>
                    Sort by Name (Z-A)
                </button>
            </div>
            <ul className="list-group">
                {sortedDonations.map((donation) => (
                    <li key={donation.id} className="list-group-item">
                        {donation.donorName} donated ${donation.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DonationList;
