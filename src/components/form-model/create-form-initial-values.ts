import createFormModel from "./create-form-model";

/*
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
    club_website,
    club_category,
  },
} = createFormModel;
*/

export type CreateFormType = {
  membership_name: string;
  club_description: string;
  number_nft_amount: number;
  minting_price: number;
  secondary_sale_fee: number;
  limit_max_supply: boolean;
  monthly_membership_fee: boolean;
  set_monthly_membership_fee: number;
  club_website: string;
  club_category: string;
};

const createFormInitialValues: CreateFormType = {
  membership_name: "",
  club_description: "",
  number_nft_amount: 0,
  minting_price: 0,
  secondary_sale_fee: 0,
  limit_max_supply: false,
  monthly_membership_fee: true,
  set_monthly_membership_fee: 0,
  club_website: "",
  club_category: "",
};

export default createFormInitialValues;
