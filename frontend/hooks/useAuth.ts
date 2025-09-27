import { SignUpFormData } from "@/app/admin/register/page"
import { postData } from "@/lib/fetch-utils"
import { useMutation } from "@tanstack/react-query"

export const useSignUpMutation = () => {
    return useMutation({
        mutationFn: (data: SignUpFormData) => postData("/user/register", data)
    })
}