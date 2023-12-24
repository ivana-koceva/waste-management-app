import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.css';

const Button = styled.button`
    background: #2B8500;
    border-radius: 50px;
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #FFFFFF;
    padding: 0.5rem 1.5rem;
    border: none;
`
export default function PrimaryButtonComponent({text}) {
    return (
      <Button>
        {text}
      </Button>
    )
  };