require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
    try {
        const { amount } = JSON.parse(event.body);

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "inr",
            description: "Testing",
            payment_method_types: ["card"],
            shipping: {
                name: "Saurabh Dang",
                address: {
                    line1: 'B100',
                    postal_code: '110086',
                    city: 'New Delhi',
                    state: 'Delhi',
                    country: 'India',
                  },
            }
        });

        return {
            statusCode: 200,
            body: JSON.stringify({paymentIntent})
        }
    } catch (error) {
        console.log({error});
        return {
            statusCode: 400,
            body: JSON.stringify({error})
        };
    }
}