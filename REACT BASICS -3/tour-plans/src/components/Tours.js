import Card from "./Card";

function Tours({ tours, removeTour }) {

    return (
        <div className="container">
            <div>
                <h2 className="title">Plan With Aman</h2>
            </div>

            <div className="cards">
                {
                    tours.map((tour) => { //map function is used here
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card> // each tour object is passed to card component by using Spread Operator
                    })
                }
            </div>

        </div>
    );
}

export default Tours; 