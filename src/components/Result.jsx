
const Result = ({results}) => {
  return (
    <div>
      {
          results.map(
               (result) => (
                    <div key={result.id} className="">
                         <h2>{result.original_title}</h2>
                    </div>
               )
          )
      }
    </div>
  )
}

export default Result
