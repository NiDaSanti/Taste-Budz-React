import React from 'react';

const AnalyzedRecipeInstruction = ({recipes}) => {
  console.log('props ',recipes)
  return (
    <>
      {recipes.map((analyze) => {
        {/* console.log(analyze.analyzedInstructions); */}
        analyze.analyzedInstructions.map((instruct) => {
          {/* console.log('deep dive into ', instruct.steps); */}
          instruct.steps.map((is) => {
            console.log('deeper within ', is)
            return <div>
              <p>{is.step}</p>
            </div>
          })
        })
      })}
    </>
    
  );
}

export default AnalyzedRecipeInstruction;