import cn from "classnames";


function FlipCard({ card }) {
  return (
    <div className="flip-card-outer">
      <div
        className={cn("flip-card-inner", {
          "hover-trigger": card
        })}
      >
        <div className="card front">
          <div className="card-body d-flex justify-content-center align-items-center">
               <img src={card.book_image} key={card.id} alt={card.title} style={{height: "350px", margin: "10px"}} />
            
          </div>
        </div>
        <div className="card back">
          <div className="card-body d-flex justify-content-center align-items-center">
              <p className="titleandauthor"> {card.title} by {card.author}</p>
          </div>
        <div>
            <p classname="description"> {card.description}</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;


