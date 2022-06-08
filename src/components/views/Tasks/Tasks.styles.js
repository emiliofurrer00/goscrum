import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    gap: 15px;
    @media (min-width:900px) {
        flex-direction: row;
        justify-content: space-between;
    }
    & .heading-title {
        margin-bottom: 15px;
    }
`
export const TasksSection = styled.section`
    @media (min-width: 900px) {
        width: 70%;
    }
`
