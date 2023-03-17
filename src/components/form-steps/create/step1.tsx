import ContentContainer from "@/components/containers/form-helper/content-container";
import SplitContainer from "@/components/containers/form-helper/split-container";
import CheckboxInput from "@/components/form-elements/checkbox-input";
import ImageInput from "@/components/form-elements/image-input";
import NumberInput from "@/components/form-elements/number-input";
import TextInput from "@/components/form-elements/text-input";
import styled from "styled-components";
import { StepPropsType } from "./step.type";

const UserImageUploadStyled = styled.div`
  width: 203px;
  height: 196px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  background: linear-gradient(320.61deg, #1a1822 4.41%, #1a1923 100.12%);
  border-radius: 10px;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  user-select: none;
  cursor: pointer;
`;

const Step1 = ({ formField, formikHelpers }: StepPropsType) => {
  const {
    membership_name,
    number_nft_amount,
    minting_price,
    secondary_sale_fee,
    limit_max_supply,
    membership_image,
  } = formField;

  return (
    <>
      <SplitContainer>
        <ContentContainer $leftSpace={50}>
          <TextInput
            label={membership_name.label}
            name={membership_name.name}
            placeholder={membership_name?.placeholder}
          />

          <NumberInput
            label={number_nft_amount.label}
            name={number_nft_amount.name}
          />
          <CheckboxInput
            label={limit_max_supply.label}
            name={limit_max_supply.name}
          />
          <NumberInput
            label={minting_price.label}
            name={minting_price.name}
            suffix={"TON"}
          />
          <NumberInput
            label={secondary_sale_fee.label}
            name={secondary_sale_fee.name}
            suffix={"%"}
          />
        </ContentContainer>
        <ContentContainer $leftSpace={16}>
          <ImageInput
            formikHelpers={formikHelpers}
            name={membership_image.name}
            label={
              <>
                Click to <br />
                Upload an Image <br />
                For Your Membership
              </>
            }
          />
        </ContentContainer>
      </SplitContainer>
    </>
  );
};

export default Step1;
