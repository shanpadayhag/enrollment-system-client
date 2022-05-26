import React from 'react';
import { PrimaryButton, TertiaryButton } from "./Button.styles";
import { TERTIARY } from "constants/components/form.constants";

const Button = ({
    children,
    type = 'submit',
    theme,
    onClick,
    className
}) => {
    const props = { type, onClick, className }

    switch (theme) {
        case TERTIARY:
            return <TertiaryButton {...props}>{children}</TertiaryButton>
        default:
            return <PrimaryButton {...props}>{children}</PrimaryButton>
    }
}

export default Button;
