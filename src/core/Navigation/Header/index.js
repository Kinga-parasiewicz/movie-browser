import { Logo, LogoWrapper, Title, StyledLink } from "./styled";
import logo from "./logo.svg";
import { toMovies } from "./../../routes";

export const Header = () => {
  return (
    <StyledLink to={toMovies()}>
      <LogoWrapper>
        <Logo src={logo} alt="" />
        <Title>movie&nbsp;browser</Title>
      </LogoWrapper>
    </StyledLink>
  );
};
