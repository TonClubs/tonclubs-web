import Button from "@/components/form-elements/button";
import { StepFormikHelpersType } from "@/components/form-steps/create/step.type";
import Step2 from "@/components/form-steps/create/step2";
import Step3 from "@/components/form-steps/create/step3";
import { Form, Formik, FormikHelpers, FormikValues } from "formik";
import { useState, memo } from "react";
import styled from "styled-components";
import Steps from "../../container-parts/steps";
import createFormInitialValues from "../../form-model/create-form-initial-values";
import createFormModel from "../../form-model/create-form-model";
import createFormValidationSchema from "../../form-model/create-form-validation-schema";
import Step1 from "../../form-steps/create/step1";

const CreateContainerStyled = styled.div`
  width: 1011px;
  max-width: 100%;
  margin: auto;
  background: #1f1e2b;
  border: 1px solid rgba(109, 106, 142, 0.965226);
  border-radius: 8px;
  padding-bottom: 27px;

  .title {
    font-size: 21px;
    line-height: 31.5px;
    padding: 12px 40px;
    border-bottom: 1px solid #48465e;
    margin: 0 1px 49px 1px;
    font-weight: 500;
  }

  .content {
    padding: 0px 34px 0px 40px;
    display: flex;
    gap: 60px;
  }

  .content-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 60px;
  }

  form {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .bottom-actions {
    display: flex;
    justify-content: flex-end;
    margin-right: 22px;
    gap: 16px;
    padding-top: 24px;
  }
`;

const { formField, formId } = createFormModel;

const steps_content = [
  {
    name: "Step 1",
    description: "Enter Membership NFT Fundamantals",
  },
  {
    name: "Step 2",
    description: "Manage Membership Features",
  },
  {
    name: "Step 3",
    description: "Create & Share Membership NFTs",
  },
];

const renderStepContent = ({
  step,
  formikHelpers,
}: {
  step: number;
  formikHelpers: StepFormikHelpersType;
}) => {
  switch (step) {
    case 0:
      return <Step1 formikHelpers={formikHelpers} formField={formField} />;
    case 1:
      return <Step2 formikHelpers={formikHelpers} formField={formField} />;
    case 2:
      return <Step3 formikHelpers={formikHelpers} formField={formField} />;
    default:
      return <div>Created</div>;
  }
};

const MemoizedStepContent = memo(renderStepContent);

const CreateContainer = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleFormSubmit = (values: any, actions: any) => {
    console.log("SUBMIT", "values", values, "actions", actions);
  };

  const buttonBackClick = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const buttonNextClick = () => {
    if (activeStep < 2) {
      setActiveStep(activeStep + 1);
    }
  };

  return (
    <>
      <CreateContainerStyled>
        <div className="title">Create Your Telegram Membership NFT</div>
        <div className="content">
          <Steps steps={steps_content} active_step_index={activeStep} />
          <Formik
            initialValues={createFormInitialValues}
            validationSchema={createFormValidationSchema[activeStep]}
            onSubmit={handleFormSubmit}
            validateOnChange={false}
          >
            {({ values, isSubmitting, errors, setFieldValue }) => {
              return (
                <Form id={formId}>
                  <div className="content-wrapper">
                    <MemoizedStepContent
                      step={activeStep}
                      formikHelpers={{ setFieldValue, values }}
                    />
                    <div className="bottom-actions">
                      {3 > activeStep && (
                        <>
                          {activeStep > 0 && (
                            <Button
                              $mode="form-back"
                              type="button"
                              onClick={buttonBackClick}
                            >
                              {activeStep === 2 ? "Turn back and edit" : "Back"}
                            </Button>
                          )}
                          {activeStep === 2 ? (
                            <Button
                              key="form_submit"
                              id="form_submit"
                              $mode="form-next"
                              type="submit"
                            >
                              🥳 Fantastic! Let’s Create It!
                            </Button>
                          ) : (
                            <Button
                              key="form_next"
                              id="form_next"
                              type="button"
                              $mode="form-next"
                              onClick={buttonNextClick}
                            >
                              Next Step
                            </Button>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </CreateContainerStyled>
    </>
  );
};

export default CreateContainer;
