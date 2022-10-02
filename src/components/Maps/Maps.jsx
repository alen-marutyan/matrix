import React, {useState} from 'react';
import {ComposableMap, Geographies, Geography} from "react-simple-maps";
const geoUrl = "/features.json";

const Maps = () => {
    const [data, setData] = useState([
        {
            ISO3: "USA"
        }
    ])

    return (
        <div className='map' style={{width: 240, height: 150, display: "flex", justifyContent: "center",alignItems: 'center'}}>
            <ComposableMap
                projectionConfig={{
                    rotate: [-10, 0, 0],
                    scale: 147
                }}
            >
                {data.length > 0 && (
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => {
                                const d = data.find((s) => s.ISO3 === geo.id);
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={d ? "#f6d45f" : "#848880"}
                                        style={{
                                            default: {
                                                outline: "none"
                                            },
                                            hover: {
                                                outline: "none"
                                            },
                                            pressed: {
                                                outline: "none"
                                            },
                                        }}
                                    />
                                );
                            })
                        }
                    </Geographies>
                )}
            </ComposableMap>
        </div>
    );
};

export default Maps;
