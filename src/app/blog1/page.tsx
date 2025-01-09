"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

export default function Blog1() {
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
          src="/food.jpg"
          alt="Spaghetti Sauce With Ground Beef"
          className="w-full h-auto object-cover"
          width={600}
          height={600}
        />
      </div>

      {/* Content Section */}
      <div className="w-full text-center lg:text-left">
        <h2 className="text-xl sm:text-2xl lg:text-4xl font-medium text-deepBlack mb-4">
          Spaghetti Sauce With Ground Beef
        </h2>
        <p className="text-sm sm:text-base lg:text-lg font-light text-deepBlack mb-6 leading-7">
          Here is a simple recipe for Spaghetti with Ground Beef Sauce.
          <p className="font-bold mt-4">Ingredients:</p>
          <p>
            For the Sauce:
            <ul className="list-disc pl-5">
              <li>2 tbsp olive oil</li>
              <li>1 lb (500g) ground beef</li>
              <li>1 small onion, finely chopped</li>
              <li>2 garlic cloves, minced</li>
              <li>1 can (14 oz/400g) crushed tomatoes</li>
              <li>2 tbsp tomato paste</li>
              <li>1 tsp sugar</li>
              <li>1 tsp dried oregano</li>
              <li>1 tsp dried basil</li>
              <li>Salt and black pepper to taste</li>
              <li>1/2 cup water or beef broth (optional, for consistency)</li>
            </ul>
            <h3 className="font-bold mt-4">For the Pasta:</h3>
            <ul className="list-disc pl-5">
              <li>12 oz (350g) spaghetti</li>
              <li>Salt for boiling water</li>
              <li>Grated Parmesan cheese (for topping)</li>
              <li>Fresh parsley or basil (optional garnish)</li>
            </ul>
            <h3 className="font-bold mt-4">Instructions:</h3>
            <ol className="list-decimal pl-5">
              <li>
                <strong>Prepare the Sauce:</strong> Heat olive oil in a large skillet over medium heat.
                Add ground beef and cook until browned. Break it into smaller chunks with a spoon.
                Drain excess fat if necessary. Add onions and garlic; sauté until softened (2-3 minutes).
                Stir in crushed tomatoes, tomato paste, sugar, oregano, and basil. Mix well. Simmer for 15-20
                minutes, adding water or broth if the sauce is too thick. Season with salt and pepper to taste.
              </li>
              <li>
                <strong>Cook the Spaghetti:</strong> Boil a large pot of salted water. Add spaghetti and cook
                until al dente, according to package instructions. Drain and set aside.
              </li>
              <li>
                <strong>Assemble the Dish:</strong> Toss the cooked spaghetti with the sauce until well-coated.
                Serve on plates, topped with grated Parmesan and fresh herbs.
              </li>
              <li>
                <strong>Optional Add-Ons (Inspired by Image):</strong> Add poached eggs, steamed vegetables,
                or thinly sliced prosciutto on top for extra flavor.
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
