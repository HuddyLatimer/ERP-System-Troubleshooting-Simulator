// Module content mapping
const moduleContent = {
    inventory: {
        title: 'Inventory Management',
        description: 'Manage stock levels, item master data, and warehouse operations.'
    },
    finance: {
        title: 'Financial Management',
        description: 'Handle accounting, budgeting, and financial reporting.'
    },
    hr: {
        title: 'Human Resources',
        description: 'Manage employee data, payroll, and personnel administration.'
    }
};

// Error simulation timer
let errorTimer;

// Handle module button clicks
document.querySelectorAll('.menu-btn').forEach(button => {
    button.addEventListener('click', () => {
        const module = button.dataset.module;
        displayModule(module);
        startErrorSimulation();
    });
});

// Display module content
function displayModule(module) {
    const content = moduleContent[module];
    const moduleDisplay = document.getElementById('moduleDisplay');
    
    moduleDisplay.innerHTML = `
        <h2>${content.title}</h2>
        <p>${content.description}</p>
        <div class="module-actions">
            <button onclick="simulateAction('${module}')">Perform Random Action</button>
        </div>
    `;
}

// Simulate random action
async function simulateAction(module) {
    try {
        const response = await fetch('/api/errors');
        const error = await response.json();
        displayError(error);
    } catch (err) {
        console.error('Error fetching error simulation:', err);
    }
}

// Display error in knowledge panel
function displayError(error) {
    const errorInfo = document.getElementById('errorInfo');
    errorInfo.innerHTML = `
        <h4>Error ${error.code}</h4>
        <p class="error-message">${error.message}</p>
        <hr>
        <h4>Troubleshooting Steps:</h4>
        <p>${error.solution}</p>
    `;
}

// Start error simulation
function startErrorSimulation() {
    // Clear existing timer
    if (errorTimer) {
        clearInterval(errorTimer);
    }
    
    // Set new timer for random errors (between 10-30 seconds)
    errorTimer = setInterval(() => {
        simulateAction();
    }, Math.random() * 20000 + 10000);
}

// Handle logout
document.getElementById('logoutBtn').addEventListener('click', async () => {
    try {
        await fetch('/api/logout');
        window.location.href = '/';
    } catch (error) {
        console.error('Logout error:', error);
    }
});

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    // Display welcome message (already in HTML)
    // Start error simulation with longer initial delay
    setTimeout(() => {
        startErrorSimulation();
    }, 5000);
});
