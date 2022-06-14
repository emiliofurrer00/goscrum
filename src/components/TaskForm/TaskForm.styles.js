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
    & > button {
        background-color: var(--global-primary-color);
        border-radius: var(--global-border-radius);
        border: none;
        color: white;
        padding: 8px 30px;
        font-size: 15px;
        cursor: pointer;
        &:hover {
            opacity: 0.7;
        }
    }
`

//These two are used in several views. Should be relocated to a common components folder.
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

