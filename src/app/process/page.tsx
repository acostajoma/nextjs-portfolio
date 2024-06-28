import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import hosting from '@/images/hosting.jpg'
import imageLaptop from '@/images/laptop.jpg'
import optimization from '@/images/optimization.jpg'
import performance from '@/images/performance.jpg'
import whiteboard from '@/images/whiteboard.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function CustomWebsite() {
  return (
    <Section title="Custom Website Development" image={{ src: imageLaptop }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          I specialize in creating fully customized websites tailored to your
          unique needs. From the initial concept to the final launch, I work
          closely with you to ensure that your vision is brought to life.
        </p>
        <p>
          Whether you need a simple informational site or a complex web
          application, I use the latest technologies and best practices to
          deliver a robust and scalable solution that aligns perfectly with your
          brand and business goals.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        My prefered technologies for projects
      </h3>
      <TagList className="mt-4">
        <TagListItem>Svelte</TagListItem>
        <TagListItem>React</TagListItem>
        <TagListItem>Mongodb</TagListItem>
        <TagListItem>Postgre</TagListItem>
        <TagListItem>Prisma</TagListItem>
        <TagListItem>TailwindCSS</TagListItem>
      </TagList>
    </Section>
  )
}

function Performance() {
  return (
    <Section
      title="Performance Optimization"
      image={{ src: performance, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          A fast and efficient website is essential for a positive user
          experience and higher search engine rankings. I focus on optimizing
          your website&apos;s performance by minimizing load times, optimizing
          images, leveraging browser caching, and improving server response
          times.
        </p>
        <p>
          These enhancements not only provide a smoother experience for your
          users but also contribute to better search engine performance and
          increased user satisfaction.
        </p>
      </div>
    </Section>
  )
}

function Maintenance() {
  return (
    <Section
      title="Maintenance and Support"
      image={{ src: optimization, shape: 1 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Keeping your website up-to-date and running smoothly is vital for its
          success. I offer ongoing maintenance and support services to ensure
          your site remains secure, functional, and up-to-date with the latest
          technologies.
        </p>
        <p>
          From regular updates and backups to troubleshooting and performance
          monitoring, I provide comprehensive support to address any issues
          promptly, giving you peace of mind and allowing you to focus on your
          business
        </p>
      </div>
    </Section>
  )
}

function Hosting() {
  return (
    <Section title="Hosting and Deployment" image={{ src: hosting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          I offer reliable hosting solutions and handle the entire deployment
          process to ensure your website is accessible to users around the
          world.
        </p>
        <p>
          Using top cloud platforms like AWS, Google Cloud, Vercel, or
          Cloudflare, I ensure that your site is hosted on a secure and scalable
          infrastructure.
        </p>
        <p>
          I take care of the technical aspects of deployment, including setting
          up servers, configuring DNS, and implementing security measures,
          ensuring a seamless launch and optimal performance.
        </p>
      </div>
    </Section>
  )
}

function Training() {
  return (
    <Section
      title="Training and Consultation"
      image={{ src: whiteboard, shape: 1 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Empowering you to manage and update your website independently is a
          key part of my service. I provide personalized training sessions to
          guide you through the essential functions of your website, ensuring
          you feel confident in making updates and changes as needed.
        </p>
        <p>
          Additionally, I offer consultation services to advise you on best
          practices, digital strategies, and the latest web technologies,
          helping you to continuously improve and evolve your online presence.
        </p>
      </div>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="My Values"
        title="Commitment to Excellence and Innovation"
      >
        <p>
          I strive to stay at the forefront of emerging trends and technologies
          while maintaining a strong foundation in proven methodologies. My core
          values guide every project to ensure quality and client satisfaction.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            I pay attention to every detail to ensure the highest quality
            results, from initial planning to final deployment.
          </GridListItem>
          <GridListItem title="Efficient">
            I pride myself on delivering projects on time without compromising
            on quality, using streamlined processes and best practices.
          </GridListItem>
          <GridListItem title="Adaptable">
            I tailor solutions to meet the unique needs of each client and
            project, ensuring flexibility and responsiveness.
          </GridListItem>
          <GridListItem title="Honest">
            I maintain transparency and integrity in all communications and
            processes, fostering trust and reliability.
          </GridListItem>
          <GridListItem title="Loyal">
            I build long-term relationships with clients based on trust and
            mutual respect, aiming for ongoing collaboration and support.
          </GridListItem>
          <GridListItem title="Innovative">
            I continuously seek out new technologies and methodologies to
            enhance my services and deliver cutting-edge solutions.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'My Services',
  description:
    'I focus on efficiency and innovation to deliver top-notch web solutions. My process ensures that each project is tailored to meet client needs and achieve their goals.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="My Services" title="How Can I Help You">
        <p>
          I focus on efficiency and innovation to deliver top-notch web
          solutions. My process ensures that each project is tailored to meet
          client needs and achieve their goals.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <CustomWebsite />
        <Performance />
        <Maintenance />
        <Hosting />
        <Training />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
