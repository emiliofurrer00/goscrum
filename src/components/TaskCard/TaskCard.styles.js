import styled from 'styled-components';

export const TaskCard = styled.div`
    width: 100%;
    word-break: normal;
    overflow: hidden;
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
            case "NEW":
                return "#FF452B";
            case "IN PROGRESS":
                return "#007BFF";
            case "FINISHED":
                return "#1EC876";
        }
    }};
    color: ${props => {
        return props.status === "NEW" ? "white" : "black";
    }};
`

export const PriorityBtn = styled.button`
    color: white;
    background-color: ${props => {
        switch (props.priority){
            case "HIGH":
                return "#FF452B";
            case "MEDIUM":
                return "orange";
            case "LOW":
                return "#007BFF";
            default:
                return "#FF452B"
        }
    }};
`