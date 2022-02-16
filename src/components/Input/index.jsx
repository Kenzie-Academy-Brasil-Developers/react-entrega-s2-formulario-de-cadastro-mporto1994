import { InputDivS } from "./styles"


export const Input = (props) => {
    const {id,label,placeHolder}=props
    return (
        <InputDivS>
            <label htmlFor={id}>{label}</label>
                <input ide={id} placeholder={placeHolder} />
            
        </InputDivS>
    )
}