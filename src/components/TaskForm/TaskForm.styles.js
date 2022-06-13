import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    @media and (min-width: 900px) {
        width: 30%;
    }
    & textarea {
        height: 100px;
        resize: none;
    }
`
export const Input = styled.input`
    ${props => props.error ? "border-color: #f47260 !important;" : ""}
`
export const Select = styled.select`
    ${props => props.error ? "border-color: #f47260 !important;" : ""}
`

export const ErrorText = styled.span`
    color: #f47260;
    font-size: 14px;
`