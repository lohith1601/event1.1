import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10 m-2">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="font-extrabold text-xl md:text-5xl lg:text-5xl tracking-wide">
              Host, Connect, Celebrate: Your events, our Platform!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community.
            </p>
            <Button size="sm" asChild className="button rounded-full w-full sm:w-fit">
              <Link href="#events">
                Explore Now
              </Link>
            </Button>
          </div>
          <div className="order-1 md:order-2 flex justify-center items-center">
            <Image 
              src="/assets/images/hero.png" 
              alt="hero" 
              width={1000} 
              height={1000} 
              className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
            />
          </div>

        </div>
      </section>

      <section  className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="font-extrabold text-xl md:text-3xl lg:text-4xl tracking-wide">Trust by <br /> Thousands of Events</h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          Search 
          CategoryFilter 
        </div>

        {/* <Collection 
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages} */}
        {/* /> */}

      </section>
    </>
  );
}