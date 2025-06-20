import React, {useEffect, useRef} from "react";
import { useState } from 'react';
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { Outlet, Link, NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import logo4 from '../../assets/images/logo4.svg';
import vvv from '../../assets/images/vvv.png';
import './header.style.js';
import './header.scss';

function Header() {
    const navigate = useNavigate();
    const el = useRef();
    const elSocials = useRef();
    // const q = gsap.utils.selector(el);
    const s = gsap.utils.selector(elSocials);
    // const tl = useRef();
    const tlMenu = useRef();
    const [checked, setChecked] = useState(false);


    const animeOne = () => {
        tlMenu.current = gsap.timeline()
        .fromTo(s(".menu-one"), {x: -20, opacity: 0}, {
            x: 0, opacity: 1, duration: .7, ease: "powerIn", transformOrigin: 'center center', stagger: 0.1
          })
        .fromTo(s(".menu-two"), {x: -20, opacity: 0}, {
            x: 0, opacity: 1, duration: .7, ease: "powerIn", transformOrigin: 'center center', stagger: 0.1
          })
        .fromTo(s(".menu-three"), {x: -20, opacity: 0}, {
            x: 0, opacity: 1, duration: .7, ease: "powerIn", transformOrigin: 'center center', stagger: 0.1
          })
        .fromTo(s(".menu-four"), {x: -20, opacity: 0}, {
            x: 0, opacity: 1, duration: .7, ease: "powerIn", transformOrigin: 'center center', stagger: 0.1
          })
        .fromTo(s(".menu-five"), {x: -20, opacity: 0}, {
            x: 0, opacity: 1, duration: .7, ease: "powerIn", transformOrigin: 'center center', stagger: 0.1
          })
    }
    const animeTwo = () => {
        tlMenu.current = gsap.timeline()
        .fromTo(s(".github"), {x: 20, opacity: 0}, {
            x: 0, opacity: 1, duration: .7, ease: "powerIn", transformOrigin: 'center center', stagger: 0.1
          })
        .fromTo(s(".linkedin"), {x: 20, opacity: 0}, {
            x: 0, opacity: 1, duration: .7, ease: "powerIn", transformOrigin: 'center center', stagger: 0.1
          })
        .fromTo(s(".twitter"), {x: 20, opacity: 0}, {
            x: 0, opacity: 1, duration: .7, ease: "powerIn", transformOrigin: 'center center', stagger: 0.1
          })
        .fromTo(s(".schedule"), {x: 20, opacity: 0}, {
            x: 0, opacity: 1, duration: .7, ease: "powerIn", transformOrigin: 'center center', stagger: 0.1
          })
    }

    const triggerAnime = () => {
        if (checked) {
            return animeOne(), animeTwo();
        }
        else if (!checked) {
            return null
        }
        return null
    }

    const check = () => {
        return checked = !checked
    }

    // useEffect(() => {
    //     tl.current = gsap.timeline()
    //   .to(q(".square"), {
    //     y: -15
    //   })
    //   .to(q(".square"), {
    //     duration: 1.5, ease: "bounce.out", y: 6, repeat: -1, yoyo: true
    //   });
    //   }, []);

      const nav = () => {
        return navigate('/'), window.location.reload();
        
      }

    return (
        <div className="header">
            <div className="logo" onClick={nav}>
            <object data={logo4} type="image/svg+xml" title="Logo" alt="Logo">
        <p>No SVG support, here's a substitute</p>
        <img src={logo4} alt="Logo" />
      </object>
            </div>

            <div className="menu-toggle">
            <input type="checkbox" className="nav__checkbox" id="nav-toggle" checked={checked} onChange={e => setChecked(e.target.checked)} />
            <label htmlFor="nav-toggle" className="nav__button">
                <span className="nav__icon">&nbsp;</span>
            </label>
            <div className="navigation" ref={elSocials}>
                <div className="large_menu">
                <a className="github" href="https://github.com/marouane-ait-zidan" target="_blank">
                    <div className="github_box">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M24 4.49338C12.95 4.49338 4 13.4434 4 24.4934C4 33.3434 9.725 40.8184 17.675 43.4684C18.675 43.6434 19.05 43.0434 19.05 42.5184C19.05 42.0434 19.025 40.4684 19.025 38.7934C14 39.7184 12.7 37.5684 12.3 36.4434C12.075 35.8684 11.1 34.0934 10.25 33.6184C9.55 33.2434 8.55 32.3184 10.225 32.2934C11.8 32.2684 12.925 33.7434 13.3 34.3434C15.1 37.3684 17.975 36.5184 19.125 35.9934C19.3 34.6934 19.825 33.8184 20.4 33.3184C15.95 32.8184 11.3 31.0934 11.3 23.4434C11.3 21.2684 12.075 19.4684 13.35 18.0684C13.15 17.5684 12.45 15.5184 13.55 12.7684C13.55 12.7684 15.225 12.2434 19.05 14.8184C20.65 14.3684 22.35 14.1434 24.05 14.1434C25.75 14.1434 27.45 14.3684 29.05 14.8184C32.875 12.2184 34.55 12.7684 34.55 12.7684C35.65 15.5184 34.95 17.5684 34.75 18.0684C36.025 19.4684 36.8 21.2434 36.8 23.4434C36.8 31.1184 32.125 32.8184 27.675 33.3184C28.4 33.9434 29.025 35.1434 29.025 37.0184C29.025 39.6934 29 41.8434 29 42.5184C29 43.0434 29.375 43.6684 30.375 43.4684C34.3454 42.128 37.7954 39.5763 40.2396 36.1724C42.6838 32.7685 43.9989 28.6839 44 24.4934C44 13.4434 35.05 4.49338 24 4.49338Z" fill="#adadad"/>
</svg>
<p>Github</p>
</div>
                    </a> 

                <a className="linkedin" href="https://www.linkedin.com/in/marouane-ait-zidan-911771319" target="_blank">
                <div className="linkedin_box">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M42 8.64706V39.3529C42 40.055 41.7211 40.7283 41.2247 41.2247C40.7283 41.7211 40.055 42 39.3529 42H8.64706C7.94502 42 7.27173 41.7211 6.77531 41.2247C6.27889 40.7283 6 40.055 6 39.3529V8.64706C6 7.94502 6.27889 7.27173 6.77531 6.77531C7.27173 6.27889 7.94502 6 8.64706 6H39.3529C40.055 6 40.7283 6.27889 41.2247 6.77531C41.7211 7.27173 42 7.94502 42 8.64706V8.64706ZM16.5882 19.7647H11.2941V36.7059H16.5882V19.7647ZM17.0647 13.9412C17.0675 13.5407 16.9914 13.1436 16.8407 12.7726C16.69 12.4016 16.4677 12.0638 16.1866 11.7787C15.9054 11.4936 15.5707 11.2666 15.2018 11.1108C14.8329 10.955 14.4369 10.8734 14.0365 10.8706H13.9412C13.1268 10.8706 12.3458 11.1941 11.7699 11.7699C11.1941 12.3458 10.8706 13.1268 10.8706 13.9412C10.8706 14.7555 11.1941 15.5366 11.7699 16.1124C12.3458 16.6883 13.1268 17.0118 13.9412 17.0118V17.0118C14.3417 17.0216 14.7402 16.9525 15.1139 16.8083C15.4877 16.664 15.8293 16.4476 16.1194 16.1713C16.4095 15.895 16.6423 15.5642 16.8045 15.1979C16.9667 14.8316 17.0551 14.437 17.0647 14.0365V13.9412ZM36.7059 26.4141C36.7059 21.3212 33.4659 19.3412 30.2471 19.3412C29.1932 19.2884 28.1438 19.5129 27.2037 19.9922C26.2637 20.4715 25.4657 21.189 24.8894 22.0729H24.7412V19.7647H19.7647V36.7059H25.0588V27.6953C24.9823 26.7725 25.273 25.8567 25.8677 25.1469C26.4625 24.4372 27.3133 23.9908 28.2353 23.9047H28.4365C30.12 23.9047 31.3694 24.9635 31.3694 27.6318V36.7059H36.6635L36.7059 26.4141Z" fill="#66add3"/>
</svg>
<p>LinkedIn</p>
                    </div>
                    </a>  

                <a className="twitter" href="https://x.com/zidane_marouane" target="_blank">
                <div className="twitter_box">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39.9049 15.8401C39.9293 16.1928 39.9293 16.5454 39.9293 16.9013C39.9293 27.7451 31.6742 40.2513 16.5793 40.2513V40.2448C12.1203 40.2513 7.75381 38.974 4 36.5657C4.64839 36.6437 5.30002 36.6827 5.95328 36.6843C9.64859 36.6876 13.2383 35.4477 16.1454 33.1645C12.6338 33.0979 9.55434 30.8083 8.47857 27.4656C9.70871 27.7028 10.9762 27.6541 12.1836 27.3242C8.35507 26.5507 5.60065 23.1869 5.60065 19.2803C5.60065 19.2446 5.60065 19.2104 5.60065 19.1763C6.74142 19.8117 8.01869 20.1643 9.32521 20.2033C5.71928 17.7934 4.60776 12.9964 6.78529 9.24579C10.9519 14.3727 17.0993 17.4895 23.6986 17.8194C23.0372 14.9691 23.9407 11.9823 26.0727 9.97868C29.378 6.87163 34.5765 7.03088 37.6835 10.3346C39.5214 9.97218 41.283 9.29779 42.895 8.34228C42.2823 10.2419 41.0002 11.8556 39.2874 12.881C40.9141 12.6892 42.5034 12.2537 44 11.5891C42.8982 13.2401 41.5105 14.6783 39.9049 15.8401Z" fill="#61bdf6"/>
</svg>
<p>Twitter</p>
                    </div>
                    </a>

                <a className="schedule" href="mailto:marouaneaitzidan@gmail.com" target="_blank">
                <div className="schedule_box">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" rx="24" />
                        <path d="M12 18C12 16.8954 12.8954 16 14 16H34C35.1046 16 36 16.8954 36 18V30C36 31.1046 35.1046 32 34 32H14C12.8954 32 12 31.1046 12 30V18Z" stroke="white" strokeWidth="2"/>
                        <path d="M12 18L24 26L36 18" stroke="white" strokeWidth="2"/>
                    </svg>
<p>Email</p>
                </div>
                </a>

                    </div>    
                <div className="small_menu">
                    <ul>
                        <li className="menu-one"><NavLink className="nav-link" onClick={check} to="/">Home</NavLink></li>
                        <li className="menu-two"><NavLink className="nav-link" onClick={check} to="/work">Work</NavLink></li>
                        <li className="menu-three"><a className="nav-link" href="https://medium.com/@marouaneaitzidan" target="_blank">Writing</a></li>
                        <li className="menu-four"><a className="nav-link" href="https://drive.google.com/file/d/1jRn1cWg8fuPxRn1OgTDpI1blb-hE_dej/view?usp=drive_link" target="_blank">Resume</a></li>
                        <li className="menu-five"><a className="nav-link" href="mailto:marouaneaitzidan@gmail.com" target="_blank">Contact</a></li>
                    </ul>
                    </div>    
            </div>
            </div>


        </div>
    )
}

export default Header