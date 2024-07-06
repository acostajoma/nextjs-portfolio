type FormErrors = {
  name?: string[] | undefined
  email?: string[] | undefined
  company?: string[] | undefined
  phone?: string[] | undefined
  message?: string[] | undefined
}

export function mapErrorsToString(errors: FormErrors): string {
  let errorMessages: string[] = []

  for (const [key, value] of Object.entries(errors)) {
    if (value && value.length > 0) {
      errorMessages = errorMessages.concat(`Error in ${key} input: ${value}`)
    }
  }

  return errorMessages.join('. ')
}
