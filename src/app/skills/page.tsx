import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Skills',
  description: 'Skills that I use to create projects.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Skills that I have, tools that I use and my experiences with them."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Frontend">
          <Tool title="Angular">
            Nothing beats frontend developement like angular. I am a fan of the
            clean and neat (albeit verbose) approach that Angular takes as opposed to other
            frameworks that are trying to appeal to developers by suggestively trimming the fat.
          </Tool>
          <Tool title="Tailwind">
            Once you get onboard, you’re going to realize that Tailwind is the endgame of
            CSS frameworks. Not only do I love the simplicity and flexibility of Tailwind, I also
            appreciate the idea of being able to port tailwind code easily just by pasting it and
            making minor adjustments.
          </Tool>
          <Tool title="Ionic">
            I am lazy and I like the idea of using my existing web developement skills to create a
            mobile app. Not only can I use an angular/tailwind combo I can also integrate other web
            technologies and package it for both the platforms.
          </Tool>
          <Tool title="Pixi JS">
            When it comes to working around in HTML Canvas, one 2D engine is enough. Pixi js covers
            most of the ground and then some. While I have done some extensive project work in Pixi,
            I am always looking to learn more.
          </Tool>
          <Tool title="Chart.js">
            This nifty library is all you need to create beautiful charts. While this library is not as
            extensive and broad as D3.js, its far more versatile in the sense that you can use it to
            create performant canvas based charts with just a few lines of code.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Backend">
          <Tool title="Express.js">
            Written enough endpoints to know this thing makes sense in a server based environment. Althought,
            I might shift to some of the newer technologies like Huno or Fastify. But until I have learnt them,
            Express is my default.
          </Tool>
          <Tool title="tsyringe">
            Did I mention that I only use Typescript? Well now you know, but more importantly, outside of Angular,
            when I have to implement inversion of control, I use tsyringe for all the dependency injection.
          </Tool>
          <Tool title="Jest">
            I have used Jest in a lot of my projects. I can say that I love it. Angular default Karma/jasmine combo
            just doesnt cut it for me. I want tests to be lightweight enough that I can run them in the terminal
            or in the IDE based on my preference and integrations.
          </Tool>
          <Tool title="Faker">
            Can't develop a project without it. I use faker to generate mocks for both my frontend and backend code.
            Its not a megacorp library but its a life saver that deserves a mention.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Tools">
          <Tool title="Figma">
            I used to design most of UI in Sketch. For some reason, I started using Figma(must be the widespread prevalance).
            I am comfortable creating decent UX/UI if I may say so myself. Though I must admit I never joined any design school.
            All the knowledge I gathered was from hands on projects.
          </Tool>
          <Tool title="VS Code">
            VS code is my bread and butter. I have never felt the need to upgrade (or try) any other IDE. The temptation never comes.
            Debugging can be a breeze along with window pane mangement. I am too used to the keybindings in VS code to make a switch.
          </Tool>
          <Tool title="Affinity Designer">
            While I own the entire affinity suite, I particularly use affinity designer whenever I am working on some logo or mocking
            an idea for a webpage. It may surprise you but you can use affinity designer to come up with radical vector animation concepts.
            All it takes is a bit of imagination and a whole lot of animation thinking. Just tweak some sliders, you will get an idea.
          </Tool>
        </ToolsSection>
        {/* <ToolsSection title="Productivity">
          <Tool title="Alfred">
            It’s not the newest kid on the block but it’s still the fastest. The
            Sublime Text of the application launcher world.
          </Tool>
          <Tool title="Reflect">
            Using a daily notes system instead of trying to keep things
            organized by topics has been super powerful for me. And with
            Reflect, it’s still easy for me to keep all of that stuff
            discoverable by topic even though all of my writing happens in the
            daily note.
          </Tool>
          <Tool title="SavvyCal">
            Great tool for scheduling meetings while protecting my calendar and
            making sure I still have lots of time for deep work during the week.
          </Tool>
          <Tool title="Focus">
            Simple tool for blocking distracting websites when I need to just do
            the work and get some momentum going.
          </Tool>
        </ToolsSection> */}
      </div>
    </SimpleLayout>
  )
}
