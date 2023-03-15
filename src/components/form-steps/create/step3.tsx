import ContentContainer from "@/components/containers/form-helper/content-container";
import SplitContainer from "@/components/containers/form-helper/split-container";
import TextInput from "@/components/form-elements/text-input";
import styled from "styled-components";
import { StepPropsType } from "./step.type";

const UploadedImageStyled = styled.div`
  width: 100%;

  .content-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: 300;
  }

  .uploaded-image-wrapper {
    display: flex;
    width: 310px;
    border: 1px solid rgba(109, 106, 142, 0.965226);
    border-radius: 10px;
    padding: 4px;
    gap: 13px;
    margin-bottom: 26px;
  }

  .uploaded-image {
    border-radius: 6px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 104px;
    height: 104px;
    background-image: linear-gradient(
      270deg,
      rgba(26, 24, 34, 1) 0%,
      rgba(26, 25, 35, 1) 100%
    );
  }

  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 12px;
    gap: 5px;
  }

  .details-value {
    color: #909ef2;
  }
`;

const Step3 = ({ formField, formikHelpers }: StepPropsType) => {
  const {
    club_description,
    club_website,
    club_category,
    minting_price,
    secondary_sale_fee,
    set_monthly_membership_fee,
    number_nft_amount,
  } = formField;
  return (
    <UploadedImageStyled>
      <div className="uploaded-image-wrapper">
        <div className="uploaded-image">Uploaded Image</div>
        <div className="details">
          <div className="details-title">TonClub Name:</div>
          <div className="details-value">
            {formikHelpers.values.membership_name}
          </div>
        </div>
      </div>

      <div className="content-wrapper">
        <SplitContainer>
          <ContentContainer>
            <TextInput
              label={club_description.endLabel}
              name={club_description.name}
              textarea={club_description?.textarea}
              textareaProps={{
                disabled: true,
              }}
            />
            <div
              style={{
                display: "flex",
                gap: 9,
                justifyContent: "space-between",
              }}
            >
              <TextInput
                label={club_website.endLabel}
                name={club_website.name}
                inputProps={{
                  disabled: true,
                }}
              />
              <div style={{ width: 108 }}>
                <TextInput
                  label={club_category.endLabel}
                  name={club_category.name}
                  inputProps={{
                    disabled: true,
                    style: { textAlign: "center" },
                  }}
                />
              </div>
            </div>
          </ContentContainer>
          <ContentContainer>
            <TextInput
              label={number_nft_amount.endLabel}
              name={""}
              inputProps={{
                disabled: true,
              }}
              customEndValue={
                (formikHelpers.values.limit_max_supply &&
                formikHelpers.values.number_nft_amount
                  ? formikHelpers.values.number_nft_amount
                  : "Unlimited") + ""
              }
            />
            <div
              style={{
                display: "flex",
                gap: 9,
                justifyContent: "space-between",
              }}
            >
              <TextInput
                label={minting_price.endLabel}
                name={""}
                inputProps={{
                  disabled: true,
                  style: { textAlign: "center" },
                }}
                customEndValue={
                  (formikHelpers.values.minting_price | 0) + " TON"
                }
              />
              <TextInput
                label={secondary_sale_fee.endLabel}
                name={""}
                inputProps={{
                  disabled: true,
                  style: { textAlign: "center" },
                }}
                customEndValue={
                  (formikHelpers.values.secondary_sale_fee | 0) + " %"
                }
              />
            </div>
            <TextInput
              label={set_monthly_membership_fee.endLabel}
              name={""}
              inputProps={{
                disabled: true,
              }}
              customEndValue={
                (formikHelpers.values.monthly_membership_fee ? "Yes" : "No") +
                (formikHelpers.values.monthly_membership_fee
                  ? ", " +
                    formikHelpers.values.set_monthly_membership_fee +
                    " TON"
                  : "")
              }
            />
          </ContentContainer>
        </SplitContainer>
      </div>
    </UploadedImageStyled>
  );
};

export default Step3;
