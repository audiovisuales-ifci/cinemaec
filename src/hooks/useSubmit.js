import emailjs from '@emailjs/browser'
import { useState } from 'react'

export const useSubmitForm = () => {
  const [response, setResponse] = useState()

  const submit = async (form, content) => {
    try {
      const res = await emailjs.send(
        'service_elkau6t',
        form,
        content,
        'kQtOrujEB-L1kz8wt',
      )
      setResponse(res)
    } catch (error) {
      setResponse(error)
      throw error
    }
  }

  return {
    submit,
    response,
  }
}
