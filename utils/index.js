export const checkImageURL = (url) => {
    if (!url) return false

    const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|bmp|jpeg|gif|webp)$', 'i');
    return pattern.test(url);
}