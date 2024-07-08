import { NavLink } from "react-router-dom";
import { HeaderComponent } from "./styles";

const Header = () => {
  return (
    <HeaderComponent>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Filims">Filims</NavLink>
    </HeaderComponent>
  );
};

export default Header;
