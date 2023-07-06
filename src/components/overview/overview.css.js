import { styled } from "styled-components";


export const OverviewWrapper = styled.div`
.overview-container {
    padding-left:70px;
    padding-right:70px;
    p {
        line-height:32px;
    }
}
.right-container {
    justify-content: 'space-between';
    margin-top: 20px;
    margin-bottom:28px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap:12px;
}
h2 {
    font-weight: 600;
    font-size: 32px;
    text-align: left;
    margin-bottom:20px;
    font-family:'Raleway','sans-serif';
}
.card-wrapper {
    background-color: #f4fcfc;
    min-width: 200px;
    min-height: 50px;
    max-height: 80px;
    padding: 20px;
    border-radius: 6px;
}
.card-head {
    font-weight: 600;
    font-size: 20px;
    color:#363991;
    margin: 0px;
}
.card-count {
    color:#088589;
    font-size: 36px;
    font-weight:700;
    margin-top:4px;
}
.message-container {
    background-color:#f4fcfc;
    padding:70px;
    
    .hod-message {
        display:flex;
        img {
            margin-right:20px;
        }
    }
}
.accomplishment-container {
    padding:70px;
}
p {
    font-size: 16px;
    line-height: 1.6;
    text-align: justify;
}
`