const { default: Card } = require("./Card")

const Result = ({results}) => {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {
          results?.map(
               (result) => (
                    <Card key={result?.id} result={result || null} />
               )
          )
      }
    </div>
  )
}

export default Result
