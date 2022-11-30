import styled from "styled-components";

export const StyledFavorites = styled.div`
    padding: 0 35px;
    margin: 16px 0;

    .wrapper-favorites{
        width: calc(100vw - 16px * 4);
        display: grid; 
        grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
        grid-gap: 16px;
        text-align: center;
    }

    h2 {
        font-size: 16px;
        margin-bottom: 16px;
        text-transform: capitalize;
    }

    img{
        border-radius: 50%;
        width: 80;
        height: 80px;
        object-fit: contain;
    }

    p{
        padding-top: 8px;
        color: ${({ theme }) => theme.textColorBase || "#222222"};
    }


`;