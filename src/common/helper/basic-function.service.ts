import { HttpModule } from "@nestjs/common";
import { DreamFactory } from "../../config/dreamfactory";

//  ---------------------------------------------------------------------------------------------------------------------------------------------------


/**
 * Declare base module http
 */
const baseModule = HttpModule.register({ headers: { 'Content-Type': 'application/json', 'X-Dreamfactory-API-Key': DreamFactory.df_key } });
/**
 * Return http base module
 *
 * @export
 * @returns
 */
export function getModuleHttp() {
  return baseModule;
}