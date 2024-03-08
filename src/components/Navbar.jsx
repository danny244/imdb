import NavbarItem from "./NavbarItem"

const Navbar = () => {
  return (
    <div className="flex mt-10 dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6">
      <NavbarItem title="Trending" params="fetchTrending" />
      <NavbarItem title="Top Rated" params="fetchTopRated" />
    </div>
  )
}

export default Navbar
