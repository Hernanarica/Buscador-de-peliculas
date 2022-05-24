function getImagePath(nameImage) {
	return new URL(`../assets/imgs/${ nameImage }`, import.meta.url).href;
}

export default getImagePath;