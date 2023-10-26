import validateBody from "../decorators/validateBody.js";
import { contactPatchSchema } from "../models/contacts-model.js";

const validateContactPatch = validateBody(contactPatchSchema);

export default validateContactPatch;
