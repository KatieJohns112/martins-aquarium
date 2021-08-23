/**
 *  Fish which renders individual fish objects as HTML
 */
 export const Location = (locObj) => {
	return `<article class="location-class">
				<ul>
					<li class="loc-details">Country: ${locObj.country}</li>
					<li class="loc-details">Climate: ${locObj.climate}</li>
			    </ul>
        	</article>`
}