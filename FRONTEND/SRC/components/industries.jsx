export default function Industries() {
  return (
    <section id="industries" className="bg-white py-8 text-center px-4">
      <h2 className="text-3xl font-bold text-blue-800 mb-4">Industries</h2>

      <div className="flex flex-wrap justify-center gap-4">
        <div className="p-4 bg-blue-50 rounded-lg w-40 shadow-sm">
          Healthcare
        </div>
        <div className="p-4 bg-blue-50 rounded-lg w-40 shadow-sm">
          Education
        </div>
        <div className="p-4 bg-blue-50 rounded-lg w-40 shadow-sm">
          IT / ITES
        </div>
        <div className="p-4 bg-blue-50 rounded-lg w-40 shadow-sm">
          Retail
        </div>
      </div>
    </section>
  );
}