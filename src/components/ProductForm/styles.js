import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  .flexInputs {
    display: flex;
    flex-direction: column;
  }

  .input {
    margin-bottom: 10px;
  }

  .buttonsContainer {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .buttons {
    width: 49%;
  }

  @media (min-width: 900px) {
    .flexInputs {
      flex-direction: row;
      justify-content: space-between;
    }

    .codeInput {
      width: 19%;
    }

    .nameInput {
      width: 79%;
    }

    .pricesInput {
      width: 49%;
    }
  }
`;
