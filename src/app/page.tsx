import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import imageLaptop from '@/images/laptop.jpg'
import html from '@/images/stack/html/logo-light.svg'
import css from '@/images/stack/css/logo-light.svg'
import javascript from '@/images/stack/javascript/logo-light.svg'
import typescript from '@/images/stack/typescript/logo-light.svg'
import sql from '@/images/stack/sql/logo-light.svg'
import svelte from '@/images/stack/svelte/logo-light.svg'
import react from '@/images/stack/react/logo-light.svg'
import mongodb from '@/images/stack/mongodb/logo-light.svg'
import tailwind from '@/images/stack/tailwind/logo-light.svg'
import prisma from '@/images/stack/prisma/logo-light.svg'
import aws from '@/images/stack/aws/logo-light.svg'
import cloudflare from '@/images/stack/cloudflare/logo-light.svg'
import supabase from '@/images/stack/supabase/logo-light.svg'
import sass from '@/images/stack/sass/logo-light.svg'
import jest from '@/images/stack/jest/logo-light.svg'
import pen from '@/images/other/pen/logo-dark.svg'
import { loadCaseStudies, type CaseStudy, type MDXEntry } from '@/lib/mdx'

const clients = [
  ['HTML', html],
  ['CSS', css],
  ['Javascript', javascript],
  ['Typescript', typescript],
  ['SQL', sql],
  ['SASS', sass],
  ['Svelte', svelte],
  ['SvelteKit', svelte],
  ['React', react],
  ['Jest', jest],
  ['Mongo DB', mongodb],
  ['Tailwind', tailwind],
  ['Prisma', prisma],
  ['AWS', aws],
  ['Cloudflare', cloudflare],
  ['Supabase', supabase],
]

function Clients() {
  return (
    <div className='mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56'>
      <Container>
        <FadeIn className='flex items-center gap-x-8'>
          <h2 className='text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left'>
            My tech stack
          </h2>
          <div className='h-px flex-auto bg-neutral-800' />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role='list'
            className='mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4'
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <div className='flex flex-row items-center'>
                    <Image src={logo} alt={client} unoptimized />
                    <p className='ml-3 font-display text-sm font-semibold tracking-wider text-white'>
                      {client}
                    </p>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title='Crafting Digital Experiences'
        className='mt-24 sm:mt-32 lg:mt-40'
      >
        <p>
          Dive into my portfolio to see how I transform ideas into engaging web
          solutions. Each project highlights my expertise in development, and
          technology, showcasing my dedication to delivering digital
          experiences. Explore the work that defines my passion.
        </p>
      </SectionIntro>
      <Container className='mt-16'>
        <FadeInStagger className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          {caseStudies.map(caseStudy => (
            <FadeIn key={caseStudy.href} className='flex'>
              <article className='relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8'>
                <h3>
                  <Link href={caseStudy.href}>
                    <span className='absolute inset-0 rounded-3xl' />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className='h-16 w-16'
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className='mt-6 flex gap-x-2 text-sm text-neutral-950'>
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className='font-semibold'
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className='text-neutral-300' aria-hidden='true'>
                    /
                  </span>
                  <span>Projects</span>
                </p>
                <p className='mt-6 font-display text-2xl font-semibold text-neutral-950'>
                  {caseStudy.title}
                </p>
                <p className='mt-4 text-base text-neutral-600'>
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow='Services'
        title='I help you identify, explore, and respond to new opportunities.'
        className='mt-24 sm:mt-32 lg:mt-40'
      >
        <p>
          As a dedicated web developer, I offer a range of services designed to enhance your online presence and ensure your website performs optimally.
        </p>
      </SectionIntro>
      <Container className='mt-16'>
        <div className='lg:flex lg:items-center lg:justify-end'>
          <div className='flex justify-center lg:w-1/2 lg:justify-end lg:pr-12'>
            <FadeIn className='w-[33.75rem] flex-none lg:w-[45rem]'>
              <StylizedImage
                src={imageLaptop}
                sizes='(min-width: 1024px) 41rem, 31rem'
                className='justify-center lg:justify-end'
              />
            </FadeIn>
          </div>
          <List className='mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4'>
            <ListItem title='Custom Website Development'>
              Specializing in crafting custom websites tailored to your business needs, ensuring a unique and engaging online presence.
            </ListItem>
            <ListItem title='Performance Optimization'>
              Expert in optimizing website performance to ensure fast load times and a seamless user experience, enhancing both usability and SEO.
            </ListItem>
            <ListItem title='Maintenance and Support'>
              Providing ongoing maintenance and support to keep your website up-to-date, secure, and running smoothly at all times.
            </ListItem>
            <ListItem title='Hosting and Deployment'>
              Offering reliable hosting and deployment services to ensure your website is always available and performs well under varying traffic loads.
            </ListItem>
            <ListItem title='Training and Consultation'>
              Providing training and consultation services to empower you and your team with the knowledge and skills needed to manage and grow your online presence effectively.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}


export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className='mt-24 sm:mt-32 md:mt-56'>
        <FadeIn className='max-w-3xl'>
          <h1 className='font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl'>
            Innovative Web Developer From Costa Rica
          </h1>
          <p className='mt-6 text-xl text-neutral-600'>
            I create innovative web solutions blending design and technology.
            Specializing in Svelte and React. I aim to deliver seamless and
            efficient digital experiences. Let&apos;s turn your vision into
            reality.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className='mt-24 sm:mt-32 lg:mt-40'
        client={{ name: 'Steve Jobs', logo:  pen}}
      >
        The only way to do great work is to love what you do.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
