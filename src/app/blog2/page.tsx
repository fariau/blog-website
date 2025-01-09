"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import Image from "next/image";

export default function Blog2() {

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
          src="/food2.jpg"
          alt="Garlic-Butter Steak"
          className="w-full h-auto object-cover"
          width={600}
          height={600}
        />
      </div>

      {/* Content Section */}
      <div className="w-full text-center lg:text-left">
        <h2 className="text-xl sm:text-2xl lg:text-4xl font-medium text-gray-900 mb-4">
          Garlic-Butter Steak
        </h2>
        <p className="text-sm sm:text-base lg:text-lg font-light text-gray-700 mb-6 leading-7">
          Here is a simple and delicious Garlic-Butter Steak recipe.
          <p className="font-bold mt-4">Ingredients:</p>
          <p>
            For the Steak:
            <ul className="list-disc pl-5">
              <li>2 ribeye or sirloin steaks (about 1-inch thick)</li>
              <li>Salt and black pepper to taste</li>
              <li>2 tbsp olive oil</li>
              <li>4 tbsp unsalted butter</li>
              <li>4 garlic cloves, smashed</li>
              <li>2-3 sprigs fresh rosemary or thyme</li>
            </ul>

            <h3 className="font-bold mt-4">Optional Garnishes:</h3>
            <ul className="list-disc pl-5">
              <li>Fresh lettuce leaves</li>
              <li>Thinly sliced red onions</li>
              <li>Red chilies</li>
              <li>Cashews or crushed nuts (for texture)</li>
            </ul>

            <h3 className="font-bold mt-4">For the Sauce:</h3>
            <ul className="list-disc pl-5">
              <li>2 tbsp soy sauce</li>
              <li>1 tbsp Worcestershire sauce</li>
              <li>1 tbsp honey</li>
              <li>1 tsp freshly grated ginger</li>
              <li>1 tsp chili flakes (optional)</li>
            </ul>

            <h3 className="font-bold mt-4">Instructions:</h3>
            <ol className="list-decimal pl-5">
              <li>
                <strong>Prepare the Steaks:</strong> Remove steaks from the fridge and let them come
                to room temperature (about 30 minutes). Pat dry with paper towels and season generously
                with salt and black pepper on both sides.
              </li>
              <li>
                <strong>Sear the Steaks:</strong> Heat olive oil in a large skillet over medium-high
                heat until hot. Add the steaks and sear for 2-3 minutes per side for medium-rare
                (adjust time based on preferred doneness). Reduce heat to medium-low, then add butter,
                garlic, and rosemary/thyme to the pan. Spoon the melted garlic-butter over the steaks
                repeatedly for about 1-2 minutes to enhance flavor.
              </li>
              <li>
                <strong>Rest the Steaks:</strong> Remove the steaks from the skillet and let them rest
                for 5-7 minutes. This helps retain their juices.
              </li>
              <li>
                <strong>Make the Sauce (Optional):</strong> In the same skillet, add soy sauce,
                Worcestershire sauce, honey, grated ginger, and chili flakes. Stir and simmer for
                2 minutes to combine flavors.
              </li>
              <li>
                <strong>Plate and Garnish:</strong> Slice the steaks and plate them with fresh lettuce,
                red onions, and a whole red chili for presentation. Sprinkle cashews or crushed nuts
                for texture. Serve with the sauce on the side or drizzled over the steak.
              </li>
            </ol>
          </p>
        </p>

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
