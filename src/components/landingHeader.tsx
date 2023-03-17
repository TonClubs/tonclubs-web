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
    flex: 1;
  }

  .content {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    gap: 64px;
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
      font-size: 21px;
      font-weight: 600;
    }
  }

  .ton-connect-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 238px;
    height: 55px;
    border-radius: 27.5px;
    border: 2px solid #fff;
    padding-left: 14px;
    cursor: pointer;
    padding-right: 22px;
    text-decoration: none;
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

const LandingHeader = () => {
  return (
    <HeaderStyled>
      <div className="wrapper">
        <Link href={"/app"} className="logo">
          <Image
            src={"/images/tonclubs-logo.png"}
            alt="Tonclubs Logo"
            width={286}
            height={39}
          />
        </Link>

        <div className="content">
          <div className="nav">
            <Link href={"/"}>What is?</Link>
          </div>

          <Link href={"/app"} className="ton-connect-wrapper">
            <div className="ton-connect-text">Go To App</div>
          </Link>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default LandingHeader;
