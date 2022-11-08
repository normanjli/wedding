import styled from 'styled-components';
import { Colors } from '../../styles/Colors';

export const Form = styled.form`
  display: grid;
  grid-auto-rows: 5 0.5fr;
  max-width: 300px;
  margin: auto;
  gap: 16px;
  border: 1px dashed ${Colors.dark};
  padding: 24px;
  border-radius: 16px;
  background-color: white;
  text-align: center;
`;

export const LabelContainer = styled.label`
  text-align: left;
  display: grid;
  gap: 4px;
`;

export const Input = styled.input`
  ::placeholder {
    color: ${Colors.accent};
    opacity: 0.5;
  }
  :disabled {
    opacity: 0.75;
    cursor: not-allowed;
  }
  border: unset;
  border-bottom: 1px solid ${Colors.accent};
  color: ${Colors.dark};
  font-size: 20px;
  padding: 4px;
`;

export const Select = styled.select`
  font-size: 20px;
  padding: 4px;
  border: unset;
  border-bottom: 1px solid ${Colors.accent};
`;

export const Option = styled.option`
  color: ${Colors.dark};
  font-size: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
