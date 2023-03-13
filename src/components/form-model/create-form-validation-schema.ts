import * as yup from "yup";
import createFormModel from "./create-form-model";

const {
  formField: {
    membership_name,
    club_description,
    number_nft_amount,
    minting_price,
    secondary_sale_fee,
  },
} = createFormModel;

const createFormValidationSchema = [
  yup.object().shape({
    [membership_name.name]: yup
      .string()
      .required(membership_name.label + " is required"),
    [club_description.name]: yup
      .string()
      .required(club_description.label + " is required"),
    [number_nft_amount.name]: yup
      .number()
      .required(number_nft_amount.label + " is required"),
    [minting_price.name]: yup
      .number()
      .required(minting_price.label + " is required"),
    [secondary_sale_fee.name]: yup
      .number()
      .required(secondary_sale_fee.label + " is required")
      .max(100)
      .min(0),
  }),
];

export default createFormValidationSchema;