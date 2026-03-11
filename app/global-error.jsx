"use client";

function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div>
          <h1>Error</h1>
          <p>{error.message}</p>
        </div>
      </body>
    </html>
  );
}

export default GlobalError;
