import { Group, FormInputLabel, Input } from "./form-input.styles";

const FormInput = (props) => {
    const {label, ...otherProps} = props;
    return (
        <Group>
            <Input {...otherProps}/>
            {
                label && (
                <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>
                )
            }
        </Group>
    )
}

export default FormInput;