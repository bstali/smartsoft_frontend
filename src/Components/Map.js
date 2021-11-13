import React, {useState} from 'react'
import {GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api'

const MapContainer = () => {
    const [selected, setSelected] = useState({})

    const onSelect = (item) => {
        setSelected(item)
    }
    const locations = [
        {
            name: 'Pakistan',
            info: '34-B Rajppot Town, Canal Road, Lahore, Pakistan',
            location: {
                lat: 31.5252883,
                lng: 74.3448707
            }
        },
        {
            name: 'US',
            info: 'F',
            location: {
                lat: 51.1109104,
                lng: 0.5404029
            }
        }
    ]

    const mapStyles = {
        height: '40vh',
        width: '100%'
    }

    const defaultCenter = {
        lat: 38.9637,
        lng: 35.2433
    }
    return (
        <LoadScript>
            <GoogleMap mapContainerStyle={mapStyles} zoom={2} center={defaultCenter}>
                {locations.map((item) => {
                    return <Marker key={item.name} position={item.location} onClick={() => onSelect(item)} />
                })}
                {selected.location && (
                    <InfoWindow position={selected.location} clickable={true} onCloseClick={() => setSelected({})}>
                        <p>{selected.info}</p>
                    </InfoWindow>
                )}
            </GoogleMap>
        </LoadScript>
    )
}
export default MapContainer
