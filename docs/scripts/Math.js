function lerp(x1, x2, t) {
    return x1 + (x2 - x1) * t;
}

function lerp2(c1, c2, t) {
    return {x: lerp(c1.x, c2.x, t), y: lerp(c1.y, c2.y, t)};
}

export { lerp, lerp2 };