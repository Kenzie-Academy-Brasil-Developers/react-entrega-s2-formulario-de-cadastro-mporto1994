import { Input } from "../../components/Input"
import { FormS } from "./styles"
import {Container} from "../../components/Container"

const Form =() =>{

    return(
        <FormS>
            <Container>
                <form action="">
                    <Input label="Nome" id="name" placeHolder="Digite seu Nome"/>
                    <Input label="Email" id="mail" placeHolder="Digite seu Email"/>
                    <Input label="Senha" id="password" placeHolder="Digite sua Senha"/>
                    <Input label="Confirmação de senha" id="name" placeHolder="Confirme sua Senha"/>
                </form>
            </Container>
            
        </FormS>
    )
}
export default Form