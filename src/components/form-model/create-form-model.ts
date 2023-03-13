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
      placeholder: "",
    },
    minting_price: {
      name: "minting_price",
      label: "Minting Price",
      placeholder: "",
    },
    secondary_sale_fee: {
      name: "secondary_sale_fee",
      label: "Secondary Sale Fee",
      placeholder: "",
    },
  },
};

export default createFormModel;
