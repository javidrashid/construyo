import Link from "next/link";

const CSSQuestion = (props)  => {
    return (
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    
                    <i className="fab fa-css3-alt fa-css"></i>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <button
                      className="bg-gray-800 active:bg-red-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      End Quiz
                     
                    </button>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        20
                      </span>
                      <span className="text-sm text-gray-500">Questions</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        10
                      </span>
                      <span className="text-sm text-gray-500">Photos</span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        89
                      </span>
                      <span className="text-sm text-gray-500">Comments</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                  This is the sample text for a question...
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                  displays, fonts, border-box
                </div>
                
              </div>
              <div className="mt-10 py-10 border-t border-gray-300 text-center">
                <div className="flex flex-wrap justify-center text-left">
                  <div className="w-full lg:w-9/12 px-4 rounded">
                    <input type="radio" name="answer" id="option1"/>
                    <label className="mb-4 text-lg leading-relaxed text-gray-800 ml-4" for="option1">
                      An artist of considerable range, Jenna the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy writes,
                      performs and records all of his own music, giving it a
                      warm, intimate feel with a solid groove structure. An
                      artist of considerable range.
                    </label>
                    
                  </div>
                  <div className="w-full lg:w-9/12 px-4 rounded">
                    <input type="radio" name="answer" id="option2"/>
                    <label className="mb-4 text-lg leading-relaxed text-gray-800 ml-4" for="option2">
                      An artist of considerable range, Jenna the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy writes,
                      performs and records all of his own music, giving it a
                      warm, intimate feel with a solid groove structure. An
                      artist of considerable range.
                    </label>
                    
                  </div>
                  <div className="w-full lg:w-9/12 px-4 rounded">
                    <input type="radio" name="answer" id="option3"/>
                    <label className="mb-4 text-lg leading-relaxed text-gray-800 ml-4" for="option3">
                      An artist of considerable range, Jenna the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy writes,
                      performs and records all of his own music, giving it a
                      warm, intimate feel with a solid groove structure. An
                      artist of considerable range.
                    </label>
                    
                  </div>
                  <div className="w-full lg:w-9/12 px-4 rounded">
                    <input type="radio" name="answer" id="option4"/>
                    <label className="mb-4 text-lg leading-relaxed text-gray-800 ml-4" for="option4">
                      An artist of considerable range, Jenna the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy writes,
                      performs and records all of his own music, giving it a
                      warm, intimate feel with a solid groove structure. An
                      artist of considerable range.111
                    </label>
                    
                  </div>
                </div>
                <div className="w-full px-4 lg:order-3 lg:text-right lg:self-center flex justify-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <button
                      className="bg-gray-800 active:bg-gray-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Previous
                    </button>
                  </div>
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <button
                      className="bg-gray-800 active:bg-gray-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      <Link href={props.question_id}> Next</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
  )
    }  
  
    


export default CSSQuestion;