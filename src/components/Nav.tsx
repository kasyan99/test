import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props { }

function Nav(props: Props) {
   const Navg = styled.nav<{ active?: boolean }>`
   background: papayawhip;
   height: ${props => (props.active ? '200px' : 'auto')};
   a{
      color:red;
   }
   `
   return (
      <Navg>
         <Link to="/">Home</Link>
         <Link to="/profile">Profile</Link>
         <Link to="/users">Users</Link>
      </Navg>
   )
}

export default Nav
