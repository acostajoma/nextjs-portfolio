import { type Metadata } from 'next'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { formatDate } from '@/lib/formatDate'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

import firstPortfolio from '@/images/portfolio/first/portfolio-image.webp'
import secondPortfolio from '@/images/portfolio/second/portfolio-image.webp'
import thirdPortfolio from '@/images/portfolio/third/portfolio-image.webp'

import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <Container className='mt-40'>
      <FadeIn>
        <h2 className='font-display text-2xl font-semibold text-neutral-950'>
          Projects
        </h2>
      </FadeIn>
      <div className='mt-10 space-y-20 sm:space-y-24 lg:space-y-32'>
        {caseStudies.map(caseStudy => (
          <FadeIn key={caseStudy.client}>
            <article>
              <Border className='grid grid-cols-3 gap-x-8 gap-y-8 pt-16'>
                <div className='col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block'>
                  <div className='sm:flex sm:items-center sm:gap-x-6 lg:block'>
                    <Image
                      src={caseStudy.logo}
                      alt=''
                      className='h-16 w-16 flex-none'
                      unoptimized
                    />
                    <h3 className='mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8'>
                      {caseStudy.client}
                    </h3>
                  </div>
                  <div className='mt-1 flex gap-x-4 sm:mt-0 lg:block'>
                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {caseStudy.service}
                    </p>
                    <p className='text-sm text-neutral-950 lg:mt-2'>
                      <time dateTime={caseStudy.date}>
                        {formatDate(caseStudy.date)}
                      </time>
                    </p>
                  </div>
                </div>
                <div className='col-span-full lg:col-span-2 lg:max-w-2xl'>
                  <p className='font-display text-4xl font-medium text-neutral-950'>
                    <Link href={caseStudy.href}>{caseStudy.title}</Link>
                  </p>
                  <div className='mt-6 space-y-6 text-base text-neutral-600'>
                    {caseStudy.summary.map(paragraph => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className='mt-8 flex'>
                    <Button
                      href={caseStudy.href}
                      aria-label={`Read about projects: ${caseStudy.client}`}
                    >
                      Read more about the project
                    </Button>
                  </div>
                  {caseStudy.testimonial && (
                    <Blockquote
                      author={caseStudy.testimonial.author}
                      className='mt-12'
                    >
                      {caseStudy.testimonial.content}
                    </Blockquote>
                  )}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

const portfolios : [string, StaticImageData, string, string ][] = [
  ['First Portfolio', firstPortfolio, 'This is my first portfolio, created using pure HTML, CSS, and JavaScript during my early days of learning web development. For the contact form section, I integrated Amazon Simple Email Service (SES). Please note that the contact form in this portfolio is currently non-functional.', 'https://acostajoma.github.io/first-repository/'],
  ['Second Portfolio', secondPortfolio, 'This is my second portfolio, developed using React. For the contact form section, I reused code from my first portfolio, which utilized Amazon Simple Email Service (SES) and AWS Lambda. Please note that the contact form in this portfolio is currently deactivated and non-functional.', 'https://f8d7c483.old-portfolio-3c8.pages.dev/'],
  ['Third Portfolio', thirdPortfolio, 'This is my third portfolio, developed using TailwindCSS, SvelteKit, Cloudflare, and the Google API for the email form. This project was particularly enjoyable to work on, and Svelte has become my favorite JavaScript framework.', 'https://portfolio-svelte-brm.pages.dev/']
]


function Portfolios() {
  return (
    <Container className='mt-24 sm:mt-32 lg:mt-40'>
      <FadeIn>
        <h2 className='font-display text-2xl font-semibold text-neutral-950'>
          Past Portfolios 
        </h2>
      </FadeIn>
      <FadeInStagger className='mt-10' faster>
        <Border as={FadeIn} />
        <ul
          role='list'
          className='grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-3'
        >
          {portfolios.map(([client, logo, description, url]) => (
            <li key={client} className='group'>
              <Link href={url} target='_blank'>
              <FadeIn className='overflow-hidden'>
                <Border className='pt-12 group-[&:nth-child(-n+2)]:-mt-px sm:group-[&:nth-child(3)]:-mt-px lg:group-[&:nth-child(4)]:-mt-px'>
                  <GrayscaleTransitionImage
                    src={logo}
                    alt={client}
                    quality={90}
                    className='w-full rounded-xl'
                  />
                    <h3 className='mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8'>{client}</h3>
                    <p className='text-sm text-neutral-950 lg:mt-2'>{description}</p>

                </Border>
              </FadeIn>
              </Link>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'My Work',
  description:
    'I believe in creating efficient and innovative web solutions that deliver maximum value to my clients.',
}

export default async function Work() {
  let caseStudies = await loadCaseStudies()

  return (
    <>
      <PageIntro
        eyebrow='My Work'
        title='Tailored Web Solutions for Your Unique Needs'
      >
        <p>
          I believe in creating efficient and innovative web solutions that deliver maximum value to my clients. Each project is crafted with a focus on customization and quality, leveraging the latest technologies.
        </p>
      </PageIntro>

      <CaseStudies caseStudies={caseStudies} />
      <Portfolios/>

      <ContactSection />
    </>
  )
}
