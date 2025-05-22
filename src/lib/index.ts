export function delayed(value, s = 5) {
    return new Promise((f) => {
        setTimeout(() => f(value), s * 1000);
    });
}