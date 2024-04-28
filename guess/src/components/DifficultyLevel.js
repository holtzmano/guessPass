import React from "react";
import styled from "styled-components";

const Button = styled.button`
    margin: 10px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    &:hover {
        opacity: 0.8;
    }
`;

const EasyButton = styled(Button)`
    background-color: green;
`;

const MediumButton = styled(Button)`
    background-color: orange;
`;

const HardButton = styled(Button)`
    background-color: red;
`;

const DifficultyLevelContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 30vh; /* Adjust as needed */
`;

const DifficultyLevel = ({ onSelectDifficulty }) => {
    return (
        <DifficultyLevelContainer>
            <h2>Select difficulty level</h2>
            <EasyButton onClick={() => onSelectDifficulty("Easy")}>Easy</EasyButton>
            <MediumButton onClick={() => onSelectDifficulty("Medium")}>Medium</MediumButton>
            <HardButton onClick={() => onSelectDifficulty("Hard")}>Hard</HardButton>
        </DifficultyLevelContainer>
    );
};

export default DifficultyLevel;
