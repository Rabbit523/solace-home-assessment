import { NavContainer, NavLink } from "..";

const Header: React.FC = () => {
  return (
    <NavContainer>
      <NavLink href="https://www.solace.health/">
        <img
          src="https://app.ashbyhq.com/api/images/org-theme-wordmark/a6641cc1-44a7-482d-ac23-ad45e9bf44dd/6f7436ea-bdf7-4b7e-9936-59a0e5944c49.png"
          alt="Solace"
        />
      </NavLink>
    </NavContainer>
  );
};

export default Header;
