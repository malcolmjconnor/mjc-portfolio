// app/components/Welcome.js
export default function Welcome() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center">
      <img src="/images/mlogo.png" alt="Logo" className="w-80 h-auto mb-4 animate-pulse" />
      <h2 className="text-3xl font-semibold text-center">Welcome to My Portfolio</h2>
      <p className="mt-2 text-center text-gray-600">
        Exploring data science and information technology.
      </p>
    </section>
  );
}
