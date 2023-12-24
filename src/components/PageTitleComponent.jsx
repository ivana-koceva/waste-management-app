import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.css';

const PageTitle = styled.h4`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    color: #000000;
`

export default function PageTitleComponent({title}) {
    return (
        <PageTitle>{title}</PageTitle>
    )
  };