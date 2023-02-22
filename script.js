var bubbles = document.querySelectorAll('.bubble');
var bubblePositions = [];

// Get random initial positions for each bubble
bubbles.forEach(function(bubble) {
  var randomX = Math.floor(Math.random() * window.innerWidth);
  var randomY = Math.floor(Math.random() * window.innerHeight);
  bubble.style.left = randomX + 'px';
  bubble.style.top = randomY + 'px';
  bubblePositions.push({
    x: randomX,
    y: randomY
  });
});

document.addEventListener('mousemove', function(event) {
  bubbles.forEach(function(bubble, index) {
    var xDistance = Math.abs(event.clientX - bubble.offsetLeft - bubble.offsetWidth / 2);
    var yDistance = Math.abs(event.clientY - bubble.offsetTop - bubble.offsetHeight / 2);
    var totalDistance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    
    if (totalDistance < 50) {
      var angle = Math.atan2(yDistance, xDistance);
      var newX = bubble.offsetLeft + Math.cos(angle) * 10;
      var newY = bubble.offsetTop + Math.sin(angle) * 10;
      bubble.style.left = newX + 'px';
      bubble.style.top = newY + 'px';
    } else {
      // Move the bubble back to its initial position
      var currentX = parseFloat(bubble.style.left);
      var currentY = parseFloat(bubble.style.top);
      var targetX = bubblePositions[index].x;
      var targetY = bubblePositions[index].y;
      var distanceX = targetX - currentX;
      var distanceY = targetY - currentY;
      bubble.style.left = currentX + distanceX / 20 + 'px';
      bubble.style.top = currentY + distanceY / 20 + 'px';
    }
  });
});
