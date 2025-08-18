// src/components/SharedButton.jsx
import React from 'react';


const SharedButton = ({ text, onClick }) => (
<button
onClick={onClick}
className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium transition"
>
{text}
</button>
);


export default SharedButton;