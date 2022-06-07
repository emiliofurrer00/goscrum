import styled from 'styled-components';

export const TaskCard = styled.div`
    width: 100%;

    background: #FFFFFF;
    border: 1px solid #C4C4C4;
    border-radius: 8px;
    padding: 15px 20px;
    & *:not(.task-title) {
        font-size: 12px;
        margin: 4px 0;
        border: none;
    }
    & button {
        border-radius: 3.6px;
        padding: 2.4px 3.6px;
        font-weight: 600;
    }
    & .task-statuses {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 12px;
    }
    & .task-title {
        font-size: 14px;
        display: flex;
        justify-content: space-between;
    }
    & .delete-btn {
    }
    & h2.tasks-view-title {
        font-size: 16px;
    }
`

export const StatusBtn = styled.button`
    background-color: ${props => {
        // eslint-disable-next-line default-case
        switch (props.status){
            case "new":
                return "#FF452B";
            case "in progress":
                return "#007BFF";
            case "completed":
                return "#1EC876";
        }
    }};
    color: ${props => {
        return props.status === "new" ? "white" : "black";
    }};
`

export const PriorityBtn = styled.button`
    color: white;
    background-color: ${props => {
        switch (props.priority){
            case "high":
                return "#FF452B";
            case "medium":
                return "orange";
            case "low":
                return "#007BFF";
            default:
                return "#FF452B"
        }
    }};
`