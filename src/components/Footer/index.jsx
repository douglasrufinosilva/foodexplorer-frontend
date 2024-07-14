import { Container } from "./styles";
import logo  from "../../assets/polygonFooter.svg"

export function Footer () {
    return (
        <Container>
            <div className="container-footer">
                <div>
                    <img src={logo} alt="logo do restaurante no footer" />
                    <p>food explorer</p>
                </div>

                <span>&copy; 2024 - Todos os direitos reservados.</span>
            </div>
        </Container>
    )
}