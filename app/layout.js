"use client"

import { useEffect } from "react";
import { getSession } from "./requests";

export default function RootLayout({ children }) {
  useEffect(()=>{
    getSession().then(data=>{
      if(!data.isLoggedIn && window.location.pathname !=='/auth'){
        window.location.href='/auth';
      }
    })
  })
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}