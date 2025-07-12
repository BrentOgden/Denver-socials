// src/components/PawDivider.jsx
import React from 'react';
import { GiPartyPopper } from "react-icons/gi";


export default function Divider({ count = 20, size = '2rem', color = '#8A3202' }) {
  return (
    <div className="flex justify-center md:my-8 md:space-x-4 px-4 md:px-0">
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
