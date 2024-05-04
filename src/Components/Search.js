import React from 'react';
import "./Search.css";
import CardsFly from "./CardsFly";

function Search() {

    return (
        <div className="container-search">
            {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Lottie
                        options={{
                            loop: true,
                            autoplay: true,
                            animationData: animationData,
                        }}
                        height={200}
                        width={200}
                    />
                </div> */}
            <CardsFly />
        </div>
    );
}

export default Search;
