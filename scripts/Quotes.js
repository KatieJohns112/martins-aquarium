/**
 *  Fish which renders individual fish objects as HTML
 */
 export const Quotes = (quoteObj) => {
	return `<article class="quote-class">
				<ul>
					<li class="quote-details">Travel Tip: ${quoteObj.quote}</li>
				 </ul>
        	</article>`
}