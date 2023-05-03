import { Link, routes } from '@redwoodjs/router'

import NavLayout from 'src/layouts/NavLayout'

const AboutPage = () => {
  return (
    <NavLayout>
      <div className="bg-red-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="lg:text-center">
            <h2 className="text-base font-semibold uppercase tracking-wide text-red-600">
              Welcome to Redwood Recipes!
            </h2>
            <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Our Story
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              At Redwood Recipes, we're passionate about helping you make
              delicious meals for your family and friends. Our site is designed
              to provide you with easy-to-follow recipes, cooking tips, and
              inspiration to help you create memorable meals that everyone will
              love.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
              <div className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-red-500 text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    Easy-to-Follow Recipes
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Our recipes are designed to be easy to follow, so even if
                  you're a beginner in the kitchen, you can create delicious
                  meals with confidence.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-red-500 text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    Variety of Cuisines
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  We offer a wide variety of cuisines, so you can find recipes
                  for everything from classic comfort foods to international
                  dishes.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-red-500 text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    Cooking Tips and Tricks
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  We share our favorite cooking tips and tricks to help you
                  elevate your meals and make the most of your time in the
                  kitchen.
                </dd>
              </div>{' '}
              <div className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-red-500 text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 12H4"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    Our Promise
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  We're committed to providing you with the best recipes and
                  resources to make your cooking experience enjoyable and
                  stress-free. If you ever have any questions or feedback,
                  please don't hesitate to reach out to us.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </NavLayout>
  )
}

export default AboutPage
