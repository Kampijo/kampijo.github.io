import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import {
    ComposableMap,
    Geographies,
    Geography,
    Graticule
} from "react-simple-maps";
import { geoRobinson } from "d3-geo-projection";

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const width = 800;
const height = 450;

const projection = geoRobinson()
    .translate([width / 2, height / 2])
    .scale(125);

const highlighted = [
    "AU",
    "BE",
    "BO",
    "CA",
    "CL",
    "CN",
    "HR",
    "DK",
    "FR",
    "DE",
    "GR",
    "HK",
    "IS",
    "ID",
    "IT",
    "JP",
    "KR",
    "LA",
    "MO",
    "MY",
    "ME",
    "NL",
    "NO",
    "PE",
    "PH",
    "PT",
    "SG",
    "ES",
    "SE",
    "CH",
    "TW",
    "TH",
    "TR",
    "GB",
    "VN",
    "VA",
    "US",
]
const MapChart = ({ setTooltipContent }) => {
    return (
        <div className="world-map-container">
            <ComposableMap data-tip="" projection={projection} width={width} height={height}>
                <Graticule stroke="#F0F0F0" strokeOpacity="0.8" />
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map(geo => {
                            const isHighlighted =
                                highlighted.indexOf(geo.properties.ISO_A2) !== -1;
                            return (<Geography
                                key={geo.rsmKey}
                                geography={geo}
                                onMouseEnter={() => {
                                    const { NAME } = geo.properties;
                                    setTooltipContent(`${NAME}`);
                                }}
                                onMouseLeave={() => {
                                    setTooltipContent("");
                                }}
                                fill={isHighlighted ? "#00897B" : "#D6D6DA"}
                                stroke="#F7F7F7"
                                strokeWidth="0.25"
                                style={{
                                    default: { outline: "none" },
                                    hover: {
                                        fill: "#00897B",
                                        outline: "none"
                                    },
                                    pressed: {
                                        fill: "#00897B",
                                        outline: "none"
                                    },
                                }}
                            />
                            )
                        })
                    }
                </Geographies>
            </ComposableMap>
        </div>
    );
};

const WorldMap = () => {
    const [content, setContent] = useState("");
    return (
        <div className="world-map-container">
            <MapChart setTooltipContent={setContent} />
            <ReactTooltip>{content}</ReactTooltip>
        </div >
    );
}

export default WorldMap
