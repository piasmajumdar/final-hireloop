import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
    'seeker_pro': 'price_1TjisN3i5n1nxLHwiOmaIHKX',
    'seeker_premium': 'price_1Tjjgp3i5n1nxLHwsilV6ggZ',
    'recruiter_growth': 'price_1Tjjd03i5n1nxLHwSxhr8k8O',
    'recruiter_enterprise': 'price_1Tjjc23i5n1nxLHwx4QmGR3M',
}