import { useTheme } from 'next-themes'

export default function Footer() {
  const { theme, themes, setTheme } = useTheme()

  return (
    <footer
      className="text-center py-10 border-t border-t-zinc-200 mt-20
    dark:border-t-zinc-700"
    >
      <p>
        <a
          href="https://github.com/HashbrownKazang/roadmap-voting"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dimmed"
        >
          spuntentertainment2023.
        </a>
      </p>

      <div className="mt-6">
        <select
          className="form-select py-2 text-sm capitalize leading-none"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          {themes.map((theme: string) => (
            <option key={theme} value={theme}>
              {theme}
            </option>
          ))}
        </select>
      </div>
    </footer>
  )
}
