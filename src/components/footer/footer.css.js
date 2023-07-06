import { styled } from "styled-components";

export const FooterWrapper = styled.div`
background-color: #003366;
padding:12px;
display:flex;
justify-content: space-between;
.college-name {
    color:#CCD1D9;
    font-size:20px;
    padding-bottom:16px;
    font-weight:600;
}
.address {
    font-size:16px;
    color:#ffffff;
    p {
        margin:8px 0px;
    }
}
.code-container {
    margin-top:40px;
    p {
        padding:0;
        margin:0;
    }
    .code {
        color:#e9ecef;
        font-size:26px;
        font-weight:bold;
    }
    .code-txt {
        color:#ffc107;

    }
}
`