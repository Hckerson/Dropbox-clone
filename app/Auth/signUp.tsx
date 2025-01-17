import { FormState } from "../lib/definitions";
import { SignSchema } from "../lib/definitions";
export async function SignUp(state: FormState, formData: FormData) {
  const validatedFields = SignSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message : 'Missing field' 
    };
  }
}
