import validateBody from "../decorators/validateBody.js";
import { contactAddSchema } from "../models/contacts-model.js";

const validateContactAdd = validateBody(contactAddSchema);

export default validateContactAdd;
