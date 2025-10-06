import React, { useState } from 'react';
import SignUp from './components/SignUp';
import Login from './components/Login';
import TicketPurchase from './components/TicketPurchase';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [activeForm, setActiveForm] = useState('login');

    return (
        <div style={{
            minHeight: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            padding: '20px',
            boxSizing: 'border-box',
            overflowX: 'hidden'
        }}>
            {!loggedIn ? (
                <div style={{
                    display: 'flex',
                    maxWidth: '900px',
                    width: '100%',
                    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    backgroundColor: '#fff',
                    flexDirection: window.innerWidth < 768 ? 'column' : 'row'
                }}>
                    {/* Left side - Form selection tabs */}
                    <div style={{
                        flex: '1',
                        background: 'linear-gradient(135deg, #6c63ff 0%, #4CAF50 100%)',
                        padding: '40px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        color: 'white',
                        position: 'relative',
                        minHeight: window.innerWidth < 768 ? '200px' : 'auto'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            right: '0',
                            display: 'flex'
                        }}>
                            <button 
                                onClick={() => setActiveForm('login')}
                                style={{
                                    flex: '1',
                                    padding: '15px',
                                    border: 'none',
                                    background: activeForm === 'login' ? 'rgba(255,255,255,0.2)' : 'transparent',
                                    color: 'white',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s',
                                    fontSize: '16px'
                                }}
                            >
                                Login
                            </button>
                            <button 
                                onClick={() => setActiveForm('signup')}
                                style={{
                                    flex: '1',
                                    padding: '15px',
                                    border: 'none',
                                    background: activeForm === 'signup' ? 'rgba(255,255,255,0.2)' : 'transparent',
                                    color: 'white',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s',
                                    fontSize: '16px'
                                }}
                            >
                                Sign Up
                            </button>
                        </div>
                        
                        <h2 style={{
                            fontSize: window.innerWidth < 768 ? '24px' : '32px',
                            marginBottom: '20px',
                            textAlign: 'center',
                            marginTop: '40px'
                        }}>
                            {activeForm === 'login' ? 'Welcome Back!' : 'Join Us Today!'}
                        </h2>
                        <p style={{
                            textAlign: 'center',
                            opacity: '0.9',
                            lineHeight: '1.6',
                            fontSize: window.innerWidth < 768 ? '14px' : '16px',
                            padding: '0 10px'
                        }}>
                            {activeForm === 'login' 
                                ? 'Login to access your account and book tickets.' 
                                : 'Create an account to start your journey with us.'}
                        </p>
                    </div>
                    
                    {/* Right side - Active form */}
                    <div style={{
                        flex: '1',
                        padding: window.innerWidth < 768 ? '30px 20px' : '40px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}>
                        {activeForm === 'login' ? (
                            <Login setLoggedIn={setLoggedIn} />
                        ) : (
                            <SignUp />
                        )}
                    </div>
                </div>
            ) : (
                <div style={{ width: '100%', maxWidth: '1200px', padding: '20px' }}>
                    <TicketPurchase />
                </div>
            )}
        </div>
    );
};

export default App;