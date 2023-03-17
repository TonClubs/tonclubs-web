import * as yup from "yup";
import createFormModel from "./create-form-model";

const {
  formField: {
    membership_name,
    club_description,
    number_nft_amount,
    minting_price,
    secondary_sale_fee,
    limit_max_supply,
    monthly_membership_fee,
    set_monthly_membership_fee,
    club_website,
    club_category,
    membership_image,
  },
} = createFormModel;

const createFormValidationSchema = [
  yup.object().shape({
    [membership_name.name]: yup.string(),
    [club_description.name]: yup.string(),
    [number_nft_amount.name]: yup.number(),
    [minting_price.name]: yup.number(),
    [secondary_sale_fee.name]: yup.number().max(100).min(0),
    [limit_max_supply.name]: yup.boolean().required(),
    [monthly_membership_fee.name]: yup.mixed().required(),
    [set_monthly_membership_fee.name]: yup.boolean().required(),
    [club_website.name]: yup.string(),
    [club_category.name]: yup.string(),
    [membership_image.name]: yup.mixed(),
  }),
];

export default createFormValidationSchema;
