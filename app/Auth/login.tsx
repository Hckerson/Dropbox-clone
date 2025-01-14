import { FormState } from "../lib/definitions";
import { LoginSchema } from "../lib/definitions";
export async function Login(state : FormState, formData: FormData) {
	const validatedFields = LoginSchema.safeParse({
		name : formData.get(''),
		email : formData.get(''),
		password : formData.get(''),
	})
}
