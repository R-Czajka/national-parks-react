export function ParkImages() {


    const pImages = [
        {
            "id": 1,
            "description": "Lahemma",
            "image": "./images/Lahemaa.png"
        },
        {
            "id": 2,
            "description": "Soomaa",
            "image": "./images/Sooma.png"
        },
        {
            "id": 1,
            "description": "Karula",
            "image": "./images/Karula.png"
        },
        {
            "id": 1,
            "description": "Matsalu",
            "image": "./images/Matsalu.png"
        }
    ]


    function displayImages() {
        const imagesAdded = pImages.map((imageList) => (
            <div key={imageList.id}>
                <h1>{imageList.description}</h1>
                <img src={imageList.image} alt={imageList.description} />
            </div>
        ))
    }


    return(
        <div>
            <h2>National Parks</h2>
            {displayImages}
        </div>


    );


}
