This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
## Coding Project - Next.js "Button Counter" 

This project creates a Next.js web app that has a reusable button counter component. It uses counter.jsx and page.js to load a counter with an increment, decrement, and reset button. Along with a custom prop counter that shows a different initial count and initial step. 

## Features
-Displays current count for default counter and custom counter.
-Increment, Decrement, and reset buttons.
-A step input that sets how much to add and subtract.
-Uses props such as InitialCount and InitialStep.
-Count region is displayed using aria-live="polite".
-Uses useState for count and step. 
-Has a disable decrement for when count goes below zero. 

## Known Issues and Limitations 
- Step input could go into negatives if you don't validate using numeric input and clamp to min 1. 
- If not done properly decrement could make count go below zero if disable decrement isn't used. 

## How to run Locally 

npx create-next-app@latest my-next-app
cd my-next-app
npm install
npm run dev
Visit http://localhost:3000


## How to Build

npm run build - used to build production version.
npm run start- runs production server. 

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
