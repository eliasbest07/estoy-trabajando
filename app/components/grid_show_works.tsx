import Link from "next/link"

export default function GridShowWorks() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 md:p-6 lg:p-8">
      <div className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-950">
        <img
          alt="Product 1"
          className="w-full h-48 object-cover"
          height={300}
          src="/placeholder.svg"
          style={{
            aspectRatio: "400/300",
            objectFit: "cover",
          }}
          width={400}
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Stylish Sunglasses</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Protect your eyes in style with our premium sunglasses.
          </p>
          <Link
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-950">
        <img
          alt="Product 2"
          className="w-full h-48 object-cover"
          height={300}
          src="/placeholder.svg"
          style={{
            aspectRatio: "400/300",
            objectFit: "cover",
          }}
          width={400}
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Leather Crossbody Bag</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">Stylish and practical bag for everyday use.</p>
          <Link
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-950">
        <img
          alt="Product 3"
          className="w-full h-48 object-cover"
          height={300}
          src="/placeholder.svg"
          style={{
            aspectRatio: "400/300",
            objectFit: "cover",
          }}
          width={400}
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Wireless Headphones</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Experience high-quality sound with our wireless headphones.
          </p>
          <Link
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-950">
        <img
          alt="Product 4"
          className="w-full h-48 object-cover"
          height={300}
          src="/placeholder.svg"
          style={{
            aspectRatio: "400/300",
            objectFit: "cover",
          }}
          width={400}
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Classic Wristwatch</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">Timeless design that never goes out of style.</p>
          <Link
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}