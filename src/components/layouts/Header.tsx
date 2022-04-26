import React from "react";
import { Navlist } from "../../atom/Navlist";
import styles from "./Header.module.css";
import logo from "../../asset/img/logo_dk_origin.png";
import logo_white from "../../asset/img/logo_dk_white.png";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const [isMobile, SetIsMobile] = useState<Boolean>(false);
  const [toggleIcon, setToggleIcon] = useState<Boolean>(true);
  const [navIndex, setNavIndex] = useState<Number>(0);
  const underline = useRef<HTMLElement>(null);


  const ClickNav = (e: React.MouseEvent<HTMLAnchorElement>, index: number): void => {
    let left: Number = e.currentTarget.offsetLeft;
    if (underline.current instanceof HTMLElement) {
      underline.current.style.left = left + "px";
      underline.current.style.opacity = "1";
      setNavIndex(index);
    }
  };

  const ClickToogle = (e: React.MouseEvent): void => {
    let content_wrap = e.currentTarget.previousSibling;
    if (content_wrap instanceof HTMLElement) {
      {
        if(content_wrap.style.display == "flex"){
          content_wrap.style.display = "none";
          setToggleIcon(true);
        }else{
          content_wrap.style.display = "flex";
          setToggleIcon(false);
        }
      }
    }
  };

  return (
    <div>
      <header>
        <nav className={styles.Header__container}>
          <div className={styles.header__img__wrap}>
            <img src={logo_white} width="200px" alt="logo" />
          </div>
          <div className={styles.header__content_wrap}>
            {Navlist.map((prop, index) => {
              return (
                <a
                  href="#"
                  key={index}
                  style={navIndex ===index ?{color:"orange"} : {}}
                  onClick={(e) => {
                    ClickNav(e, index);
                  }}
                >
                  {prop.title}
                </a>
              );
            })}
            <span ref={underline} className={styles.underline}></span>
          </div>
          <div
            className={styles.header__toogleBtn}
            onClick={ClickToogle}
          >
            <FontAwesomeIcon icon={toggleIcon?faBars: faXmark} />
          </div>
        </nav>
      </header>
    </div>
  );
};
