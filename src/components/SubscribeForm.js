"use client"

import React, { useState } from 'react';
// import { subscribeToBinUpdates } from '../utils/api';

function SubscribeForm({ userId }) {
  const [email, setEmail] = useState('');

  const handleSubscribe = async () => {
    // await subscribeToBinUpdates(userId, email);
    alert('Subscription successful!');
  };

  return (
    <div>
      <h2>Subscribe to Bin Updates</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button onClick={handleSubscribe}>Subscribe</button>
    </div>
  );
}

export default SubscribeForm;