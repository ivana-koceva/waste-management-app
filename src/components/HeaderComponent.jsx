import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FiMenu } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import PrimaryButtonComponent from "./PrimaryButtonComponent";

const HeaderWrapper = styled.header`
    background: #FFFFFF;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 1px 3.5px 2px rgba(0, 0, 0, 0.1);
    padding: 1rem 2.5rem;

    @media (max-width: 767px) {
      padding: 1rem 1.5rem;
    }
`
const HeaderIconContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const HeaderIcon = styled.div`
    margin: 0 20px;
`
const ProfileLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

export default function HeaderComponent() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 767);

  useEffect(() => {
      const handleResize = () => {
          setIsSmallScreen(window.innerWidth <= 767);
      };

      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);
    return (
      <HeaderWrapper>
        <HeaderIconContainer>
        <HeaderIcon>  
          <div className="dropdown">
            <FiMenu size="24px" color="#000000" data-bs-toggle="dropdown" aria-expanded="true"></FiMenu>
          <ul className="dropdown-menu">
            <li><Link to="/" className="dropdown-item">Feed</Link></li>
            <li><Link to="/leaderboard" className="dropdown-item">Leaderboard</Link></li>
            <li><Link to="/map" className="dropdown-item">Map</Link></li>
          </ul>
        </div>
        </HeaderIcon>
        {!isSmallScreen && (
          <HeaderIcon>
          <ProfileLink to="/profile">
            <FiUser size="24px" color="#000000"></FiUser>
          </ProfileLink>
        </HeaderIcon>
        )}
        </HeaderIconContainer>
        <Link to="/submission">
          <PrimaryButtonComponent text="Report Waste">
          </PrimaryButtonComponent>
        </Link>
        {isSmallScreen && (
          <HeaderIconContainer>
          <HeaderIcon>
          <ProfileLink to="/profile">
            <FiUser size="24px" color="#000000"></FiUser>
          </ProfileLink>
        </HeaderIcon></HeaderIconContainer>
        )}
      </HeaderWrapper>
    )
  };