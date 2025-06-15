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
/** As per the test's constraints, I'll assume that there are 3 things that you're looking for from this OA:
 *  1. Technical problem-solving skills relevant to the role.
 *  2. ORIGINAL work that demonstrates GENUINE understanding.
 *  3. You aren't expecting perfection, you just want to see me TRY my best.
 *
 * With that in mind, I'm going to treat this test the same way I approach ANY problem in my day-to-day job,
 * to show you how I would ACTUALLY perform IF I have a chance to work as part of your team.
 * Here's how it's gonna be, step-by-step:
 *  1. I'll try my best to solve the problem WITHOUT any help.
 *  2. I'll use external support (AI to be specific) to see if there's a better way to do it or to clean up my code.
 *    If you're still reading this, it means that I'm already at this step ;)
 *  3. My final submission could be either enhanced by AI or remain the same as my initial solution
 *    (if it's good enough, which is rarely the case btw).
 *
 * You might think I'm cheating (guilty as charged), while I see it as being transparent about my actual workflow.
 * Whether this approach aligns with your team's values is ultimately your call.
 */
