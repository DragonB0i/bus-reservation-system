import React, { useState } from 'react';

const TicketPurchase = () => {
    const [busNumber, setBusNumber] = useState('1');
    const [ticketCount, setTicketCount] = useState(1);

    const handlePurchase = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/purchase', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ bus_number: busNumber, ticket_count: ticketCount }),
        });

        if (response.ok) {
            alert('Purchase Successful');
            window.location.href = 'confirmation.html';
        } else {
            alert('Purchase Failed');
        }
    };

    return (
        <div style={{
            maxWidth: '500px',
            margin: '40px auto',
            padding: '30px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        }}>
            <h2 style={{
                textAlign: 'center',
                marginBottom: '30px',
                color: '#2c3e50',
                fontSize: '32px',
                fontWeight: '700',
                background: 'linear-gradient(to right, #3498db, #9b59b6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
            }}>
                Purchase Your Tickets
            </h2>
            
            <form onSubmit={handlePurchase} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{
                        color: '#2c3e50',
                        fontSize: '16px',
                        fontWeight: '600',
                        marginLeft: '5px'
                    }}>
                        Select Destination:
                    </label>
                    <select 
                        value={busNumber} 
                        onChange={(e) => setBusNumber(e.target.value)} 
                        required
                        style={{
                            padding: '14px 15px',
                            borderRadius: '10px',
                            border: '2px solid #e0e0e0',
                            fontSize: '15px',
                            backgroundColor: '#fff',
                            color: '#2c3e50',
                            cursor: 'pointer',
                            transition: 'all 0.3s',
                            appearance: 'none',
                            backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239b59b6%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 15px top 50%',
                            backgroundSize: '12px auto'
                        }}
                        onFocus={(e) => {
                            e.target.style.borderColor = '#9b59b6';
                            e.target.style.boxShadow = '0 0 0 3px rgba(155, 89, 182, 0.2)';
                        }}
                        onBlur={(e) => {
                            e.target.style.borderColor = '#e0e0e0';
                            e.target.style.boxShadow = 'none';
                        }}
                    >
                        <option value="1" style={{ padding: '10px' }}>Chennai to Ongole</option>
                        <option value="2" style={{ padding: '10px' }}>Chennai to Gudur</option>
                        <option value="3" style={{ padding: '10px' }}>Chennai to Chittor</option>
                    </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{
                        color: '#2c3e50',
                        fontSize: '16px',
                        fontWeight: '600',
                        marginLeft: '5px'
                    }}>
                        Number of Tickets:
                    </label>
                    <input 
                        type="number" 
                        value={ticketCount} 
                        onChange={(e) => setTicketCount(e.target.value)} 
                        min="1" 
                        max="3" 
                        required
                        style={{
                            padding: '14px 15px',
                            borderRadius: '10px',
                            border: '2px solid #e0e0e0',
                            fontSize: '15px',
                            backgroundColor: '#fff',
                            color: '#2c3e50',
                            transition: 'all 0.3s'
                        }}
                        onFocus={(e) => {
                            e.target.style.borderColor = '#3498db';
                            e.target.style.boxShadow = '0 0 0 3px rgba(52, 152, 219, 0.2)';
                        }}
                        onBlur={(e) => {
                            e.target.style.borderColor = '#e0e0e0';
                            e.target.style.boxShadow = 'none';
                        }}
                    />
                </div>

                <button
                    type="submit"
                    style={{
                        padding: '16px',
                        backgroundColor: '#e74c3c',
                        color: 'white',
                        border: 'none',
                        borderRadius: '10px',
                        cursor: 'pointer',
                        fontWeight: '700',
                        fontSize: '18px',
                        letterSpacing: '0.5px',
                        transition: 'all 0.3s',
                        boxShadow: '0 4px 10px rgba(231, 76, 60, 0.3)',
                        textTransform: 'uppercase',
                        marginTop: '10px'
                    }}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#c0392b';
                        e.target.style.boxShadow = '0 6px 15px rgba(231, 76, 60, 0.4)';
                        e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = '#e74c3c';
                        e.target.style.boxShadow = '0 4px 10px rgba(231, 76, 60, 0.3)';
                        e.target.style.transform = 'translateY(0)';
                    }}
                >
                    Confirm Purchase
                </button>
            </form>

            <div style={{
                marginTop: '25px',
                padding: '15px',
                borderRadius: '10px',
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                textAlign: 'center',
                borderLeft: '4px solid #3498db'
            }}>
                <p style={{ 
                    margin: '0', 
                    color: '#2c3e50',
                    fontWeight: '500'
                }}>
                    <span style={{ color: '#e74c3c', fontWeight: '700' }}>Note:</span> Maximum 3 tickets per purchase
                </p>
            </div>
        </div>
    );
};

export default TicketPurchase;