import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import "../css/Nav.css";

function Nav() {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 50) setShow(true);
      else setShow(false);
    });

    return () => {
      window.addEventListener("scroll", () => {});
    } // 컴포넌트를 사용하지 않게 될 때, 스크롤에 대한 이벤트가 발생하면 호출되는 함수를 더 이상 호출되지 않게 해당 이벤트 리스너를 지워주는 부분입니다. 
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  }

  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <img
        alt="Netflix logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
        className="nav__logo"
        onClick={() => (window.location.href = "/")}
      />

      <input 
        value={searchValue}
        onChange={handleChange}
        className="nav__input"
        type="text"
        placeholder="영화를 검색해 주세요."
      />

      <img 
        alt="User logged"
        src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
        className="nav__avatar"
      />
    </nav>
  )
}

export default Nav