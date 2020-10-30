/* eslint-disable prettier/prettier */
import React from 'react';

const ShowValidateInput = ({
    label,
    name,
    errors
}) => {

    const switchErr = (key) => {
        switch (key) {
            case "email":
                return "Email không đúng định dạng";
            case "matches":
                return label + " không được bỏ trống";
            case "required":
                return label + " không được bỏ trống";
            case "length":
                return "Độ dài là: " + errors[name].message + " ký tự"
            case "min":
                return label + " phải lớn hơn hoặc bằng " + errors[name].message;
            case "max":
                return label + " không vượt quá " + errors[name].message;
            case "typeError":
                return label + " không được bỏ trống";
            default:
                return "";
        }
    }

    return <label style={styles.error}>
        {errors[name] && switchErr(errors[name].type)}
    </label>

};

const styles = {
    error: {
        color: 'red',
    },
};

export default ShowValidateInput;