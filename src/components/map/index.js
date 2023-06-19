import React from "react"
import { containerStyle, MapWrapper } from "./styles";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { MAP_SETTINGS } from "../../config/data";

const Map = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.MAP_API
    })

    return (
        <MapWrapper>
            {
                isLoaded &&
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={MAP_SETTINGS.center}
                    zoom={MAP_SETTINGS.zoom}
                >
                    <Marker
                        position={MAP_SETTINGS.center}
                    />
                </GoogleMap>
            }
        </MapWrapper>
    )
}

export default Map;