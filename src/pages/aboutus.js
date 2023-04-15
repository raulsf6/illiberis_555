import Quote from "@/components/quote";
import Person from "@/components/people_card";
import { members } from "@/data/members";

var quote = "Las creencias son actos de fe, la vida se hace con hechos";
var author = "Isaac Bhenaggay";
var position = "Scouter de tropa";

export default function AboutUs({ members }) {
  return (
    <>
      <Quote quote={quote} author={author} position={position} />
      <div class="text-center">
        <p class="text-3xl font-bold my-1 lg:my-5">El equipo</p>
        <ul
          role="list"
          class="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6"
        >
          {members.map( (member, index) => (
            <li key={index}>
              <Person
                name={member.name}
                position={member.position}
                image={member.image}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      members,
    },
  };
}
