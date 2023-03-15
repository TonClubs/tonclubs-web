import createFormModel from "./create-form-model";

const {
  formField: {
    club_description,
    membership_name,
    number_nft_amount,
    minting_price,
    secondary_sale_fee,
    limit_max_supply,
    monthly_membership_fee,
    set_monthly_membership_fee,
  },
} = createFormModel;

type CreateFormType = {
  membership_name: string;
  club_description: string;
  number_nft_amount: number;
  minting_price: number;
  secondary_sale_fee: number;
  limit_max_supply: boolean;
  monthly_membership_fee: boolean;
  set_monthly_membership_fee: number;
};

const createFormInitialValues = {
  [membership_name.name]: "",
  [club_description.name]: "",
  [number_nft_amount.name]: 0,
  [minting_price.name]: 0,
  [secondary_sale_fee.name]: 0,
  [limit_max_supply.name]: false,
  [monthly_membership_fee.name]: false,
  [set_monthly_membership_fee.name]: 0,
};

export default createFormInitialValues;
