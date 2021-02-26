export default class ValidationContract {
    errors: any = [];
    ValidationContract() {
        this.errors = [];
    }

    isRequired = (value: any, message: any) => {
        if (!value || value.length <= 0)
        this.errors.push({ message: message });
    }

    hasMinLen = (value: any, min: any, message: any) => {
        if (!value || value.length < min)
        this.errors.push({ message: message });
    }

    hasMaxLen = (value: any, max: any, message: any) => {
        if (!value || value.length > max)
        this.errors.push({ message: message });
    }

    isFixedLen = (value: any, len: any, message: any) => {
        if (value.length != len)
        this.errors.push({ message: message });
    }

    error = () => {
        return this.errors;
    }

    isEmail = (value: any, message: any) => {
        var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
        if (!reg.test(value))
        this.errors.push({ message: message });
    }

    clear = () => {
        this.errors = [];
    }

    isValid = () => {
        return this.errors.length == 0;
    }
};