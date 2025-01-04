const cors = require("cors");
const express = require("express");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/checkout", async (req, res) => {
  console.log("Request:", req.body);

  let error;
  let status;
  try {
    const { product, token } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });

    const idempotency_key = Math.random();
    const charge = await stripe.charges.create(
      {
        amount: product.price * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${product.name}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip
          }
        }
      },
      {
        idempotency_key
      }
    );
    status = "success";
  } catch (error) {
    status = "failure";
  }

  res.json({ error, status });
});

app.listen(5000);
