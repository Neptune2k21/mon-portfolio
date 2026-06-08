export default function ThemeAmbiance() {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(251,191,36,0.10),transparent_50%),radial-gradient(circle_at_20%_80%,rgba(245,158,11,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_20%,rgba(30,64,175,0.15),transparent_50%),radial-gradient(circle_at_20%_80%,rgba(79,70,229,0.10),transparent_50%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 hidden shadow-[inset_0_0_150px_rgba(0,0,0,0.8)] dark:block"
        aria-hidden="true"
      />
    </>
  )
}
