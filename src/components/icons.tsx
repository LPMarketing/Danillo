import type { SVGProps } from 'react';

export const Icons = {
  whatsapp: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  whatsappSolid: (props: SVGProps<SVGSVGElement>) => (
    <svg 
      viewBox="0 0 32 32"
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
        <path d="M16 2a14 14 0 1 0 0 28 14 14 0 0 0 0-28zm7.47 21.82a11.53 11.53 0 0 1-7.23 2.65h-.05c-5.83 0-10.56-4.73-10.56-10.56S10.36 5.35 16.2 5.35c2.8 0 5.4 1.1 7.34 2.9a10.49 10.49 0 0 1 3.1 7.57c0 2.76-1.12 5.3-2.9 7.23l.03-.02zm-5.7-4.13a.94.94 0 0 1-1.33.2l-1.48-.74a5.55 5.55 0 0 1-2.28-1.95.94.94 0 0 1 .2-1.34l.74-.63a.94.94 0 0 1 1.25-.09l1.73 1.04a.94.94 0 0 1 .37 1.17l-.23.47c.4.3.83.58 1.28.84l.47-.23a.94.94 0 0 1 1.17.37l1.04 1.73a.94.94 0 0 1-.08 1.25l-.63.74z"></path>
    </svg>
  ),
};
