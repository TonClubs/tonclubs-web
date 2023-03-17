import Image from "next/image";
import styled from "styled-components";
import LandingHeader from "@/components/landingHeader";

const LandingStyled = styled.div`
  width: 1110px;
  max-width: 100%;
  margin: 0px auto 65px auto;
  font-weight: 600;
  display: flex;
  flex-direction: row;

  .purple {
    color: #909ef2;
  }

  .pretitle {
    font-size: 24px;
  }

  .title {
    font-size: 44px;
    line-height: 64px;
  }

  .subtitle {
    font-size: 32px;
  }

  .left {
    flex: 3;
  }

  .right {
    flex: 2;

    img {
      width: 75%;
      height: 100%;
    }
  }

  .buttons {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-top: 52px;

    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 32px;
      border-radius: 16px;
      border: 2px solid #878bfa;
      cursor: pointer;
      text-decoration: none;
      min-width: 200px;

      color: #fff;
      font-size: 16px;
      font-weight: 600;
      user-select: none;
    }

    .button.contained {
      background-color: #4b69ff;
    }

    .github {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 28px;
        height: auto;
      }
    }
  }
`;

export default function Home() {
  return (
    <>
      <LandingHeader />

      <LandingStyled>
        <div className="left">
          <h3 className="pretitle">
            Introducing <span className="purple">TonClubs</span> 🥳🚀
          </h3>

          <h1 className="title">
            Directly <span className="purple">Monetize</span> Your Telegram{" "}
            <span className="purple">Community</span>
          </h1>

          <h2 className="subtitle purple">with TON Network</h2>

          <div className="buttons">
            <a href="https://t.me/tonclubstestbot" className="button outlined">
              Try On Telegram
            </a>

            <a href="" className="button contained">
              Demo Video
            </a>

            <a href="https://github.com/TonClubs" className="github">
              <Image
                src={"/images/github-icon.png"}
                alt="Tonclubs Logo"
                className="img-fluid"
                width={286}
                height={39}
              />
            </a>
          </div>
        </div>

        <div className="right">
          <Image
            src={"/images/landing-card.png"}
            alt="Tonclubs Logo"
            width={286}
            height={39}
          />
        </div>
      </LandingStyled>
    </>
  );
}
