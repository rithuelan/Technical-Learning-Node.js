getUser(userId, (user) => {
    getOrders(user, (orders) => {
        processOrders(orders, (processed) => {
            sendEmail(processed, (confirmation) => {
                console.log("Order Processed:", confirmation);
            });
        });
    });
});