import ContentContainer from "@/components/containers/form-helper/content-container";
import NumberInput from "@/components/form-elements/number-input";
import TextInput from "@/components/form-elements/text-input";
import { StepPropsType } from "./step.type";

const Step1 = ({ formField }: StepPropsType) => {
  const {
    membership_name,
    club_description,
    number_nft_amount,
    minting_price,
    secondary_sale_fee,
  } = formField;

  console.log("re rendered");

  return (
    <>
      <ContentContainer>
        <TextInput
          label={membership_name.label}
          name={membership_name.name}
          placeholder={membership_name?.placeholder}
        />
        <TextInput
          label={club_description.label}
          name={club_description.name}
          placeholder={club_description?.placeholder}
          textarea={club_description?.textarea}
        />
        <NumberInput
          label={number_nft_amount.label}
          name={number_nft_amount.name}
          placeholder={number_nft_amount?.placeholder}
        />
        <NumberInput
          label={minting_price.label}
          name={minting_price.name}
          placeholder={minting_price?.placeholder}
          suffix={"TON"}
        />
        <NumberInput
          label={secondary_sale_fee.label}
          name={secondary_sale_fee.name}
          placeholder={secondary_sale_fee?.placeholder}
          suffix={"%"}
        />
        <button type="submit">Submit</button>
      </ContentContainer>
    </>
  );
};

export default Step1;
