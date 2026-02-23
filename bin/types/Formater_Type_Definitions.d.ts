declare abstract class BoldButton {
    constructor();
    /**
     * Bolds the current *__Editable__* __:__ __ClientUser__ text selection; that is being focused on.
     * 
     * ---
     * 
     * @param WeightingAmount
     */
    boldSelection(WeightingAmount: number): void;
}

declare type FormaterBoldButton = (typeof BoldButton);

declare global {
    namespace FormaterInstancer {
        interface FormaterObjectBolding {
            InstanceNewBoldButton(): FormaterBoldButton;
        }

        interface FormaterObjectVariants {
            BOLD: FormaterObjectBolding;
        }

        interface FormaterObjectTypes extends FormaterObjectVariants {
            FormatButtonTypeActive: boolean;
        }
    }
}

export {};
