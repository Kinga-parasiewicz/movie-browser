import { Logo, LogoWrapper, Title, StyledLink } from "./styled";
import logo from "../../assets/logo.svg";
import { toMovies } from "../../common/routes";

export const Header = () => {
  return (
    <StyledLink to={toMovies()}>
      <LogoWrapper>
        <Logo src={logo} alt="" />
        <Title>movies&nbsp;browser</Title>
      </LogoWrapper>
    </StyledLink>
  );
};
