import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Course } from "@/types/d";
import courses from "@/data/courses";
import React from "react";
import { Button } from "@/components/ui/button";
import { BookIcon, DollarSign } from "lucide-react";
import Link from "next/link";

const CourseCard: React.FC<Course> = ({
  name,
  id,
  description,
  category,
  price,
  rating,
  students,
  lessons,
  image,
}) => {
  return (
    <Card>
      <img
        className="w-full h-48 object-cover rounded-t-sm"
        src={image}
        alt="course"
      />
      <br />
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="flex flex-col mt-5 items-center justify-between">
          <div className="flex flex-row w-full gap-10 justify-between">
            <div className="flex flex-row items-center gap-2">
              <BookIcon size={16} />
              <span>
                A {category.name} class with {lessons} lessons.
              </span>
            </div>
            <p className="text-sm ">{students} Students</p>
          </div>
          <div className="flex flex-row w-full gap-10 justify-between font-bold">
            <div className="flex flex-row items-center gap-2">
              <DollarSign size={16} />
              <span>{price}</span>
            </div>
            <p className="text-sm ">{rating}/5.0</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Link href={`/courses/${id}`}>View Course</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const CoursesList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map((course, index) => (
        <CourseCard key={index} {...course} />
      ))}
    </div>
  );
};

export default CoursesList;
