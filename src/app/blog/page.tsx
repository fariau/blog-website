import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const Blog = () => {
    return (
        <div>
            <div className="my-12 md:my-20">
                <h1 className="flex justify-center mb-3 ml-2 font-semibold text-2xl md:text-4xl">Blogs</h1>
                {/* Blog Section Below Hero Image */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Blog Card 1 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                        <Image
                            src="/food.jpg"
                            alt="Spaghetti Sauce With Ground Beef"
                            width={1300}
                            height={600}
                            className="w-full h-64 object-cover" // Set fixed height for image
                        />
                        <div className="p-6 flex flex-col justify-between flex-grow"> {/* flex-grow ensures equal height */}
                            <h2 className="font-semibold text-xl md:text-3xl mb-3">Spaghetti Sauce With Ground Beef</h2>
                            <h3 className="text-sm text-gray-600 mb-3">Leave a Comment / Food</h3>
                            <p className="text-gray-500 text-sm mb-6">
                                Here is a simple recipe for Spaghetti with Ground Beef Sauce.
                            </p>
                            <Button className="rounded-full mt-auto">
                                <Link href="/blog1">Read more </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Blog Card 2 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                        <Image
                            src="/food2.jpg"
                            alt="Garlic-Butter Steak"
                            width={1300}
                            height={600}
                            className="w-full h-64 object-cover" // Set fixed height for image
                        />
                        <div className="p-6 flex flex-col justify-between flex-grow">
                            <h2 className="font-semibold text-xl md:text-3xl mb-3">Garlic-Butter Steak</h2>
                            <h3 className="text-sm text-gray-600 mb-3">Leave a Comment / Food</h3>
                            <p className="text-gray-500 text-sm mb-6">
                                Here is a simple and delicious Garlic-Butter Steak recipe.
                            </p>
                            <Button className="rounded-full mt-auto">
                                <Link href="/blog2">Read more</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Blog Card 3 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                        <Image
                            src="/furit.jpg"
                            alt="Honey Lime Rainbow Fruit Salad"
                            width={1300}
                            height={600}
                            className="w-full h-64 object-cover" // Set fixed height for image
                        />
                        <div className="p-6 flex flex-col justify-between flex-grow">
                            <h2 className="font-semibold text-xl md:text-3xl mb-3">Honey Lime Rainbow Fruit Salad</h2>
                            <h3 className="text-sm text-gray-600 mb-3">Leave a Comment / Food</h3>
                            <p className="text-gray-500 text-sm mb-6">
                                Here is a refreshing and easy recipe for Honey Lime Rainbow Fruit Salad.
                            </p>
                            <Button className="rounded-full mt-auto">
                                <Link href="/blog3"> Read more</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Blog