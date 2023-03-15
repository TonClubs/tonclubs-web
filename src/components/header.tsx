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
    display: flex;
    justify-content: space-between;
  }

  .logo {
    display: flex;
    align-items: center;
    img {
      object-fit: contain;
    }
  }

  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    padding-left: 100px;

    a {
      text-decoration: none;
      color: #fff;
      font-size: 16px;
      font-weight: 400;
    }
  }

  .ton-connect-wrapper {
    display: flex;
    align-items: center;
    width: 238px;
    height: 55px;
    border-radius: 27.5px;
    border: 2px solid #fff;
    padding-left: 14px;
    cursor: pointer;
    padding-right: 22px;
  }

  .ton-connect-text {
    color: #fff;
    font-size: 21px;
    font-weight: 500;
    user-select: none;
  }

  .ton-connect-image {
    margin-right: 23px;
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
        <div className="nav">
          <Link href={"/"}>Create</Link>
          <Link href={"/"}>Manage</Link>
          <Link href={"/"}>Sell</Link>
          <Link href={"/"}>Search</Link>
        </div>
        <div className="ton-connect-wrapper">
          <Image
            className="ton-connect-image"
            src={"/purple-ton-icon.svg"}
            width={32}
            height={32}
            alt="Ton icon"
          />
          <div className="ton-connect-text">Connected</div>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
