const createFormModel = {
  formId: "createForm",
  formField: {
    membership_name: {
      name: "membership_name",
      label: "Give a name for your Membership NFT & Club",
      placeholder: "Hangar",
    },
    club_description: {
      name: "club_description",
      label: "Enter the Club Description",
      placeholder: "Max 160 character",
      textarea: true,
    },
    number_nft_amount: {
      name: "number_nft_amount",
      label: "Member NFT Amount",
    },
    minting_price: {
      name: "minting_price",
      label: "Minting Price",
    },
    secondary_sale_fee: {
      name: "secondary_sale_fee",
      label: "Secondary Sale Fee",
    },
    limit_max_supply: {
      name: "limit_max_supply",
      label: "Limit Max Supply",
      type: "checkbox",
    },
    monthly_membership_fee: {
      name: "monthly_membership_fee",
      type: "button_select",
    },
    set_monthly_membership_fee: {
      name: " ",
      label: "Set Monthly Membership Fee",
    },
  },
};

export default createFormModel;
