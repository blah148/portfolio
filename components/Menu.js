import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './header.module.css';

export default function Menu({ userId = null }) {

  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(); // Create a ref for the menu
  
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Event listener to close the menu if click occurs outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    // Add event listener when the menu is shown
    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]); // Only re-run if showMenu changes

  return (
    <>
      <svg className="menuIcon" onClick={toggleMenu} viewBox="0 0 448 512" aria-hidden="true" focusable="false">
        <path fill="#c3c7c7" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
      </svg>
      <div ref={menuRef} className={`menu ${showMenu ? 'show' : ''}`}>
 				 <Link className="menuItem" href="/about" passHref>
					 <svg id="icon" width="32" height="32" viewBox="0 0 32 32">
						 <defs>
							 <style>{`.cls-1 { fill: none; }`}</style>
						 </defs>
						 <polygon points="17 22 17 14 13 14 13 16 15 16 15 22 12 22 12 24 20 24 20 22 17 22"/>
						 <path d="M16,8a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,16,8Z"/>
						 <path d="M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4Z"/>
					 </svg>
           <p className="menuLabel">About</p>
         </Link>
 				 <Link className="menuItem" href="/resume" passHref>
				 	 <svg version="1.1" id="icon" x="0px" y="0px"
						width="32px" height="32px" viewBox="0 0 32 32" style={{ enableBackground: 'new 0 0 32 32' }} xmlSpace="preserve">
						 <style>{`.st0{fill:none;}`}</style>
						 <title>document</title>
						 <path d="M25.7,9.3l-7-7C18.5,2.1,18.3,2,18,2H8C6.9,2,6,2.9,6,4v24c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V10C26,9.7,25.9,9.5,25.7,9.3
							z M18,4.4l5.6,5.6H18V4.4z M24,28H8V4h8v6c0,1.1,0.9,2,2,2h6V28z"/>
						 <rect x="10" y="22" width="12" height="2"/>
						 <rect x="10" y="16" width="12" height="2"/>
					 </svg>
           <p className="menuLabel">Résumé</p>
         </Link>
				 <Link className="menuItem" href="/contact" passHref>
					 <svg id="icon" viewBox="0 0 32 32">
						 <defs>
						  	<style>{`.cls-1{fill:none;}`}</style>
						 </defs>
						 <title>email</title>
					  	<path d="M28,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6ZM25.8,8,16,14.78,6.2,8ZM4,24V8.91l11.43,7.91a1,1,0,0,0,1.14,0L28,8.91V24Z" transform="translate(0)"/>
					 </svg>
					 <p className="menuLabel">Contact</p>
				 </Link>
      </div>
    </>
  );
}


