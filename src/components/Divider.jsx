// src/components/PawDivider.jsx
import React from 'react';
import { GiPartyPopper } from "react-icons/gi";


export default function Divider({ count = 20, size = '2rem', color = '#8A3202' }) {
  return (
    <div className="flex justify-center my-8 space-x-4">
      {Array.from({ length: count }).map((_, i) => (
        <GiPartyPopper
          key={i}
          size={size}
          color={color}
        />
      ))}
    </div>
  );
}
