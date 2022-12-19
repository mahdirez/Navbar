import React, { useEffect, useRef, useState } from 'react'
import { links, socials } from './navData';

function Navbar() {
    const [showLink, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);


    useEffect(()=> {
         const linkHeight = linksRef.current.getBoundingClientRect().height;
         if(showLink){
              linksContainerRef.current.style.height = `${linkHeight}px`
         }else{
              linksContainerRef.current.style.height = "0px"
         }
    },[showLink])
  return (
    <nav>
    <div className="container">
         <div className="nav-logo">
              <button className="nav-toggle" onClick={()=> setShowLinks(!showLink)}>
                   {
                        showLink ? <i class="bi bi-x"></i> : <i class="bi bi-list"></i>
                   }
              </button>
              <p>NAVBAR</p>
         </div>
         <div className="nav-links" ref={linksContainerRef}>
              <ul className="list" ref={linksRef}>
              {
                   links.map((link) => {
                        const {id,url,text} = link;
                        return (
                             <li key={id}>
                                  <a href={url}>{text}</a>
                             </li>
                        )
                   })
              }
              </ul>
         </div>
         <ul className="nav-social">
              {
                   socials.map((social) => {
                        const {id,url,icon} = social;
                        return (
                             <li key={id}>
                                  <a href={url}>{icon}</a>
                             </li>
                        )
                   })
              }
         </ul>
    </div>
</nav>
  )
}

export default Navbar