import Search from "../components/Search";

export default function Home() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
          Reviews
        </h1>
        <Search />
      </div>
    </section>
  );
}
