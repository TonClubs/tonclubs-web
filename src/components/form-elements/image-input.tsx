import { useField } from "formik";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { StepFormikHelpersType } from "../form-steps/create/step.type";

const ImageInputStyled = styled.div`
  label {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: linear-gradient(320.61deg, #1a1822 4.41%, #1a1923 100.12%);
    border-radius: 10px;
    margin: auto;
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    width: 203px;
    height: 196px;
    user-select: none;
    cursor: pointer;
  }

  input {
    display: none;
  }

  .reset-button {
    position: absolute;
    right: 6px;
    top: 6px;
    display: block;
    margin: auto;
    background: none;
    border: none;
    outline: none;
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    text-align: center;
    cursor: pointer;
  }

  img {
    object-fit: contain;
  }
`;

type ImageInputProps = {
  label: any;
  name: string;
  formikHelpers: StepFormikHelpersType;
};

const ImageInput = (props: ImageInputProps) => {
  const [field, meta] = useField(props);

  const [preview, setPreview] = useState<string | null>(
    field.value ? URL.createObjectURL(field.value) : null
  );

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event?.target?.files?.item(0);

    if (!selectedFile) {
      return false;
    }

    setPreview(URL.createObjectURL(selectedFile));

    props.formikHelpers.setFieldValue(field.name, selectedFile);
  };

  const resetImage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setPreview(null);
    props.formikHelpers.setFieldValue(field.name, null);
  };

  return (
    <ImageInputStyled>
      <label htmlFor={field.name}>
        {preview ? (
          <Image src={preview} width={203} height={196} alt="preview image" />
        ) : (
          props?.label
        )}
        {preview && (
          <button className="reset-button" onClick={resetImage}>
            &#x2715;
          </button>
        )}
      </label>
      <input
        id={field.name}
        name={field.name}
        type={"file"}
        multiple={false}
        accept="image/*"
        onChange={onImageChange}
      />
    </ImageInputStyled>
  );
};

export default ImageInput;
