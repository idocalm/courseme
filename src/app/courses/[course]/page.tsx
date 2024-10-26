"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import courses from "@/data/courses";
import { useParams } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Clipboard } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CoursePage = () => {
  const { course } = useParams();

  const courseData = courses.find((c) => c.id === course);

  if (!courseData) {
    return (
      <main className="flex min-h-screen w-screen justify-center items-center bg-background px-10 text-black">
        <h1 className="text-8xl font-extrabold tracking-tighter">
          Course not found
        </h1>
      </main>
    );
  }

  const topChapters = courseData.chapters.slice(0, 3);

  return (
    <main className="flex min-h-screen w-screen flex-col bg-background px-10 text-black">
      <div className="flex flex-col gap-4 pt-16">
        <div className="flex flex-col items-start gap-10">
          <div className="flex flex-col w-full gap-1">
            <div className="flex flex-row  items-center justify-between">
              <h1 className="text-8xl font-extrabold tracking-tighter">
                {courseData.name}
              </h1>
              <Button variant={"outline"}>
                Enroll today for{" "}
                {courseData.price != "Free of charge"
                  ? "$" + courseData.price
                  : "Free"}
              </Button>
            </div>
            <p className="text-2xl font-semibold">
              {courseData.fullDescription}
            </p>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <p className="text-2xl font-semibold">Table of Contents</p>
            <Separator />
            <div className="flex flex-col w-full py-4 gap-4 items-center">
              <div className="px-8 w-full">
                <Carousel>
                  <CarouselContent>
                    {courseData.chapters.map((chapter, index) => (
                      <CarouselItem
                        key={index}
                        className="md:basis-1/2 lg:basis-1/2"
                      >
                        <div className="p-1">
                          <Card>
                            <CardHeader>
                              <h3 className="text-2xl font-semibold">
                                {chapter.title}
                              </h3>
                              <p className="text-sm font-semibold text-gray-800">
                                {chapter.description}
                              </p>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-2">
                              <div className="flex flex-col justify-start gap-4">
                                {chapter.lessons
                                  .slice(0, 3)
                                  .map((lesson, index) => (
                                    <div
                                      key={index}
                                      className="flex flex-row items-center gap-2"
                                    >
                                      <Clipboard size={16} />
                                      <span className="text-sm font-semibold">
                                        {lesson.title}
                                      </span>
                                      <span className="text-sm font-semibold">
                                        {lesson.duration}
                                      </span>
                                    </div>
                                  ))}
                                {chapter.lessons.length > 3 && (
                                  <p className="text-xs font-semibold text-gray-800">
                                    And {chapter.lessons.length - 3} more
                                    lessons
                                  </p>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
            <p className="text-2xl font-semibold">About the instructor</p>
            <Separator />
            <div className="flex flex-col gap-2 py-4">
              <div className="flex flex-row gap-4  items-center">
                <div className="flex-shrink-0">
                  <Avatar>
                    <AvatarImage src={courseData.instructor.avatar} />
                    <AvatarFallback>
                      {courseData.instructor.name
                        .split(" ")
                        .map((name) => name[0])
                        .join("")
                        .toLocaleUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold">
                    {courseData.instructor.name}
                  </h3>
                  <p className="text-sm font-semibold text-gray-800">
                    {courseData.instructor.bio}
                  </p>
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-600">
                Users have described {courseData.instructor.name} as a{" "}
                {courseData.instructor.ratingDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CoursePage;
