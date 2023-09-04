export default function Breadcrums({ children }) {
  return (
    <>
      <section className="py-4 mt-16 lg:mt-[92px]">
        <div className="max-w-6xl mx-auto px-4 breadcrumbs font-semibold flex justify-start items-center">
          {children}
        </div>
      </section>
    </>
  );
}
