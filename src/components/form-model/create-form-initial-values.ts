import createFormModel from "./create-form-model";

const {
  formField: {
    club_description,
    membership_name,
    number_nft_amount,
    minting_price,
    secondary_sale_fee,
  },
} = createFormModel;

const createFormInitialValues = {
  [membership_name.name]: "",
  [club_description.name]: "",
  [number_nft_amount.name]: 0,
  [minting_price.name]: 0,
  [secondary_sale_fee.name]: 0,
};

export default createFormInitialValues;
