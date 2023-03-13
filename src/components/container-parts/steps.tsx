import styled from "styled-components";

const StepsStyled = styled.div`
  width: 208px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex-shrink: 0;

  .step-name {
    color: #fff;
    font-size: 21px;
    font-weight: 600;
  }

  .step-description {
    color: #7279a0;
    font-size: 14px;
    font-weight: 400;
    margin-top: 6px;
    margin-bottom: 13px;
  }

  .step-progressbar {
    position: relative;
    width: 100%;
    height: 7px;
    border-radius: 4px;
    background-color: rgb(75, 105, 255, 0.13244);
    overflow: hidden;
  }

  .step-progress {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    border-radius: 4px;
    background-color: rgba(75, 105, 255, 1);
    z-index: 100;
    transition: 0.3s ease width;

    &.half {
      width: 46%;
    }

    &.full {
      width: 100%;
    }
  }
`;

type StepsPropsType = {
  steps: {
    name: string;
    description: string;
  }[];
  active_step_index: number;
};

const Steps = ({ steps, active_step_index }: StepsPropsType) => {
  return (
    <StepsStyled>
      {steps?.map((step, index) => {
        const progress_class =
          active_step_index === index
            ? " half"
            : active_step_index >= index
            ? " full"
            : "";

        console.log("1", active_step_index, index);

        return (
          <div className="step-item" key={"step-item_" + index}>
            <div className="step-name">{step?.name}</div>
            <div className="step-description">{step?.description}</div>
            <div className="step-progressbar">
              <div className={"step-progress" + progress_class}></div>
            </div>
          </div>
        );
      })}
    </StepsStyled>
  );
};

export default Steps;
