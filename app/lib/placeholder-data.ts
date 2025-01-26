import { v4 as uuidv4 } from 'uuid';
const plans = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "monthly",
    plus: 11.99,
    essential: 19.99,
    business: 18,
    businessPlus: 30,
  },
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    name: "yearly",
    plus : 9.99,
    essential: 16.58,
    business: 15,
    businessPlus: 24,
  },
];

const users = [
  {
    id : uuidv4(),
    name : "Hckerson",
    email : "hckerson@gmail.com",
    password : "264813795Aa#"
  }
]
export { plans, users };
