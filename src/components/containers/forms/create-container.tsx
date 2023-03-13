import { Form, Formik } from "formik";
import { useState, memo } from "react";
import styled from "styled-components";
import Steps from "../../container-parts/steps";
import createFormInitialValues from "../../form-model/create-form-initial-values";
import createFormModel from "../../form-model/create-form-model";
import createFormValidationSchema from "../../form-model/create-form-validation-schema";
import Step1 from "../../form-steps/create/step1";

const CreateContainerStyled = styled.div`
  width: 1110px;
  max-width: 100%;
  margin: auto;
  background: #1f1e2b;
  border: 1px solid rgba(109, 106, 142, 0.965226);
  border-radius: 8px;

  padding-bottom: 60px;

  .title {
    font-size: 21px;
    line-height: 31.5px;
    padding: 12px 40px;
    border-bottom: 1px solid #48465e;
    margin: 0 1px 49px 1px;
    font-weight: 500;
  }

  .content {
    padding: 0px 40px;
    display: flex;
    gap: 70px;
  }

  form {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const { formField, formId } = createFormModel;

const renderStepContent = ({ step }: { step: number }) => {
  switch (step) {
    case 0:
      return <Step1 formField={formField} />;
    default:
      return <div>Not Found</div>;
  }
};

const MemoizedStepContent = memo(renderStepContent);

const CreateContainer = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleFormSubmit = (values: any, actions: any) => {
    console.log("values", values, "actions", actions);
  };

  return (
    <>
      <CreateContainerStyled>
        <div className="title">Create Your Telegram Membership NFT</div>
        <div className="content">
          <Steps
            steps={[
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
            ]}
            active_step_index={activeStep}
          />
          <Formik
            initialValues={createFormInitialValues}
            validationSchema={createFormValidationSchema[activeStep]}
            onSubmit={handleFormSubmit}
            validateOnChange={false}
          >
            {({ isSubmitting, errors }) => {
              console.log("errors", errors);
              return (
                <Form id={formId}>
                  <MemoizedStepContent step={activeStep} />
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
