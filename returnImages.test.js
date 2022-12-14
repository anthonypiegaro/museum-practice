const returnImages = require("./returnImages");
const department = "Egyptian Art";

// Checking whether two sets are equal
const eqSet = (xs, ys) =>
    xs.size === ys.size &&
    [...xs].every((x) => ys.has(x));

test("all images are valid", async () => {
    const images = await returnImages(department);
    expect(images).not.toContain(undefined);
    expect(images).not.toContain(null);
    expect(images).not.toContain("");
});

for (let i=0; i < 10; i++) {
    test("images are random", async () => {
        const imagesOne = await returnImages(department);
        const imagesTwo = await returnImages(department);
        const equal = eqSet(imagesOne, imagesTwo);
        expect(equal).toBe(false);
    });
}