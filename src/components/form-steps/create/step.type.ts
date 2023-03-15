import createFormModel from "@/components/form-model/create-form-model";
import { FormikHelpers } from "formik";

export type StepPropsType = {
  formField: typeof createFormModel["formField"];
  formikHelpers: StepFormikHelpersType;
};

export type StepFormikHelpersType = Pick<FormikHelpers<{}>, "setFieldValue">;
