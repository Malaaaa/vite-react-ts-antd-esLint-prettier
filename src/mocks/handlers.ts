import { rest } from 'msw'

const token = "woshitoken"

export const handlers = [
    rest.get('/me', (req, res, ctx) => {
        const headers = req.headers.all()
        if (headers.authentication !== `Bearer ${token}`) {
            return res(
                ctx.json({
                    message: 'You shall not pass. Please login first.',
                }),
                ctx.status(401)
            )
        }
        return res(
            ctx.json({
                user: {
                    first_name: 'Test',
                    last_name: 'User',
                },
                token,
            }),
            ctx.status(200)
        )
    }),
    rest.post('/login', (req, res, ctx) => {
        return res(
            ctx.delay(400),
            ctx.json({
                user: {
                    first_name: 'Test',
                    last_name: 'User',
                },
                token,
            })
        )
    }),
]
