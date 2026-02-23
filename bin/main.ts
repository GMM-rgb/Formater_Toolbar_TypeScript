/// <reference path="./types/Formater_Type_Definitions.d.ts" />

import * as FormaterLogic from "./modules/logic";

class Formater extends FormaterLogic.FormaterObject implements FormaterObject {
    /**
     * BOLDING; Customized HTMLButtonElement property.
     * @public
     */
    BOLDING: readonly [BoldSelection: () => void];
    
}
