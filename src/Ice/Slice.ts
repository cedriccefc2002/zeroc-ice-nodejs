// Slice.defineSequence = function(module, name, valueHelper, fixed, elementType)
// {
//     let helper = null;
//     Object.defineProperty(module, name,
//         {
//             get: () =>
//                 {
//                     if(helper === null)
//                     {
//                         helper = Ice.StreamHelpers.generateSeqHelper(_ModuleRegistry.type(valueHelper),
//                                                                      fixed,
//                                                                      _ModuleRegistry.type(elementType));
//                     }
//                     return helper;
//                 }
//         });
// };

import { ModuleRegistry as _ModuleRegistry } from "./ModuleRegistry";

/**
 * From ArrayUtil.ts
 * @param module module
 * @param name name
 * @param valueHelper valueHelper
 * @param fixed fixed
 * @param elementType elementType
 */
export const defineSequence = (module: any, name: string | number | symbol, valueHelper: any, fixed: any, elementType: any) => {
    const helper: any = null;
    Object.defineProperty(module, name, {
        get: () => {
            if (helper === null) {
                // TODO
                // helper = Ice.StreamHelpers.generateSeqHelper(_ModuleRegistry.type(valueHelper), fixed, _ModuleRegistry.type(elementType));
            }
            return helper;
        },
    });
};
