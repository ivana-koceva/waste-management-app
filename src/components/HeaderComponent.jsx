import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FiMenu } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.header`
    background: #FFFFFF;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 1px 3.5px 2px rgba(0, 0, 0, 0.1);
`
const HeaderIcon = styled.div`
    padding: 1rem;
    margin: 0 2rem;
`
const ProfileLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

export default function HeaderComponent() {
    return (
      <HeaderWrapper>
        <HeaderIcon>  
          <div className="dropdown">
            <FiMenu size="24px" color="#7DCE2C" data-bs-toggle="dropdown" aria-expanded="true"></FiMenu>
          <ul className="dropdown-menu">
            <li><Link to="/" className="dropdown-item">Feed</Link></li>
            <li><Link to="/leaderboard" className="dropdown-item">Leaderboard</Link></li>
            <li><Link to="/submission" className="dropdown-item">Submission</Link></li>
          </ul>
        </div>
        </HeaderIcon>
        <HeaderIcon>
          <ProfileLink to="/profile">
            <FiUser size="24px" color="#7DCE2C"></FiUser>
          </ProfileLink>
        </HeaderIcon>
      </HeaderWrapper>
    )
  };