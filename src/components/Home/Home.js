import React from "react";

export default function Home ({ title, price, image }){

    return (
        <div>
            <div className='product'>
                <p className='title'>Name: {title}</p>
                <p className='price'>Price: ${price}</p>
                <img src={image} alt={title} />
            </div>

        </div>
    );

}

/*I tried this method but it didn't work can you please explain why*/

/*export default function Home ( userProp ){

    return (
        <div className='product'>
            <p className='title'>Name: {userProp.title}</p>
            <p className='price'>Price: ${userProp.price}</p>
            <img src={userProp.image} alt={title} />
        </div>
    );

}
*/




