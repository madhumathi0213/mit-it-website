import { styled } from "styled-components";


export const OverviewWrapper = styled.div`
display: flex;

.right-container {
    width: '50%';
    justify-content: 'space-between';
    margin-top: 20px;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap:12px;
}
.card-wrapper {
    background-color: #AEDBF0;
    min-width: 200px;
    min-height: 50px;
    max-height: 80px;
    padding: 20px;
    border-radius: 6px;
}
`