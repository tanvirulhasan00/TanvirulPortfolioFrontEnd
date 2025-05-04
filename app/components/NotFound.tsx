import React from "react";

interface PropsType {
  message: string;
  details: string;
  stack: string | undefined;
}

const NotFound = ({ message, details, stack }: PropsType) => {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-2xl font-bold text-red-700">{message}</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-black dark:text-gray-300 sm:text-7xl">
          {details}
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          {stack && stack ? (
            <pre className="w-full p-4 overflow-x-auto">
              <code>{stack}</code>
            </pre>
          ) : (
            "Sorry, we couldn’t find the page you’re looking for."
          )}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </a>
          <a href="#" className="text-sm font-semibold dark:text-gray-400">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
