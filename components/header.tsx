import { useTheme } from 'next-themes'

export default function Header() {
  const { resolvedTheme } = useTheme()

  return (
    <header className="pt-20 mb-12">
      <div className="flex justify-center">
        <img
          src={resolvedTheme === 'light' ? '/logo-light.svg' : '/logo-dark.svg'}
          alt="sppunnt"
          width={280}
        />
      </div>

      <div className="mt-6 text-center text-dimmed">
        <p>Help us by voting our stupid roadmap.</p>
        <p>Vote up the features you want to see in the next release. Remember that we are not sorry, at all..</p>
      </div>
    </header>
  )
}
