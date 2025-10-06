import React, { useState } from 'react';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            alert('Sign Up Successful');
        } else {
            alert('Sign Up Failed');
        }
    };

    return (
        <div style={{ 
            maxWidth: '400px', 
            margin: '50px auto', 
            padding: '40px', 
            border: 'none', 
            borderRadius: '20px', 
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.12)',
            background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
            fontFamily: "'Poppins', sans-serif",
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative elements */}
            <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                background: 'linear-gradient(45deg, rgba(108, 99, 255, 0.1), transparent)'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '-30px',
                left: '-30px',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'linear-gradient(45deg, transparent, rgba(108, 99, 255, 0.1))'
            }}></div>

            <h2 style={{ 
                textAlign: 'center', 
                marginBottom: '30px', 
                color: '#4a4a4a',
                fontSize: '32px',
                fontWeight: '700',
                background: 'linear-gradient(to right, #6c63ff, #9b59b6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                position: 'relative',
                zIndex: '1'
            }}>
                Create Your Account
            </h2>
            <form onSubmit={handleSignUp}>
                <div style={{ marginBottom: '25px', position: 'relative', zIndex: '1' }}>
                    <label style={{ 
                        display: 'block', 
                        marginBottom: '10px', 
                        color: '#5a5a5a',
                        fontSize: '15px',
                        fontWeight: '600'
                    }}>
                        Username:
                    </label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={{ 
                            width: '100%', 
                            padding: '15px 20px', 
                            borderRadius: '10px', 
                            border: '2px solid #e0e0e0',
                            fontSize: '15px',
                            transition: 'all 0.3s ease',
                            boxSizing: 'border-box',
                            backgroundColor: '#fff',
                            color: '#333',
                            boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)'
                        }}
                        onFocus={(e) => {
                            e.target.style.borderColor = '#6c63ff';
                            e.target.style.boxShadow = '0 0 0 3px rgba(108, 99, 255, 0.2)';
                            e.target.style.backgroundColor = '#fff';
                        }}
                        onBlur={(e) => {
                            e.target.style.borderColor = '#e0e0e0';
                            e.target.style.boxShadow = 'inset 0 1px 3px rgba(0,0,0,0.05)';
                            e.target.style.backgroundColor = '#fff';
                        }}
                    />
                </div>
                <div style={{ marginBottom: '30px', position: 'relative', zIndex: '1' }}>
                    <label style={{ 
                        display: 'block', 
                        marginBottom: '10px', 
                        color: '#5a5a5a',
                        fontSize: '15px',
                        fontWeight: '600'
                    }}>
                        Password:
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ 
                            width: '100%', 
                            padding: '15px 20px', 
                            borderRadius: '10px', 
                            border: '2px solid #e0e0e0',
                            fontSize: '15px',
                            transition: 'all 0.3s ease',
                            boxSizing: 'border-box',
                            backgroundColor: '#fff',
                            color: '#333',
                            boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)',
                            letterSpacing: '1px'
                        }}
                        onFocus={(e) => {
                            e.target.style.borderColor = '#6c63ff';
                            e.target.style.boxShadow = '0 0 0 3px rgba(108, 99, 255, 0.2)';
                            e.target.style.backgroundColor = '#fff';
                        }}
                        onBlur={(e) => {
                            e.target.style.borderColor = '#e0e0e0';
                            e.target.style.boxShadow = 'inset 0 1px 3px rgba(0,0,0,0.05)';
                            e.target.style.backgroundColor = '#fff';
                        }}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        width: '100%',
                        padding: '16px',
                        backgroundColor: '#6c63ff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '10px',
                        cursor: 'pointer',
                        fontWeight: '600',
                        fontSize: '16px',
                        letterSpacing: '0.5px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 5px 15px rgba(108, 99, 255, 0.3)',
                        position: 'relative',
                        zIndex: '1',
                        overflow: 'hidden'
                    }}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#5a52d6';
                        e.target.style.boxShadow = '0 7px 20px rgba(108, 99, 255, 0.4)';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = '#6c63ff';
                        e.target.style.boxShadow = '0 5px 15px rgba(108, 99, 255, 0.3)';
                    }}
                >
                    Sign Up
                    <span style={{
                        position: 'absolute',
                        background: 'rgba(255,255,255,0.2)',
                        width: '100%',
                        height: '50px',
                        left: '0',
                        top: '-50px',
                        transform: 'rotate(15deg)',
                        transition: 'all 0.3s',
                        pointerEvents: 'none'
                    }}></span>
                </button>
                <div style={{
                    textAlign: 'center',
                    marginTop: '25px',
                    color: '#888',
                    fontSize: '14px',
                    position: 'relative',
                    zIndex: '1'
                }}>
                    Already have an account? <a href="#" style={{
                        color: '#6c63ff',
                        textDecoration: 'none',
                        fontWeight: '600',
                        transition: 'all 0.2s',
                        borderBottom: '1px dashed #6c63ff'
                    }}
                    onMouseOver={(e) => {
                        e.target.style.color = '#4a43c9';
                        e.target.style.borderBottomColor = '#4a43c9';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.color = '#6c63ff';
                        e.target.style.borderBottomColor = '#6c63ff';
                    }}>
                        Login
                    </a>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
