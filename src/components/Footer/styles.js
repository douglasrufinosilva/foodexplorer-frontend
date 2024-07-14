import styled from "styled-components";

export const Container = styled.footer`

    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 0 29rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    .container-footer {
        padding: 0 2.7rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 7.7rem;
        border: none;
        background-color: ${({ theme }) => theme.COLORS.DARK_600};
    }

    >.container-footer div {
        display: flex;
        align-items: center;
        gap: 0.4rem;

        img {
            width: 22px;
            height: 18px;
            color: ${({ theme }) => theme.COLORS.LIGHT_700};
        }

        p {
            font-family: "Roboto", "Serif";
            font-weight: bold;
            font-size: 1.52rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_700};
        }
    }

    >.container-footer span {
        font-family: "DM Sans";
        font-size: 1.2rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
        text-align: center;
    }

    @media (max-width: 1440px) {
        padding: 0 1rem;
    }

    @media (max-width: 500px) {
        .container-footer {
            flex-direction: column;
            justify-content: center;
            align-items: center;

            row-gap: .5rem;
        }

    }

    @media(max-width: 395px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1.5rem;
    } 

    @media(min-width: 820px) {

     div.container-footer {
        img {
            width: 3rem;
            height: 3rem;
        }

        p {
            font-size: 2.4rem;
        }
    }

    >.container-footer span {
        font-family: "Roboto";
        font-size: 1.4rem;
        font-weight: 400;
    }
    }
`