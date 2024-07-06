import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import { loadArticles } from '@/lib/mdx'

function Expertise() {
  return (
    <div className='mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32'>
      <SectionIntro
        eyebrow='My Expertise'
        title='Delivering Excellence in Web Development'
        invert
      >
        <p>
          I specialize in creating innovative, efficient, and tailored web
          solutions to meet your unique needs.
        </p>
      </SectionIntro>
      <Container className='mt-16'>
        <GridList>
          <GridListItem title='Web Development' invert>
            Building robust and scalable websites using modern technologies like
            Svelte and React.
          </GridListItem>
          <GridListItem title='CMS Integration' invert>
            Seamlessly integrating content management systems for efficient and
            user-friendly content updates.
          </GridListItem>
          <GridListItem title='Custom Solutions' invert>
            Providing bespoke web solutions to address specific business
            challenges and goals.
          </GridListItem>
          <GridListItem title='Cloud Services' invert>
            Leveraging cloud technologies for deployment, scalability, and
            performance optimization.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        image: { src: imageLeslieAlexander },
      },
      {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        image: { src: imageMichaelFoster },
      },
      {
        name: 'Dries Vincent',
        role: 'Partner & Business Relations',
        image: { src: imageDriesVincent },
      },
    ],
  },
  {
    title: 'Team',
    people: [
      {
        name: 'Chelsea Hagon',
        role: 'Senior Developer',
        image: { src: imageChelseaHagon },
      },
      {
        name: 'Emma Dorsey',
        role: 'Senior Designer',
        image: { src: imageEmmaDorsey },
      },
      {
        name: 'Leonard Krasner',
        role: 'VP, User Experience',
        image: { src: imageLeonardKrasner },
      },
      {
        name: 'Blake Reid',
        role: 'Junior Copywriter',
        image: { src: imageBlakeReid },
      },
      {
        name: 'Kathryn Murphy',
        role: 'VP, Human Resources',
        image: { src: imageKathrynMurphy },
      },
      {
        name: 'Whitney Francis',
        role: 'Content Specialist',
        image: { src: imageWhitneyFrancis },
      },
      {
        name: 'Jeffrey Webb',
        role: 'Account Coordinator',
        image: { src: imageJeffreyWebb },
      },
      {
        name: 'Benjamin Russel',
        role: 'Senior Developer',
        image: { src: imageBenjaminRussel },
      },
      {
        name: 'Angela Fisher',
        role: 'Front-end Developer',
        image: { src: imageAngelaFisher },
      },
    ],
  },
]

function Team() {
  return (
    <Container className='mt-24 sm:mt-32 lg:mt-40'>
      <div className='space-y-24'>
        {team.map(group => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className='grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8'>
              <FadeIn>
                <h2 className='font-display text-2xl font-semibold text-neutral-950'>
                  {group.title}
                </h2>
              </FadeIn>
              <div className='lg:col-span-3'>
                <ul
                  role='list'
                  className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8'
                >
                  {group.people.map(person => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className='group relative overflow-hidden rounded-3xl bg-neutral-100'>
                          <Image
                            alt=''
                            {...person.image}
                            className='h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105'
                          />
                          <div className='absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6'>
                            <p className='font-display text-base/6 font-semibold tracking-wide text-white'>
                              {person.name}
                            </p>
                            <p className='mt-2 text-sm text-white'>
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro
        eyebrow='About Me'
        title='Dedicated to Excellence in Web Development'
      >
        <p>
          My strength is in building strong client relationships and delivering
          exceptional web solutions.
        </p>
        <div className='mt-10 max-w-2xl space-y-6 text-base'>
          <p>
            With a background in creating innovative web applications, I focus
            on blending design and technology to meet client needs. My journey
            began with a passion for coding and has grown into a commitment to
            excellence in every project.
          </p>
          <p>
            Collaboration is key to my process. By working closely with clients
            and teammates, I ensure that their goals are met with precision and
            creativity. Let&apos;s work together to transform your ideas into
            reality with cutting-edge web solutions.
          </p>
        </div>
      </PageIntro>

      <Container className='mt-16'>
        <StatList>
          <StatListItem value='2+' label='Years of Experience' />
          <StatListItem value='10+' label='Technologies Mastered' />
          <StatListItem value='2,000+' label='Cups of Coffee' />
        </StatList>
      </Container>

      <Expertise />

      <PageLinks
        className='mt-24 sm:mt-32 lg:mt-40'
        title='From the blog'
        intro='Our team of experienced designers and developers has just one thing on their mind; working on your ideas to draw a smile on the face of your users worldwide. From conducting Brand Sprints to UX Design.'
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
