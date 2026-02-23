class FormatInstancerObject implements FormaterInstancer.FormaterObjectTypes {
    FormatButtonTypeActive: boolean;

    constructor() {
        this.FormatButtonTypeActive = false;
    }

    BOLD: FormaterInstancer.FormaterObjectBolding;
}



export {
    FormatInstancerObject,
};
