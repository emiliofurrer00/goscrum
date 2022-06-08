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