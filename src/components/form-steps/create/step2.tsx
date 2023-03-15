import ContentContainer from "@/components/containers/form-helper/content-container";
import SplitContainer from "@/components/containers/form-helper/split-container";
import ButtonOptionSelect from "@/components/form-elements/button-option-select";
import NumberInput from "@/components/form-elements/number-input";
import styled from "styled-components";
import { StepPropsType } from "./step.type";

const MembershipStyled = styled.div`
  .membership-title {
    opacity: 1;
    color: rgba(114, 121, 160, 1);
    font-size: 30px;
    font-weight: 400;
    text-transform: uppercase;
    font-family: "Bebas Neue", cursive, sans-serif;
    letter-spacing: 1.5px;
  }

  .membership-subtitle {
    color: #fff;
    font-size: 14px;
    margin-top: 29px;
  }

  .membership-desc {
    color: rgba(114, 121, 160, 1);
    font-size: 12px;
    margin-top: 5px;
    margin-bottom: 13px;
    padding-right: 5px;
  }
`;

const Step2 = ({ formField, formikHelpers }: StepPropsType) => {
  const { monthly_membership_fee, set_monthly_membership_fee } = formField;
  return (
    <>
      <SplitContainer>
        <ContentContainer></ContentContainer>
        <ContentContainer>
          <MembershipStyled>
            <div className="membership-title">
              Unique Features <br />
              of Membership NFTs
            </div>
            <div className="membership-subtitle">
              There will be any monthly membership fee?
            </div>
            <div className="membership-desc">
              If holders do not pay monthly fee, their tokens expired and
              returned to you
            </div>
            <ButtonOptionSelect
              formikHelpers={formikHelpers}
              name={monthly_membership_fee.name}
              default_active_index={0}
              button_options={[
                {
                  value: true,
                  label: "Yes",
                },
                {
                  value: false,
                  label: "No",
                },
              ]}
            />
          </MembershipStyled>
          <NumberInput
            label={set_monthly_membership_fee.label}
            name={set_monthly_membership_fee.name}
            suffix={"TON"}
            label_on_top
          />
        </ContentContainer>
      </SplitContainer>
    </>
  );
};

export default Step2;
