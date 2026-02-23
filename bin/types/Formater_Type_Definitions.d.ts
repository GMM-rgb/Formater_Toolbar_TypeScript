declare function selectiveBold(): void;
/**
 * 
 * ---
 * 
 * The `BUTTONbold`; or commonly just the Bolding Button, contains methods for bolding user selective text.
 * 
 */
type ButtonBold = [
    BoldSelection: typeof selectiveBold,
];

declare global {
    interface FormaterObject {
        BOLDING: Readonly<ButtonBold>,
    }
} 

export {};
