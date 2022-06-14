import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TaskCard = styled(motion.li)`
    width: 100%;
    @media (min-width: 900px){
        max-width: 300px;
    }
    word-break: break-all;
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
        font-size: 16px;
        display: flex;
        justify-content: space-between;
    }
    & .delete-btn {
        cursor: pointer;
        background: none;
        &:hover {
            color: red;
        }
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
                return "#FBDE3F";
            case "FINISHED":
                return "#1EC876";
        }
    }};
    color: ${props => {
        return props.status === "IN PROGRESS" ? "black" : "white";
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