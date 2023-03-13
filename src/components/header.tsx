import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const HeaderStyled = styled.div`
  padding-top: 100px;
  width: 1110px;
  max-width: 100%;
  margin: 0px auto 65px auto;

  .wrapper {
    padding: 16px;
  }

  .logo {
    display: inline-block;
    img {
      object-fit: contain;
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <div className="wrapper">
        <Link href={"/"} className="logo">
          <Image
            src={"/images/tonclubs-logo.png"}
            alt="Tonclubs Logo"
            width={286}
            height={39}
          />
        </Link>
      </div>
    </HeaderStyled>
  );
};

export default Header;
