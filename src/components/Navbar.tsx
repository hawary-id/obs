'use client';

import React, { useState } from 'react';

interface INavbarProps {}

export default function Navbar() {
   const [state, setState] = useState();
   return (
    <div className="w-full bg-white shadow-md sticky top-0">
        <div className="container py-4 mx-auto md:px-0 px-3">
        User
        </div>
    </div>
   );
}