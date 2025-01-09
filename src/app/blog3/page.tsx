"use client"
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Blog3() {
  const [comment, setComment] = useState({
    name: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setComment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log(comment);
    // Handle comment submission here (e.g., send to a server or save locally)
    setComment({ name: "", message: "" }); // Clear the form after submission
  };

  return (
    <div className="flex flex-col items-center justify-between p-6 rounded-lg bg-white w-[90%] max-w-[1200px] mx-auto mt-4 py-8 lg:gap-20">
      {/* Image Section */}
      <div className="relative flex items-center justify-center w-full mb-6">
        <Image
          src="/furit.jpg"
          alt="Honey Lime Rainbow Fruit Salad"
          className="w-full h-auto object-cover rounded-lg"
          width={600}
          height={600}
        />
      </div>

      {/* Content Section */}
      <div className="w-full text-center lg:text-left">
        <h2 className="text-xl sm:text-2xl lg:text-4xl font-medium text-gray-900 mb-4">
          Honey Lime Rainbow Fruit Salad
        </h2>
        <p className="text-sm sm:text-base lg:text-lg font-light text-gray-700 mb-6 leading-7">
          Here is a refreshing and easy recipe for Honey Lime Rainbow Fruit Salad:
        </p>

        {/* Ingredients Section */}
        <p className="font-bold mt-4">Ingredients:</p>
        <div>
          <strong>Fruits (adjust based on availability):</strong>
          <ul className="list-disc pl-5 mb-4">
            <li>1 cup strawberries, hulled and sliced</li>
            <li>1 cup blueberries</li>
            <li>1 cup diced mango</li>
            <li>2 kiwis, peeled and chopped</li>
            <li>1/2 cup blackberries</li>
            <li>1/2 cup grapes (optional)</li>
          </ul>

          <h3 className="font-bold mt-4">For the Dressing:</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>2 tbsp honey</li>
            <li>Juice of 1 lime (about 2 tbsp)</li>
            <li>1/2 tsp lime zest (optional, for extra zing)</li>
          </ul>

          <h3 className="font-bold mt-4">Instructions:</h3>
          <ol className="list-decimal pl-5 mb-6">
            <li>
              <strong>Prepare the Fruits:</strong> Wash all the fruits thoroughly. Chop strawberries,
              mango, and kiwi into bite-sized pieces. Combine all the fruits in a large bowl.
            </li>
            <li>
              <strong>Make the Dressing:</strong> In a small bowl, whisk together honey, lime juice,
              and lime zest until well combined.
            </li>
            <li>
              <strong>Toss the Salad:</strong> Drizzle the honey lime dressing over the mixed fruits.
              Gently toss until the fruits are evenly coated with the dressing.
            </li>
            <li>
              <strong>Serve:</strong> Chill in the refrigerator for 15-20 minutes before serving
              for the best flavor. Serve on its own or alongside muffins, yogurt, or granola for
              a complete snack or breakfast.
            </li>
          </ol>

          <p className="mt-4">
            This fruit salad is a perfect balance of sweetness and tanginess, with the honey lime
            dressing bringing out the natural flavors of the fruits. Enjoy!
          </p>
        </div>
        {/* Comment Section */}
        <div className="bg-gray-50 p-6 mt-12 rounded-lg shadow-lg w-full max-w-[1200px] mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-6">Leave a Comment</h3>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={comment.name}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Comment
              </label>
              <Input
                id="message"
                name="message"
                value={comment.message}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Your Comment"
                required
              />
            </div>

            <Button
              type="submit"
              className="self-center px-6 py-2 bg-orange-300 text-black font-semibold rounded-full mt-4 hover:bg-orange-600 transition"
            >
              Submit Comment
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
