document.addEventListener('DOMContentLoaded', function() {
    const purchaseForm = document.getElementById('purchase');
    if (purchaseForm) {
        purchaseForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            const busNumber = document.getElementById('bus_number').value;
            const ticketCount = document.getElementById('ticket_count').value;
            
            if (ticketCount < 1 || ticketCount > 3) {
                alert('You can only purchase between 1 and 3 tickets.');
                return;
            }

            const response = await fetch('/api/purchase', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ bus_number: busNumber, ticket_count: ticketCount }),
            });

            if (response.ok) {
                window.location.href = 'confirmation.html';
            } else {
                alert('Purchase Failed');
            }
        });
    }
});
