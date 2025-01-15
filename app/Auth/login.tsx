import { FormState } from "../lib/definitions";
import { SignSchema } from "../lib/definitions";
export async function Login(state : FormState, formData: FormData) {
	const validatedFields = SignSchema.safeParse({
		email : formData.get('email'),
		password : formData.get('password'),
	})
}
