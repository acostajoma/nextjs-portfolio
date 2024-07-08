import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Languages } from '@/components/Languages'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { ContactForm } from '@/components/ContactForm'


export const runtime = 'edge'

function RadioInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <label className='flex gap-x-3'>
      <input
        type='radio'
        {...props}
        className='h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2'
      />
      <span className='text-base/6 text-neutral-950'>{label}</span>
    </label>
  )
}


function ContactDetails() {
  return (
    <FadeIn>
      <h2 className='font-display text-base font-semibold text-neutral-950'>
        Get In Touch
      </h2>
      <p className='mt-6 text-base text-neutral-600'>
        Feel free to contact in the next languages:
      </p>

      <Languages className='mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2' />

      <Border className='mt-16 pt-16'>
        <h2 className='font-display text-base font-semibold text-neutral-950'>
          Email me
        </h2>
        <dl className='mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2'>
          {[['Contact mail', 'jose@macosta.dev']].map(([label, email]) => (
            <div key={email}>
              <dt className='font-semibold text-neutral-950'>{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className='text-neutral-600 hover:text-neutral-950'
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className='mt-16 pt-16'>
        <h2 className='font-display text-base font-semibold text-neutral-950'>
          Follow me
        </h2>
        <SocialMedia className='mt-6' />
      </Border>
    </FadeIn>
  )
}

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Let’s work together. We can’t wait to hear from you.',
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow='Hire me' title="Let's work together">
        <p>I can&apos;t wait to hear from you.</p>
      </PageIntro>

      <Container className='mt-24 sm:mt-32 lg:mt-40'>
        <div className='grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2'>
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
