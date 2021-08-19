


const Recipe = ({receiptData}) => {
   

    return ( 
        <div className="containerFood">

            <p className="aroundText">Food Around The World: <strong> {receiptData.cuisineType}</strong></p>
            <p className="mealType">{receiptData.mealType}</p>
            <img src={receiptData.image} alt =""/>  
           <h3>{receiptData.label}</h3>
           <p className="ingredients">{receiptData.ingredientLines}</p>      
          <button className="btnMore"> <a href={receiptData.url} target="_blank" rel="noopener noreferrer">More info</a></button>

        </div>
     );
}
 
export default Recipe;