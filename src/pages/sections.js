import GroupSection from "@/components/group_section";
import { sections } from "@/data/group_sections";

export default function Sections({ sections }) {
  return (
    <div class="relative bg-gray-50 pt-12 pb-20 px-4 sm:px-6 lg:px-8">
      <div class="relative max-w-6xl mx-auto">
        <div class="text-center">
          <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Nuestras secciones
          </h2>
          <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Nuestro grupo scout está formado de las siguientes secciones
          </p>
        </div>
        <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
          {sections.map((section, index) => (
            <GroupSection
              key={index}
              name={section.name}
              description={section.description}
              color={section.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      sections,
    },
  };
}
