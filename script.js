// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Warning signs calculator
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const resultCount = document.getElementById('result-count');
const resultText = document.getElementById('result-text');
const calculateBtn = document.getElementById('calculate-btn');
const resultCircle = document.getElementById('result-circle');

function updateResult() {
    let checkedCount = 0;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) checkedCount++;
    });
    
    resultCount.textContent = checkedCount;
    
    if (checkedCount === 0) {
        resultText.textContent = "Check items that apply";
        resultCircle.className = "w-32 h-32 rounded-full border-8 border-gray-200 flex items-center justify-center mx-auto mb-4";
    } else if (checkedCount <= 2) {
        resultText.textContent = "Mild concern";
        resultCircle.className = "w-32 h-32 rounded-full border-8 border-yellow-200 flex items-center justify-center mx-auto mb-4";
    } else if (checkedCount <= 4) {
        resultText.textContent = "Moderate concern";
        resultCircle.className = "w-32 h-32 rounded-full border-8 border-orange-200 flex items-center justify-center mx-auto mb-4";
    } else {
        resultText.textContent = "High concern";
        resultCircle.className = "w-32 h-32 rounded-full border-8 border-red-200 flex items-center justify-center mx-auto mb-4";
    }
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateResult);
});

calculateBtn.addEventListener('click', function() {
    const checkedCount = parseInt(resultCount.textContent);
    if (checkedCount > 0) {
        alert(`Based on ${checkedCount} warning signs, we recommend reviewing our solutions section and considering setting clearer screen time boundaries.`);
    }
});

// FAQ accordion
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const icon = this.querySelector('i');
        
        // Toggle answer visibility
        answer.classList.toggle('hidden');
        
        // Rotate icon
        if (answer.classList.contains('hidden')) {
            icon.style.transform = 'rotate(0deg)';
        } else {
            icon.style.transform = 'rotate(180deg)';
        }
        
        // Close other open answers
        faqQuestions.forEach(q => {
            if (q !== this) {
                q.nextElementSibling.classList.add('hidden');
                q.querySelector('i').style.transform = 'rotate(0deg)';
            }
        });
    });
});

// Age group tabs
const ageTabs = document.querySelectorAll('.age-group-tab');
ageTabs.forEach(tab => {
    tab.addEventListener('click', function() {
        // Update active tab styling
        ageTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        // In a real implementation, you would load different content based on the age group
        // For this demo, we'll just show an alert
        const ageGroup = this.getAttribute('data-age');
        console.log(`Loading content for age group: ${ageGroup}`);
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});



/* ===================== HelpfulResources.html ===================== */

