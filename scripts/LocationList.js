/**
 *  FishList renders individual fish objects as HTML
 */

// TODO: Import `getFish` from the data module
import { getLocation } from "./LocationData.js";
import { Location } from "./Location.js";

export const LocationList = () => {

    // Get a reference to the `<section class="fishList">` element
    const contentElement = document.querySelector(".LocationList");
    const allLocations = getLocation();

    // // Add to the existing HTML in the content element
	let locationHTMLRepresentation = "";
	for (const oneThingFromLocations of allLocations) {
		locationHTMLRepresentation += Location(oneThingFromLocations);
	}

    contentElement.innerHTML += `${locationHTMLRepresentation}`
} 
