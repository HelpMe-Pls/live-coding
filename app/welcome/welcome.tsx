import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex min-h-0 flex-1 flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <img
              src={logoLight}
              alt="React Router"
              className="block w-full dark:hidden"
            />
            <img
              src={logoDark}
              alt="React Router"
              className="hidden w-full dark:block"
            />
          </div>
        </header>
        <div className="w-full max-w-[300px] space-y-6 px-4">
          <nav className="space-y-4 rounded-3xl border border-gray-200 p-6 dark:border-gray-700">
            <p className="text-center leading-6 text-gray-700 dark:text-gray-200">
              What&apos;s next?
            </p>
          </nav>
        </div>
      </div>
    </main>
  );
}
