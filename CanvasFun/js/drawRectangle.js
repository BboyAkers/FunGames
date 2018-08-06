function main() {
    const canvas = document.getElementById('canvasLayout');
    if(!canvas) {
        console.log('Failed to grab <canvas>');
        return;
    }
    let ctx = canvas.getContext('2d');
    //set blue color
    ctx.fillStyle = 'rgba(0, 0, 255, 1.0)';
    //fill a rectangle with the color
    ctx.fillRect(120, 10, 150, 150);
}