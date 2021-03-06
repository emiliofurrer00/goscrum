import styled from 'styled-components'

export const StyledHeader = styled.header`
    width: 100vw;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    & .header-logo {
    font-size: 18px;
    &  span {
        color: #FF452B;
        font-weight: 800;
        font-size: 24px;
        }
    }
    & .right-section {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-size: 13px;
        gap: 5px;
        & .logout-btn {
            background: none;
            border: none;
            color: var(--global-primary-color);
            margin-right: 10px;
        }
    }
`

export const DonateBtn = styled.button`
    background-color: var(--global-primary-color);
    border: none;
    border-radius: var(--global-border-radius);
    color: white;
    padding: 2px 3px;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`