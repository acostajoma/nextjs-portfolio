'use client'

import { createRef, useId, useState, useEffect } from 'react'
import { useFormState } from 'react-dom'
import { sendMessage } from '@/app/actions/sendMessage'
import { mapErrorsToString } from '@/app/utils/utils'
import { FadeIn } from '@/components/FadeIn'
import { Button } from '@/components/Button'

type FormErrors = {
  name?: string[]
  email?: string[]
  company?: string[]
  phone?: string[]
  message?: string[]
}

type Response = {
  errors?: FormErrors
  success?: boolean
  message?: string
}

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  const id = useId()

  return (
    <div className='group relative z-0 transition-all focus-within:z-10'>
      <input
        type='text'
        id={id}
        {...props}
        placeholder=' '
        className='peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl'
      />
      <label
        htmlFor={id}
        className='pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950'
      >
        {label}
      </label>
    </div>
  )
}

export function ContactForm() {
  const initialState: Response = {}
  const [state, formAction] = useFormState(sendMessage, initialState)
  const [message, setMessage] = useState('')
  const ref = createRef<HTMLFormElement>()

  useEffect(() => {
    if (state?.success !== undefined) {
      if (state?.errors) {
        setMessage(mapErrorsToString(state.errors))
      } else if (state?.message) {
        setMessage(state.message)
      }

      const timeout = setTimeout(() => {
        setMessage('')
      }, 3000)

      return () => clearTimeout(timeout)
    }
  }, [state])

  useEffect(() => {
    if (state?.success) {
      ref.current?.reset()
    }
  }, [state?.success, ref])

  return (
    <FadeIn className='lg:order-last'>
      <form action={formAction} ref={ref}>
        <h2 className='font-display text-base font-semibold text-neutral-950'>
          Work inquiries
        </h2>
        <div className='isolate mt-6 -space-y-px rounded-2xl bg-white/50'>
          <TextInput label='Name' name='name' autoComplete='name' />
          <TextInput
            label='Email'
            type='email'
            name='email'
            autoComplete='email'
          />
          <TextInput
            label='Company'
            name='company'
            autoComplete='organization'
          />
          <TextInput label='Phone' type='tel' name='phone' autoComplete='tel' />
          <TextInput label='Message' name='message' />
        </div>
        <Button type='submit' className='mt-10'>
          Let&apos;s work together
        </Button>
        <p
          className={`pt-2 font-display text-sm font-semibold ${state?.success ? 'text-green-700' : 'text-red-700'}`}
        >
          {message}
        </p>
      </form>
    </FadeIn>
  )
}
