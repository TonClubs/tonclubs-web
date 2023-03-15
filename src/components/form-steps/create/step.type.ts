import { CreateFormType } from "@/components/form-model/create-form-initial-values";
import createFormModel from "@/components/form-model/create-form-model";
import { FormikHelpers, FormikState } from "formik";

export type StepPropsType = {
  formField: typeof createFormModel["formField"];
  formikHelpers: StepFormikHelpersType;
};

export type StepFormikHelpersType = Pick<
  FormikHelpers<CreateFormType>,
  "setFieldValue"
> &
  Pick<FormikState<CreateFormType>, "values">;
