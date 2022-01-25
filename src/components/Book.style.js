import styled from "styled-components";

export const divTable = styled.div`
    display: table;
    width: 100%;
    border-collapse: collapse;
    border-style: solid;
    border-radius:30px;
    border-color: #404040;
    border-width: 4px;
`;
export const divTableRow = styled.div`
    display: table-row;
    &:nth-child(even) {
        background-color: #0096D5;
    }
`;

export const divTableHeading = styled.div`
    background-color: #FAF9F6;
    display: table-header-group;
    font-weight: bold;
    border: 1px solid #404040;
`;

export const divTableCell = styled.div`
    border: 1px solid #404040;
    display: table-cell;
    padding: 3px 10px;

    @media (max-width: 20em) {
      padding-left: 0.75em;
    }

    &:before {
      display: block;
      margin-bottom: 0.75em;
      margin-left: 0;
    }

`;

export const divTableHead = styled.div`
    border: 1px solid #404040;
    display: table-cell;
    padding: 3px 10px;
`;

export const divTableFoot = styled.div`
    background-color: #EEE;
    display: table-footer-group;
    font-weight: bold;

`;

export const divTableBody = styled.div`
    display: table-row-group;
`;

export const Button = styled.button`
    background-color: #0096D5;
    border: none;
    color: #f4f4f4;
    padding: 3px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 4px;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
    background-color: #5B595A;
    color: #f4f4f4;
  }

`;

export const Input = styled.input`
    width: 15%;
    padding: 5px 10px;
    margin: 5px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;

    ::placeholder,
    ::-webkit-input-placeholder {
    color: red;
  }
`;


