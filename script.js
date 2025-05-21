document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("typing-text");
    const text = "I'm Nizam Ullah";
    const dots = "...";
    let index = 0;
    let isTyping = true;

    function showDots(callback) {
        textElement.innerHTML = "";
        let dotIndex = 0;
        let dotInterval = setInterval(() => {
            textElement.innerHTML = dots.substring(0, dotIndex + 1);
            dotIndex++;
            if (dotIndex === dots.length) {
                clearInterval(dotInterval);
                setTimeout(() => {
                    textElement.innerHTML = "";
                    callback();
                }, 500);
            }
        }, 500);
    }

    function typeText() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 130);
        } else {
            setTimeout(eraseText, 1000);
        }
    }

    function eraseText() {
        if (index > 0) {
            textElement.innerHTML = text.substring(0, index - 1);
            index--;
            setTimeout(eraseText, 100);
        } else {
            setTimeout(() => {
                showDots(typeText);
            }, 500);
        }
    }

    showDots(typeText);
});

document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scrolling
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) { // Only prevent default for in-page links
                e.preventDefault();
                const targetId = href.substring(1);
                document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
            }
            // For external links (e.g., about.html), allow default navigation
        });
    });
});
// dawnloading cv
document.getElementById('downloadCV').addEventListener('click', () => {
    document.getElementById('downloadCV').addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = 'blue-professional-modern-cv.pdf'; // Your renamed file
        link.download = 'Nizam-Ullah-Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});