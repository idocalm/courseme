import CoursesList from "../_components/courses-list";

const Courses = () => {
  return (
    <main className="flex min-h-screen w-screen flex-col bg-background px-10 text-black">
      <div className="flex flex-col gap-4 pt-16">
        <div className="flex flex-col items-start gap-10">
          <div className="flex flex-col gap-1">
            <h1 className="text-8xl font-extrabold tracking-tighter">
              Browse Courses
            </h1>
            <p className="text-2xl font-semibold">
              Enroll in any of our courses and start learning right away.
            </p>
          </div>

          <CoursesList />
        </div>
      </div>
    </main>
  );
};

export default Courses;
