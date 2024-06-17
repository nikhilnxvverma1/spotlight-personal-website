import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Nikhil Verma and I love building things.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            
            <p>
            Hello! I'm Nikhil Verma, founder and CEO of <Link href={"https://xorsafe.com"} className='text-teal-500'>Xorsafe Technologies</Link> .I am a passionate software engineer who loves turning ideas into reality using web technologies. With a strong foundation in coding and a relentless curiosity, I specialize in creating dynamic applications and engaging games that make a difference.
            </p>
            <p>
            My journey into the world of coding began at Delhi Public School, Noida, where I first fell in love with programming at the age of 16. From that moment, coding became my primary focus and passion, shaping the rest of my academic and professional life. This early fascination led me to pursue a Bachelor's degree from Jaypee University, where I honed my skills and discovered my love for software development.
            </p>
            <p>
            After graduation, I spent two years at Nucleus Software, gaining invaluable experience and tackling a variety of projects. This practical experience solidified my understanding and fueled my passion for creating impactful solutions. Driven by a desire to deepen my knowledge, I pursued a Master's degree at the Rochester Institute of Technology (RIT) in Rochester. During my time at RIT, I participated in more than a dozen hackathons, where I learned immensely from the intense, hands-on exposure and collaborative environment. These experiences further refined my expertise and pushed my boundaries in innovative thinking.
            </p>
            <p>
            Whether it's building intuitive user interfaces, designing seamless user experiences, or crafting complex game mechanics, I thrive on solving problems and bringing innovative solutions to life. I approach every project with an open mind and a dedication to delivering high-quality results that meet both user needs and business goals.
            </p>
            <p>
            When I'm not coding, you can find me exploring new technologies, playing games, or sharing knowledge with the developer community. I also like to stay fit and am currently trying to learn some calisthenics moves. I believe in the power of technology to transform lives, and I'm excited to be a part of this ever-evolving field.
            </p>
            <p>
            Thank you for visiting my page, and I look forward to connecting with you!
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul >
            {/* <SocialLink href="#" icon={XIcon}>
              Follow on X
            </SocialLink> */}
            {/* <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink> */}
            <SocialLink href="https://github.com/nikhilnxvverma1" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            {/* <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink> */}
            <SocialLink
              href="mailto:spencer@planetaria.tech"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              nikhilverma@xorsafe.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
