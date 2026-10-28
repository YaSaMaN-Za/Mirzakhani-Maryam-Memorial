import { useTheme } from "./hooks/useTheme"

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="p-8">
      <button
        type="button"
        onClick={toggleTheme}
        className="rounded-full border border-line bg-surface px-5 py-2 text-ink"
      >
        Theme: {theme}
      </button>
      <h1 className="p-8 font-serif text-4xl font-bold bg-[linear-gradient(135deg,#fdfc47_0%,#e2b04c_40%,#c49a3f_70%,#ac8a3a_100%)] bg-clip-text text-transparent">      Memorial Maryam Mirzakhani
      </h1>
          </div>
  )
}