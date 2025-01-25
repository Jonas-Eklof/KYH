const images = import.meta.glob("../assets/images/*.jpg", { eager: true });

const imageList = Object.values(images).map((module) => module.default);

export default imageList;
