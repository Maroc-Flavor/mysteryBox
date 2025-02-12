export default function imageLoader({ src, width, quality }) {
	if (src.startsWith('https://')) {
		return src;
	}
	return src;
}