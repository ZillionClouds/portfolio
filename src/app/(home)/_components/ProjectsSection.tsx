import { urlForImage } from "@sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { ProjectType } from "types/project";

type Props = {
  projects: ProjectType[];
};

const ProjectsSection = ({ projects }: Props) => {
  return (
    <section id="projects" className="overflow-hidden relative">
      <div className="px-8 py-12 mx-auto md:px-12 lg:py-24 lg:px-36 max-w-7xl">
        <div data-aos="fade-up" data-aos-duration="1000" className="">
          <h3 className="text-4xl text-white font-display flex flex-wrap gap-x-2">
            Project
            <span className="md:block text-primary-400">Gallery</span>
          </h3>
        </div>

        <ul role="list" className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-10">
          {projects.map(
            ({ key, title, overview, image, finishedAt, demo, techstack }) => (
              <li key={key}>
                <figure className="relative h-full rounded-3xl bg-gradient-to-tr from-primary-950 to-primary-700 border border-primary-800 duration-200 hover:shadow-2xl overflow-hidden">
                  <Link
                    href={demo}
                    className="h-full group flex flex-col"
                    target="_blank"
                  >
                    <Image
                      width={500}
                      height={200}
                      className="w-full h-[300px] object-cover object-top drop-shadow-3xl"
                      src={urlForImage(image)}
                      alt={title}
                    />

                    <blockquote className="p-8 relative space-y-3">
                      <span className="text-xs text-primary-400">
                        {finishedAt}
                      </span>

                      <h5 className="text-lg font-medium leading-6 text-white">
                        {title}
                      </h5>

                      <div className="flex flex-wrap gap-4 items-center">
                        <div className="flex space-x-2">
                        {techstack.map(({ name }) => (
                          <span key={name} className="bg-blue-500 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                            {name}
                          </span>
                        ))}
                        </div>
                      </div>

                      <p className="text-base text-primary-300">{overview}</p>
                    </blockquote>
                  </Link>
                </figure>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
