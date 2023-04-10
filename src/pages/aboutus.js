import Quote from "@/components/quote";

var quote = "Las creencias son actos de fe, la vida se hace con hechos"
var author = "Isaac Bhenaggay"
var position = "Coordinador"

export default function AboutUs() {
    return (
        <Quote quote={quote} author={author} position={position} />
    )
  }