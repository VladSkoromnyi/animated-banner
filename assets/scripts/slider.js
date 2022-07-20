const shiftValues = {
	shiftSlide: 300,
	index: 1,
}

export const slideAnimation = () => {
	if (
		shiftValues.index === document
			.querySelector('.sneakers')
			.childElementCount
	) {
		shiftValues.shiftSlide = 0;
		shiftValues.index = 0;
	} 

	document
		.querySelector('.sneakers')
		.style
		.transform = `translateX(-${shiftValues.shiftSlide}px)`;
	
	shiftValues.shiftSlide += 300;
	shiftValues.index++;
}
