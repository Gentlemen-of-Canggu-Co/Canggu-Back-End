function EventDetailPage(){

    return(
        <div>
            <h1>Event Name @ Spot Name</h1>

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu_YG7-dxa-Y6LweEAKHqXDgt_ZkPx1XZ5Yg&usqp=CAU" alt="eventpicture" />

            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                <p>January 29th, 4pm</p>
                <p>250k IDR</p>
            </div>

            <p>A coffeehouse, coffee shop, or café is an establishment that primarily serves coffee of various types, notably espresso, latte, and cappuccino. Some coffeehouses may serve cold drinks, such as iced coffee and iced tea, as well as other non-caffeinated beverages. In continental Europe, cafés serve alcoholic drinks. A coffeehouse may also serve food, such as light snacks, sandwiches, muffins, fruit, or pastries. Coffeehouses range from owner-operated small businesses to large multinational corporations. Some coffeehouse chains operate on a franchise business model, with numerous branches across various countries around the world.</p>

<div style={{display: "flex", flexDirection: "column"}}>
<button>Add to Calendar</button>
<button>See more Events</button>
</div>


        </div>
    )
}


export default EventDetailPage