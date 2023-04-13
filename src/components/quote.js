export default function Quote(props) {
    return (
      <section className="py-1 bg-gray-50 overflow-hidden md:py-6 mb-10 lg:py-10">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <blockquote className="mt-3">
              <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
                <p>
                  &ldquo;{props.quote}&rdquo;
                </p>
              </div>
              <footer className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div className="text-base font-medium text-gray-900">{props.author}</div>
  
                    <svg className="hidden md:block mx-1 h-5 w-5 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 0h3L9 20H6l5-20z" />
                    </svg>
  
                    <div className="text-base font-medium text-gray-500">{props.position}</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    )
  }