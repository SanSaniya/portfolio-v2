export default function Navbar() {
  const navItems = ["About", "Skills", "Projects", "Contact"];

  return (
    <nav className="absolute top-6 left-1/2 z-50 w-[90%] max-w-5xl -translate-x-1/2">
      <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/80 px-3 py-3 shadow-2xl backdrop-blur-md">
        {/* Logo */}
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="currentColor"
                d="M19.039 11.459c.001.015.022.244.03.407c.006.113 0 .29 0 .3c.003 0 .029.023.03.024c1.428 1.17 2.943 2.767 3.204 3.94c.073.325.056.618-.072.868c-.152.293-.439.503-.834.638c-2.046.7-6.925-.642-10.907-2.609c-2.845-1.406-5.342-3.081-7.032-4.719c-1.57-1.523-1.995-2.71-1.59-3.427c.155-.271.42-.472.776-.609c1.299-.507 3.788-.152 6.239.579c-1.16.866-1.968 2.034-2.342 3.202l-.001.007l-.001.006c-.115 1.07 1.434 2.47 3 3.25c-.002-.006.084.032.084.026c-.002-.006-.015-.109-.017-.113c-.366-2.66 1.648-6.64 3.765-7.513c.136-.056.254-.09.27-.095l-.273-.027q-.11-.01-.228-.015a8 8 0 0 0-.272-.01a6.44 6.44 0 0 0-3.4.892C5.378 5.057 2.383 4.892 1.13 5.31q-.747.251-1 .751c-.174.35-.175.79-.002 1.306c.57 1.704 3.058 4.032 6.211 6.099c.457 2.407 2.615 4.875 5.703 5.204l.142.015a.3.3 0 0 1 .05 0l-.173-.132c-.955-.736-1.813-1.949-2.107-3l.185.093l.143.07c4.985 2.465 10.215 3.72 12.53 2.947c.519-.174.9-.418 1.075-.768c.167-.335.139-.78-.029-1.278c-.436-1.3-2.304-3.284-4.675-5.052l-.145-.107"
              />
            </svg>
          </span>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-white">
          {navItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer transition-colors duration-300 hover:text-yellow-300"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* CTA / Email Button */}
        <a
          href="mailto:saniyamlk1111@gmail.com"
          className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform duration-300 hover:scale-105"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 8 8"
            >
              <path d="M0 0h8v8H0z" fill="none" />
              <path fill="currentColor" d="m0 3l4-2l4 2l-4 2m4 2V3L4 4L0 3v4" />
            </svg>
          </span>
        </a>
      </div>
    </nav>
  );
}
