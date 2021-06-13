const getImageId = () => {
    return Math.min(6, Math.round(Math.random() * 7));
}

export { getImageId }